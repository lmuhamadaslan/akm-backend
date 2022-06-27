import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import CookieParser from "cookie-parser";
import AkmModulRoute from "./routes/AkmModulRoute.js";
import AkmTopikRoute from "./routes/AkmTopikRoute.js";
import AkmSoalRoute from "./routes/AkmSoalRoute.js";
// import AuthRoute from "./routes/AuthRoute.js";
// import UserRoute from "./routes/UserRoute.js";
import AkmUserRoute from "./routes/AkmUserRoute.js";
import AkmJawabanRoute from "./routes/AkmJawabanRoute.js";
import AkmGroupRoute from "./routes/AkmGroupRoute.js";
import AkmTestRoute from "./routes/AkmTestRoute.js";
import AkmTestResultRoute from "./routes/AkmTestResultRoute.js";

const app = express();
const port = 5000;
dotenv.config();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/akm_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database");
});

// middleware
app.use(cors());
app.use(express.json());
app.use(CookieParser());

app.use(AkmModulRoute);
app.use(AkmTopikRoute);
app.use(AkmSoalRoute);
// app.use(UserRoute);
// app.use("/api/auth", AuthRoute);
app.use(AkmUserRoute);
app.use(AkmJawabanRoute);
app.use(AkmGroupRoute);
app.use(AkmTestRoute);
app.use(AkmTestResultRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// listener
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
