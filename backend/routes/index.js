const initRoutes = (app) => {
    app.use("/api/v1/user", require("./user"));
    app.use("/api/v1/product", require("./product"));
    app.use("/api/v1/cart", require("./cart"));
};

module.exports = initRoutes;