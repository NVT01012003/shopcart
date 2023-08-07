import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const client_url = process.env.CLIENT_URL;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

export const mailOptions = ({ to, link }) => {
    return {
        from: process.env.GOOGLE_APP_EMAIL,
        to,
        subject: "Customer account password reset",
        html: `<h1>DAWN shop</h1>
        <h3>Reset your password</h3>
        <p>Follow this link to reset your customer account passowrd at <a href="${client_url}">DAWN shop</a></p>
        <a href="${link}">Reset your password</a>
        <p>This link is only valid for 5 minutes from now`,
    };
};
