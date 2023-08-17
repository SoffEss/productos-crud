/**packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");


/**Schema creation */
const productSchema = new mongoose.Schema({
    identifier: {
        type: "Number",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    cost: {
        type: "Number",
        required: true
    },
    category: {
        type: "String",
        required: true
    },
    expiration_date: {
        type: "Date",
        required: true
    },
    weight: {
        type: "Number",
        required: true
    }
});

/**Schema exportation */
productSchema.plugin(validator);
module.exports = productSchema;