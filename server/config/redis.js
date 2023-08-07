import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();
export const client = createClient({
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: "localhost",
        port: 6379,
    },
});
