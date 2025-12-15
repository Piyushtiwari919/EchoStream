import 'dotenv/config';
import express from "express";
import cors from "cors";
import apiRouter from './routes/api.routes.js';

const app = express();

//Middlewares
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

app.use("/api/recommend",apiRouter);

app.listen(process.env.SERVER_PORT,()=>console.log(`Server running on port ${process.env.SERVER_PORT}`));