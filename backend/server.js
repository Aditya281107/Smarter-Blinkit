require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Debug check */
console.log("Mongo URI:", process.env.MONGO_URI);

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    console.log("MongoDB Connected");

    /* Routes */
    app.use("/api/auth", authRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/payment", paymentRoutes);

    /* Start Server */
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });

})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});
