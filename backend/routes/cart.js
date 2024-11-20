const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");
const authentication = require("../middlewares/Auth");

router.post("/addCart", authentication, cartController.addCart);

router.get("/getCart", authentication, cartController.getCart);

router.delete("/deleteCart/:id", cartController.deleteCart);

router.post("/buyCart", authentication, cartController.buyCart);

router.get("/getCount", authentication, cartController.getCartCount);

module.exports = router;
