const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please provide a user"],
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Please provide a product"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide a quantity"],
    },
    total: {
        type: Number,
        required: [true, "Please provide a total"],
    },
});

module.exports = mongoose.model('Cart', CartSchema);