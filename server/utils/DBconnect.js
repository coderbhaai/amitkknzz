const mongoose = require("mongoose");
const User = require("../models/User");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/auth-system");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Check if default admin exists, if not create one
    const adminExists = await User.findOne({ email: "lavish6377289324@gmail.com" });
    
    if (!adminExists) {
      await User.create({
        email: "lavish6377289324@gmail.com",
        password: "123456789",
        firstName: "Admin",
        lastName: "User",
        role: "ADMIN",
        isActive: true
      });
      console.log("Default admin user created");
    }
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
};

module.exports = { connectDB }; 