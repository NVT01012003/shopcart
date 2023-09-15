import { Router } from "express";
import {
    findUserByEmail,
    createUser,
    updatePassword,
    findUser,
    findAdminByEmail,
} from "../controllers/auth.js";
import { createHashPass, comparePass } from "../config/bcryptPass.js";
import {
    generateToken,
    generateRefreshToken,
    verifyRefreshToken,
    generateForgotToken,
    verifyForgotToken,
} from "../config/jwtToken.js";
import { mailOptions, transporter } from "../utils/mailer.js";
import { validatePass, validateEmail } from "../config/bcryptPass.js";
import dotenv from "dotenv";

dotenv.config();
export const authRouter = Router();
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
        else if (!validateEmail(data.email))
            throw new Error("Email is invalid");
        else if (!validatePass(data.password))
            throw new Error("Password is invalid");
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
                token: `Bearer ${token}`,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(400);
        next(e);
    }
});

authRouter.post("/signin", async (req, res, next) => {
    try {
        const data = req.body;
        if (!data.email || !data.password)
            throw new Error("Email and password is require");
        else if (!validateEmail(data.email))
            throw new Error("Email is invalid");
        else if (!validatePass(data.password))
            throw new Error("Password is invalid");
        const findUser = await findUserByEmail(data.email, true);
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
                user: {
                    ...findUser,
                    password: null,
                },
                token: `Bearer ${token}`,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(400);
        next(e);
    }
});

authRouter.post("/forgot-password", async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);
        if (user && !user.oauthid) {
            const secret = `${process.env.FORGOT_PASS_SECRET}${user.password}`;
            const port = process.env.PORT;
            const token = generateForgotToken({
                email,
                secret,
            });
            transporter.sendMail(
                mailOptions({
                    to: email,
                    link: `http://localhost:${port}/auth/forgot-password/${user.id}/${token}`,
                }),
                function (error) {
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
                }
            );
        } else throw new Error("User not found");
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.get("/forgot-password/:id/:token", async (req, res, next) => {
    try {
        const { id, token } = req.params;
        const user = await findUser(id);
        const secret = `${process.env.FORGOT_PASS_SECRET}${user.password}`;
        const client_url = process.env.CLIENT_URL;
        const { email } = verifyForgotToken({ token, secret });
        res.render("reset", {
            id,
            email,
            client_url,
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.post("/reset-password/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const { password } = req.body;
        const hash = createHashPass(password);
        const user = await updatePassword({ password: hash, id });
        res.json({
            status: 200,
            message: "OK",
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.get("/fetch-user", async (req, res, next) => {
    try {
        const { refresh_token } = req.cookies;
        const payload = verifyRefreshToken(refresh_token);
        if (!payload) throw new Error("Forbidden");
        const { id } = payload;
        const user = await findUser(id);
        const token = generateToken({
            id: user.id,
            user_name: `${user.first_name} ${user.last_name}`,
        });
        res.json({
            status: 200,
            message: "OK",
            element: {
                user: user,
                token: `Bearer ${token}`,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});

authRouter.post("/admin", async (req, res, next) => {
    try {
        const data = req.body;
        if (!data.email || !data.password)
            throw new Error("Email and password is require");
        else if (!validateEmail(data.email))
            throw new Error("Email is invalid");
        else if (!validatePass(data.password))
            throw new Error("Password is invalid");
        const findUser = await findAdminByEmail(data.email, true);
        if (!findUser) throw new Error("User not found");
        if (!comparePass(data.password, findUser.password))
            throw new Error("Password incorrect");
        const token = generateToken({
            id: findUser.id,
            user_name: `${findUser.first_name} ${findUser.last_name}`,
        });
        res.json({
            status: 200,
            message: "OK",
            element: {
                user: {
                    ...findUser,
                    password: null,
                },
                token: `Bearer ${token}`,
            },
        });
    } catch (e) {
        res.status(400);
        next(e);
    }
});
