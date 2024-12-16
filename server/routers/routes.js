const express = require("express");
const router = express.Router();

const routesV1 = require("./v1")

routesV1.forEach((route) => {
    router.use("/api/v1" + route.path, route.route);
});

module.exports = router;
