const controller = require("../controller/logic/products.controller");

exports.productsRoutes = (app) => {
    app.get("/products", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/products/byidentifier/:identifier", (req, res, next) => {
        controller.getByIdentifier(req, res, next);
    });

    app.post("/products", (req, res, next) => {
        controller.createProducts(req, res, next);
    });

    app.put("/products", (req, res, next) => {
        controller.updateProducts(req, res, next);
    });

    app.delete("/products", (req, res, next) => {
        controller.deleteProducts(req, res, next);
    });
};
