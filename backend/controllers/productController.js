const Product = require("../models/Product");
const semanticSearch = require("../utils/semanticSearch");

exports.getProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
};

exports.addProduct = async(req,res)=>{
    const product = new Product(req.body);
    await product.save();
    res.json(product);
};

exports.searchProduct = async(req,res)=>{
    const query = req.query.q;
    const keywords = semanticSearch(query);

    const products = await Product.find({
        name:{$in:keywords}
    });

    res.json(products);
};
