require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routers/routes");
const app = express();

// Middleware setup
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API Routes
app.use(routes);

// Test route
app.get("/", (req, res) => res.send("Server is running"));

module.exports = { app };
