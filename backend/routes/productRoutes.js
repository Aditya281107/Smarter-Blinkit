const router = require("express").Router();
const {getProducts,addProduct,searchProduct} = require("../controllers/productController");

router.get("/",getProducts);
router.post("/",addProduct);
router.get("/search",searchProduct);

module.exports = router;
