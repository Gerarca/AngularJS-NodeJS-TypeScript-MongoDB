import express from "express";
import { PORT_SERVER } from "./enviroment";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/index";
import path from "path";

//setting
dotenv.config();
const app = express();
app.set('port', PORT_SERVER(process.env.PORT_SERVER));

//middleware
app.use(morgan('dev'));
app.use(express.json());

//router
app.use( '/api', router );

//to store files public
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;