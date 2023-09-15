import { google } from "googleapis";
import dotenv from "dotenv";
import { Router } from "express";
import axios from "axios";
import { generateToken, generateRefreshToken } from "../../config/jwtToken.js";
import { createUser, findUserByEmail } from "../../controllers/auth.js";

dotenv.config();
export const googleRouter = Router();

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:5050/auth/google/callback"
);

const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
];

const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
});

googleRouter.get("/", (req, res) => {
    res.json({
        status: "ok",
        url: authorizationUrl,
    });
});

googleRouter.get("/callback", async (req, res, next) => {
    try {
        const code = req.query.code;
        const { tokens } = await oauth2Client.getToken(code);
        const googleUser = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokens.id_token}`,
                    },
                }
            )
            .then((res) => res.data)
            .catch((error) => {
                throw new Error(error.message);
            });
        const { id, email, name, given_name, family_name } = googleUser;
        let newUser;
        const findUser = await findUserByEmail(email);
        if (findUser && id == findUser.dataValues.oauthid) newUser = findUser;
        else {
            newUser = await createUser({
                oauthid: id,
                email,
                first_name: family_name,
                last_name: given_name,
            });
        }
        const refreshToken = generateRefreshToken({
            id: newUser.dataValues.id,
            user_name: name,
        });
        res.cookie("refresh_token", refreshToken, {
            maxAge: 3 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        }).redirect(process.env.CLIENT_URL);
    } catch (e) {
        res.status(400);
        next(e);
    }
});
