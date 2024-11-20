const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const authentication = require("../middlewares/Auth");
const { setDestination, upload } = require("../middlewares/image");

// router.post("/addProduct", productController.addProduct);
router.post(
  "/addProduct",
//   authentication,
  setDestination("public/images"),
  upload.single("image"),
  productController.addProduct
);

router.get("/getProducts", productController.getProducts);

module.exports = router;
