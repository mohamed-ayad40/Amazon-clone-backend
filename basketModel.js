const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true, // This will store the Firebase UID
    },
    basket: {
        type: Array, // Or another appropriate structure for your items
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Model = mongoose.model("Order", schema);
module.exports = Model;
