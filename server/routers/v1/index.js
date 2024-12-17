const helloworldRoute = require("./helloworldRoute");
const authRoute = require('./authRoute')
const blogRoute = require("./blogRoute")
const routesV1 = [
    {
        path: "/hello",
        route: helloworldRoute,
    },
    {
        path: "/auth",
        route: authRoute,
    },
    {
        path: "/blogs",
        route: blogRoute,
    },
];



module.exports = routesV1;