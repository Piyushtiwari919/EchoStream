import express from "express";
import getApiResponse from "../controllers/api.controller.js";

const apiRouter = express.Router();

apiRouter.post("/",getApiResponse);

export default apiRouter;