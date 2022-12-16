import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const authToken = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (req.headers.authorization) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decode.id);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Unauthorized - Admin Only");
  }
};

export { authToken, admin };
