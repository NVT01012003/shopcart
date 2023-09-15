import { findUser } from "../controllers/auth.js";
import { verifyToken } from "../config/jwtToken.js";

export const handleToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) throw new Error("Token not found");
        const decoded = verifyToken(token);
        if (!decoded) throw new Error("Token expired");
        const { id } = decoded;
        const user = await findUser(id);
        if (!user.is_admin) throw new Error("Forbidden");
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400);
        next(e);
    }
};
