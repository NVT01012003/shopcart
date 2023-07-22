import dotenv from "dotenv";
import axios from "axios";
import { Router } from "express";
import { generateToken, generateRefreshToken } from "../../config/jwtToken.js";
import { createUser, findUserByEmail } from "../../controllers/auth.js";

export const facebookRouter = Router();

dotenv.config();
const client_id = process.env.FACEBOOK_CLIENT_ID;
const client_secret = process.env.FACEBOOK_CLIENT_SECRET;
const redirect_uri = "http://localhost:5050/auth/facebook/callback";
const scope = ["email", "public_profile"].join(",");

const authorizationUrl =
    `https://www.facebook.com/v17.0/dialog/oauth?` +
    `client_id=${client_id}` +
    `&redirect_uri=${redirect_uri}` +
    `&scope=${scope}`;

const getFacebookUser = async (code) => {
    const authenticationUrl =
        `https://graph.facebook.com/v17.0/oauth/access_token?` +
        `client_id=${client_id}` +
        `&redirect_uri=${redirect_uri}` +
        `&client_secret=${client_secret}` +
        `&code=${code}`;

    const { data } = await axios.get(authenticationUrl);
    return data;
};

facebookRouter.get("/", (req, res) => {
    res.json({
        status: "ok",
        url: authorizationUrl,
    });
});
facebookRouter.get("/callback", async (req, res, next) => {
    try {
        const code = req.query.code;
        const tokens = await getFacebookUser(code);
        const { data } = await axios({
            url: "https://graph.facebook.com/me",
            method: "get",
            params: {
                fields: ["id", "email", "first_name", "last_name"].join(","),
                access_token: tokens.access_token,
            },
        });
        const { id, email, last_name, first_name } = data;
        let newUser;
        const findUser = await findUserByEmail(email);
        if (findUser && id == findUser.oauthid) newUser = findUser;
        else {
            newUser = await createUser({
                oauthid: id,
                email,
                first_name,
                last_name,
            });
        }
        const token = generateToken({
            id: newUser.id,
            user_name: `${first_name} ${last_name}`,
        });
        const refreshToken = generateRefreshToken({
            id: newUser.id,
            user_name: `${first_name} ${last_name}`,
        });
        res.cookie("refresh_token", refreshToken, {
            maxAge: 3 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        }).json({
            status: 200,
            message: "OK",
            element: {
                user: newUser,
                token,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});
