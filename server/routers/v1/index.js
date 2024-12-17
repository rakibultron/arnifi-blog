const helloworldRoute = require("./helloworldRoute");
const authRoute = require('./authRoute')
const routesV1 = [
    {
        path: "/hello",
        route: helloworldRoute,
    },
    {
        path: "/auth",
        route: authRoute,
    },
];



module.exports = routesV1;