import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

export const mailOptions = (to) => {
    return {
        from: process.env.GOOGLE_APP_EMAIL,
        to,
        subject: "Customer account password reset",
        html: `<h1>DAWN shop</h1><h3>Reset your password</h3><p>Follow this link to reset your customer account passowrd at <a>DAWN shop</a></p><a href="http://localhost:5050">Reset your password</a>`,
    };
};
