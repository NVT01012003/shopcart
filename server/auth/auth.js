import { Router } from "express";
import { findUserByEmail, createUser } from "../controllers/auth.js";
import { createHashPass, comparePass } from "../config/bcryptPass.js";
import { generateToken, generateRefreshToken } from "../config/jwtToken.js";

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
