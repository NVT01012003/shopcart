import express from "express";
import dotenv from "dotenv";
import { router } from "./auth/index.js";
import { apiRouter } from "./routes/index.js";
import { sequelize } from "./config/dbConnect.js";
import bodyParser from "body-parser";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import { client } from "./config/redis.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./utils/dbRelation.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();
const app = express();
const port = process.env.PORT;
// middleware
app.use(
    cors({
        origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.set("view engine", "ejs");
app.set("views", `${process.cwd()}/views`);
app.use(express.static(__dirname + "/views"));
// routes
app.use("/auth", router);
app.use("/api", apiRouter);

// middleware handle error
app.use(notFound);
app.use(errorHandler);

app.listen(port, async () => {
    console.log(`Server is running on port: ${port}`);
    try {
        await sequelize.authenticate();
        (async () => {
            await sequelize.sync();
        })();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
});
