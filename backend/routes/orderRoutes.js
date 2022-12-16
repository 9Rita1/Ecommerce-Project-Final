import express from "express";

const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { authToken, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(authToken, addOrderItems)
  .get(authToken, admin, getOrders);
router.route("/myorders").get(authToken, getMyOrders);
router.route("/:id").get(authToken, getOrderById);
router.route("/:id/pay").put(authToken, updateOrderToPaid);
router.route("/:id/deliver").put(authToken, admin, updateOrderToDelivered);
export default router;
