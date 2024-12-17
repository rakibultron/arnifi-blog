const routes = require("./routers/routes");
const mongoose = require("mongoose");
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
            "https://arnifi-blog.vercel.app",
            "http://localhost:5173",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    })
);



console.log(process.env.DB_NAME)

// Connect to MongoDB
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.UNIQUE_DB_UUID}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log(`app connected with ${process.env.DB_NAME} database 🚀`);
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });


// API Routes
app.use(routes);

// Test route
app.get("/", (req, res) => res.send("Server is running"));

module.exports = { app };
