# Smarter BlinkIt – Smart Local Marketplace 

## Project Overview

Smarter BlinkIt is a smart marketplace web application designed to connect buyers with nearby sellers. Traditional shopping platforms require users to search for products individually, which can be inefficient when trying to fulfill a complete need such as preparing a meal or buying essentials.

This project introduces a more intelligent approach where the system focuses on **understanding user intent, prioritizing nearby stores, and simplifying inventory management for sellers**.


# Core Features

## Dual Login System

The platform supports two types of users:

**Buyer**

* Search for products
* View suggested items
* Add items to cart
* Place orders through checkout

**Seller**

* Add and manage products
* Update product inventory
* Modify stock using barcode scanning

Each user is provided with a **separate dashboard based on their role**.


## Intent Based Search

The platform supports a simple **intent-based search mechanism** instead of only matching keywords.

Example:

User Input
“I have a cold”

Suggested Products
Honey, Ginger, Lemon, Herbal Tea

This is implemented using a **semantic mapping approach** where common user situations are mapped to relevant products.


## Local-First Product Availability

To improve delivery efficiency and support local businesses, the system prioritizes **nearby sellers**.

* User location is detected using browser geolocation.
* Seller locations are stored in the system.
* The platform prioritizes products available from **nearest stores first**.

This helps reduce delivery time and improves availability.


## Barcode Based Inventory Update

Sellers can update their inventory quickly using **barcode scanning**.

Workflow:

1. Seller scans a product barcode.
2. The system identifies the product.
3. Seller updates the quantity.
4. Inventory is updated automatically.

This reduces manual product entry and improves stock management efficiency.

---

## Dummy Payment Integration

A simulated payment system is integrated using **Razorpay Test Mode** to replicate a real checkout experience.

Checkout Flow:

* Buyer adds products to cart
* Buyer proceeds to checkout
* Razorpay test payment gateway opens
* Payment is simulated
* Order is recorded in the system

This allows demonstration of a **complete payment workflow without real transactions**.

---

# Technologies Used

**Frontend**

* React.js
* Axios

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Authentication**

* JSON Web Tokens (JWT)

**Additional Tools**

* Barcode scanning library
* Razorpay (Test Mode for payment simulation)



# Project Structure

smarter-blinkit
│
├── backend
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── paymentController.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── utils
│   │   ├── semanticSearch.js
│   │   └── barcodeScanner.js
│   │
│   ├── server.js
│   └── .env
│
├── frontend
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── BarcodeScanner.jsx
│   │
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── BuyerDashboard.jsx
│   │   ├── SellerDashboard.jsx
│   │   ├── SearchPage.jsx
│   │   └── Checkout.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── index.js
│
├── sample-data
│   └── products.json
│
└── README.md



# Architecture Approach

The project follows a simplified **MVC architecture** to keep the system modular and scalable.

* **Models** define the structure of the database.
* **Controllers** handle application logic such as search, authentication, and order processing.
* **Routes** manage API endpoints connecting frontend and backend.
* **Utils** contain helper functions such as semantic search and barcode processing.

This modular design allows the platform to be easily extended with advanced features in future stages.

# Future Scope

Future stages of the project will extend the system with additional intelligent features such as:

* AI based recipe agent that automatically fills the cart
* Product recommendations using graph databases
* Smart order splitting between multiple stores
* Real-time store performance dashboards

