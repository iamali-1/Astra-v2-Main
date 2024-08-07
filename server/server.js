require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./cors/options");
const connectDB = require("./database/db");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 7000;

console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

app.use("/uploads/blogImages", express.static("uploads/blogImages"));

app.use("/_astra", require("./routers/Users"));
app.use("/_astra", require("./routers/Categories"));
app.use("/_astra", require("./routers/Blogs"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "mine/build")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "mine", "build", "index.html")));
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.log(err);
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
