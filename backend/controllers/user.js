const User = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports.userRegister = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const { username, password, email } = req.body;
    console.log(req.body);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username && username === "") {
      response.errMessage = "Please enter a username";
      return res.status(400).json(response);
    } else if (password && password === "") {
      response.errMessage = "Please enter a password";
      return res.status(400).json(response);
    } else if (!emailRegex.test(email)) {
      response.errMessage = "Please enter a valid email";
      return res.status(400).json(response);
    }
    const user = new User({
      username,
      password,
      email,
    });
    const savedUser = await user.save();
    response.success = true;
    response.message = "User registered successfully";
    response.data = savedUser;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error registering user";
    return res.status(500).json(response);
  }
};

module.exports.userLogin = async (req, res) => {
  const response = {
    success: false,
    message: "",
    errMessage: "",
    data: "",
  };
  try {
    const { email, password } = req.body;
    console.log("Login");
    let token = "";
    const user = await User.findOne({ email });
    if (!user) {
      response.errMessage = "User not found";
      return res.status(404).json(response);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    token = await user.generateAuthToken();
    const maxAge = 1000 * 60;
    res.cookie("jwttoken", token, {
      httpOnly: true,
      expires: maxAge,
      maxAge: maxAge * 1000,
    });

    await User.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          token: token,
        },
      },
      { new: true }
    );
    response.success = true;
    response.message = "User logged in successfully";
    response.data = user;
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.errMessage = "Error logging in user";
    return res.status(500).json(response);
  }
};

module.exports.userLogout = async (req, res) => {
    const response = {
      success: false,
      message: "",
      errMessage: "",
      data: "",
    };
    try {
      await User.findOneAndUpdate(
        { _id: req.userid },
        {
          $set: {
            token: "",
          },
        },
        { new: true }
      );
      res.clearCookie("jwttoken");
      response.success = true;
      response.message = "User logged out successfully";
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      response.errMessage = "Error logging out user";
      return res.status(500).json(response);
    }
  };
  
  module.exports.userProfile = async (req, res) => {
    const response = {
      success: false,
      message: "",
      errMessage: "",
      data: "",
    };
    try {
      const user = await User.findOne({ _id: req.userid }).populate("history.product");
      if (!user) {
        response.errMessage = "User not found";
        return res.status(404).json(response);
      }
      response.success = true;
      response.message = "User profile fetched successfully";
      response.data = user;
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      response.errMessage = "Error fetching user profile";
      return res.status(500).json(response);
    }
  };
  