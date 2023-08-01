import { Router } from "express";
import {
    findUserByEmail,
    createUser,
    updatePassword,
} from "../controllers/auth.js";
import { createHashPass, comparePass } from "../config/bcryptPass.js";
import { generateToken, generateRefreshToken } from "../config/jwtToken.js";
import { mailOptions, transporter } from "../utils/mailer.js";

export const authRouter = Router();
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
authRouter.post("/register", async (req, res, next) => {
    try {
        const data = req.body;
        if (
            !data.first_name ||
            !data.last_name ||
            !data.email ||
            !data.password
        )
            throw new Error("Requested data is not enough");
        const findUser = await findUserByEmail(data.email);
        if (findUser) throw new Error("Email already exsits");
        const hash = createHashPass(data.password);
        const newUser = await createUser({ ...data, password: hash });
        const token = generateToken({
            id: newUser.id,
            user_name: `${newUser.first_name} ${newUser.last_name}`,
        });
        const refreshToken = generateRefreshToken({
            id: newUser.id,
            user_name: `${newUser.first_name} ${newUser.last_name}`,
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

authRouter.post("/signin", async (req, res, next) => {
    try {
        const data = req.body;
        if (!data.email || !data.password)
            throw new Error("Email and password id require");
        const findUser = await findUserByEmail(data.email);
        if (!findUser) throw new Error("User not found");
        if (!comparePass(data.password, findUser.password))
            throw new Error("Password incorrect");
        const token = generateToken({
            id: findUser.id,
            user_name: `${findUser.first_name} ${findUser.last_name}`,
        });
        const refreshToken = generateRefreshToken({
            id: findUser.id,
            user_name: `${findUser.first_name} ${findUser.last_name}`,
        });
        res.cookie("refresh_token", refreshToken, {
            maxAge: 3 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        }).json({
            status: 200,
            message: "OK",
            element: {
                user: findUser,
                token,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.post("/forgot-password", async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);
        if (user && !user.oauthid) {
            transporter.sendMail(mailOptions(email), function (error, info) {
                if (error) throw new Error("Mailing error");
                else {
                    res.json({
                        status: 200,
                        message: "OK",
                        element: {
                            user: {
                                id: user.id,
                            },
                        },
                    });
                }
            });
        } else throw new Error("User not found");
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.get("/update-password/:id", async (req, res, next) => {
    const id = req.query.id;
    try {
        const { password, repeastPassword } = req.body;
        if (password != repeastPassword)
            throw new Error("Password and repeat password is not same");
        const user = await updatePassword(password, id);
        res.json({
            status: 200,
            message: "OK",
            element: {
                user,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});
