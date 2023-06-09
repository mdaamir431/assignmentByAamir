import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import moviesRoutes from "./Routers/MoviesRoute.js";

// initialize
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// connect to database
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Assignment DATABASE IS CONNECTED");
} catch (error) {
  console.error.bind(console, "Assignment DATABASE CONNECTION ERROR");
}

// middlewares
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  res.status(req.status || 500).send({
    message: err.message || "Something went wrong !",
  });
  next();
});

app.use("/uploads", express.static("uploads"));

// routes
app.get("/", (req, res) => res.sendStatus(200));
app.get("/api", (req, res) => res.send("Api is working..."));
app.use('/api/movies',moviesRoutes)

// 404
app.use((req, res) => {
  res.status(404).send({ message: "404 Not Found !" });
});

// start server
 const localServer = app.listen(PORT, () => {
  console.log(`Assignmen IS RUNNING ON PORT http://localhost:${PORT}`);
});
