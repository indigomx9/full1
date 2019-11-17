import "reflect-metadata";
import express from "express";
import logger from "morgan";
import postRoute from "./routes/postRoute";
import { notFoundError, errorHandler } from "./middleware/ErrorMiddleware";
import { createConnection } from "typeorm";

const main = async () => {
    await createConnection();
    const app: express.Application = await express();

    // CORS Setup.
    app.use((
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({ "status message": "OK" });
        }
        next();
    });

    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api/", postRoute);
    app.use(notFoundError, errorHandler);

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to exit.`);
    })
};

main();

