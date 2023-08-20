/** packages */
/**En el dto se realiza el desarrollo de las funciones
 * que crean, editan, eliminan y obtienen la información
 */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb")


/** using schemas */
const schema = require("../schemas/product.schema");
db()
schema.statics = {
    create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb); 
    },
    getAll: function (query, cb) {
        this.find(query, cb);
    },
    getByIdentifier: function (query, cb) {
        this.find(query, cb);
    },
    update: function (query, data, cb) {
        this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_user", schema);
module.exports = dto;