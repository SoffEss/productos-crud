/** packages */
const express = require("express");
const config = require("config");
const bodyParser= require("body-parser")

/** app configuration */

const app = express();
const port = config.get("server-port");
const ipfn= require("./middleware/getIpAdress")
app.use("*", ipfn)
const jsonParser= bodyParser.json()
const ulrEncodedParser= bodyParser.urlencoded(
    {extended: true}
)
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