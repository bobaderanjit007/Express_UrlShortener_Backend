const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {});
        console.log("✅ MongoDB Connected");
    }catch(err){
        console.error("❌ MongoDB Connection Failed:", err);
        process.exit(1);
    }
}

module.exports = connectDB;