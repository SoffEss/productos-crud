/** packages */
const express = require("express");
const config = require("config");
const bodyParser= require("body-parser")

/** app configuration */

const app = express();
const port = config.get("server-port");
const jsonParser= bodyParser.json()
const ipfn= require("./middleware/getIpAdress")
app.use("*", ipfn)

const ulrEncodedParser= bodyParser.urlencoded(
    {extended: true}
); // <-- faltaba ;

app.use(jsonParser)

app.use(ulrEncodedParser)
const { productsRoutes } = require("./routes/products.routes");
productsRoutes(app)
/**Methods */

app.get("/", (req, res, next) => {
    res.send("Welcome to products rest API")
})

app.listen(port, () => {
    console.log("server is running...")
});