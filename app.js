/** packages */
const express = require("express");
const config = require("config");

/** app configration */

const app = express();
const port = config.get("server-port");

console.log("Listening on port:", port);
app.listen(port, () =>{
    console.log("server is running...")
});