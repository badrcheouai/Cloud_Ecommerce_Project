const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/UsersRouter");
const productRouter = require("./routes/ProductRouter");
const orderRouter = require("./routes/OrderRouter");

const app = express();

// ✅ MongoDB connection
const privateURLMongoDB = process.env.PRIVATE_URL_MONGODB_LOCALHOST;
const onlineURLMongoDB = process.env.ONLINE_URL_MONGODB;

mongoose.connect(onlineURLMongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
  process.exit(1);
});
mongoose.set("strictQuery", false);

// ✅ CORS fix for frontend on Vercel
app.use(cors({
  origin: "*", // or use "*" for full open access
  credentials: true
}));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ Static file hosting
app.use("/public", express.static("public"));
app.use("/public/productImages", express.static("public"));


// ✅ Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.get("/health", (req, res) => {
  res.status(200).send("Backend is alive ✅");
});


// ✅ Export for Vercel (no app.listen)
module.exports = app;
