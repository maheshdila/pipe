const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb+srv://root:1234@cluster0.vpgmo31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }

    console.log(`Connecting to MongoDB at: ${mongoUri}`); // Debugging line
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
