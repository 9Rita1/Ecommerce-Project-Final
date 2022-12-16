import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productControllers.js";
import { authToken, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(authToken, admin, createProduct);
router.route("/:id/reviews").post(authToken, createProductReview);
router.get("/top", getTopProducts);

router
  .route("/:id")
  .get(getProductsById)
  .delete(authToken, admin, deleteProduct)
  .put(authToken, admin, updateProduct);

export default router;
