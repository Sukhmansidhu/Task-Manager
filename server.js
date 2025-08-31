const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");  
const flash = require("connect-flash");      

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cookieParser());

app.use(session({ 
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: true 
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.message = req.flash("message");
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.redirect("/auth/login");  
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    if (process.env.NODE_ENV !== "production") {
      app.listen(8080, () => console.log("🚀 Server running on http://localhost:8080"));
    }
  })
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = app;