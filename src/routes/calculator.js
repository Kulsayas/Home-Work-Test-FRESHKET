import express from "express";
import { calculateFinal } from "../controller/calculateFinal.js";

const calculatorRouter = express.Router();

calculatorRouter.post("/", calculateFinal);

export default calculatorRouter;
