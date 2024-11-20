const Cart = require("../models/cart");
const User = require("../models/user");

module.exports.addCart = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    console.log(req.body);
    const { product, quantity, price } = req.body;
    const total = quantity * price;
    const cart = new Cart({
      user: req.userid,
      product,
      quantity,
      total: total,
    });
    const savedCart = await cart.save();
    response.success = true;
    response.message = "Cart added successfully";
    response.data = savedCart;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error adding cart";
    return res.status(500).json(response);
  }
};

module.exports.getCart = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const cart = await Cart.find({ user: req.userid }).populate("product");
    response.success = true;
    response.message = "Cart fetched successfully";
    response.data = cart;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error fetching cart";
    return res.status(500).json(response);
  }
};

module.exports.deleteCart = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    response.success = true;
    response.message = "Cart deleted successfully";
    response.data = cart;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error deleting cart";
    return res.status(500).json(response);
  }
};

module.exports.buyCart = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const cart = await Cart.find({ user: req.userid });
    const user = await User.findOne({ _id: req.userid });
    if (!user) {
      response.errMessage = "User not found";
      return res.status(404).json(response);
    }
    await Promise.all(cart.map(async (item) => {
      user.history.push({ product: item.product, quantity: item.quantity });
      await user.save();
      await Cart.findByIdAndDelete(item._id);
    }));
    response.success = true;
    response.message = "Cart bought successfully";
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error buying cart";
    return res.status(500).json(response);
  }
};

module.exports.getCartCount = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const cart = await Cart.find({ user: req.userid });
    response.success = true;
    response.message = "Cart count fetched successfully";
    response.data = cart.length;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error fetching cart count";
    return res.status(500).json(response);
  }
}
