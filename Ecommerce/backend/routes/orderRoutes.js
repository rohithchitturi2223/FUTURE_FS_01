import express from "express";
import { placeOrder, getOrderHistory } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);  // Protect the route
router.get("/", protect, getOrderHistory);  // Get user orders

export default router;
