const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    barcode:String,
    quantity:Number,
    category:String
});

module.exports = mongoose.model("Product",productSchema);
