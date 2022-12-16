import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { authToken, admin } from "../middleware/authMiddleware.js";

router.route("/").post(createUser).get(authToken, admin, getUsers);

router.post("/login", authUser);

router
  .route("/profile")
  .get(authToken, getUserProfile)
  .put(authToken, updateUserProfile);

router
  .route("/:id")
  .delete(authToken, admin, deleteUser)
  .get(authToken, admin, getUserById)
  .put(authToken, admin, updateUser);

export default router;
