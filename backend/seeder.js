import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Data/users.js";
import products from "./Data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDb"))
  .catch((err) => console.error("could not connect to Db"));

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported");
    process.error(`${error}`);
    process.exit(1);
  } catch (error) {}
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed");
    process.error(`${error}`);
    process.exit(1);
  } catch (error) {}
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
