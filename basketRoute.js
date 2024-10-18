const express = require("express");
const {buyItems, getOrders} = require("./basketController");
const basketRouter = express.Router();
basketRouter.post("/buy-items", buyItems);
basketRouter.get("/get-items/:userId", getOrders);
module.exports = basketRouter;
