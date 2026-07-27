// Building the BackEnd part using NodeJS 
const express = require("express");
const cors = require("cors");
const products = require("./products.json");
const app = express();
app.use(cors());

app.get("/products", (req, res) => {
    res.json(products);
});
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});


// BackEnd is up and running : http://localhost:3000/products