const Basket = require("./basketModel");
exports.buyItems = async (req, res, next) => {
    const {userId, basket, amount} = req.body;
    console.log(userId);
    console.log(basket);
    console.log(amount);
    try {
        // Create a new order in MongoDB
        if (!userId) {
            return res.status(400).json({
                message: "Unauthenticated",
            });
        }
        const newOrder = new Basket({
            userId,
            basket,
            amount,
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({message: "Error creating order", error});
    }
};

exports.getOrders = async (req, res, next) => {
    const {userId} = req.params;
    console.log(req.params);
    try {
        const orders = await Basket.find({userId});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: "Error fetching orders", error});
    }
};
