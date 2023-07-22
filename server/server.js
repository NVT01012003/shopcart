import express from "express";
import dotenv from "dotenv";
import { router } from "./auth/index.js";
import { sequelize } from "./config/dbConnect.js";
import bodyParser from "body-parser";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import "./utils/dbRelation.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
// middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
// routes
app.use("/auth", router);

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
});
