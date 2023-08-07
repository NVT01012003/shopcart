import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const access_token_secret = process.env.ACCESS_TOKEN_SECRET;
const refresh_token_secret = process.env.REFRESH_TOKEN_SECRET;

export const generateToken = (data) => {
    const token = jwt.sign(data, access_token_secret, {
        expiresIn: "1d",
    });
    return token;
};

export const generateRefreshToken = (data) => {
    const token = jwt.sign(data, refresh_token_secret, {
        expiresIn: "3d",
    });
    return token;
};

export const generateForgotToken = ({ email, secret }) => {
    const token = jwt.sign({ email }, secret, {
        // update later 5 minutes
        expiresIn: "1h",
    });
    return token;
};

export const verifyToken = (token) => {
    const decoded = jwt.verify(token, access_token_secret);
    return decoded;
};

export const verifyRefreshToken = (token) => {
    const decoded = jwt.verify(token, access_token_secret);
    return decoded;
};

export const verifyForgotToken = ({ token, secret }) => {
    const decoded = jwt.verify(token, secret);
    return decoded;
};
