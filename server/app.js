const routes = require("./routers/routes");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
require("dotenv").config();
const app = express();


// Middleware setup
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Cors
app.use(
    cors({
        origin: [
            "https://arnifi-blog.vercel.app"
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    })
);


// API Routes
app.use(routes);

// Test route
app.get("/", (req, res) => res.send("Server is running"));

module.exports = { app };
