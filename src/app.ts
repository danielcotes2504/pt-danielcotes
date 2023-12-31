import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import postRoutes from "./routes/postRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import comentarioRoutes from "./routes/comentarioRoutes";

config();

const app: Application = express();

// Settings
app.set("port", parseInt(process.env.PORT || "3000"));

const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    return callback(null, true);
  },
  credentials: true,
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  morgan(":method :url :status :response-time ms - :remote-user [:date[clf]]")
);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/", [postRoutes, categoriaRoutes, comentarioRoutes]);

export default app;
