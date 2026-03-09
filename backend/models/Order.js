const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products:Array,
    total:Number,
    paymentStatus:String
});

module.exports = mongoose.model("Order",orderSchema);
