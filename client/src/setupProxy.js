const proxy = require("http-proxy-middleware");
require('dotenv').config();

module.exports = app => {
    app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
};