// Dependecias
import express from "express";
import morgan from "morgan";
import router from "./routes/auth.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json()); /** Esto es para que los datos de express 
se conviertan en json*/

app.use("/api",router);

export default app;
