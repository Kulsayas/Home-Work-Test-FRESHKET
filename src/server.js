import express from "express";

//Custom route
import calculatorRouter from "./routes/calculator.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); //ทำให้มันเป็น json ได้

app.use("/api/calculator", calculatorRouter);

//api endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}✅`);
});
