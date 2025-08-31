import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  const { items, shippingAddress, paymentMethod } = req.body;

  const order = new Order({
    user: req.user.id,
    items,
    shippingAddress,
    paymentMethod,
    totalPrice: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to place order" });
  }
};

export const getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
