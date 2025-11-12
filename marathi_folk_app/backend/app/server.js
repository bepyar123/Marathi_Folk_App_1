// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import communityRoutes from "./app/routes/CommunityRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));

// // MongoDB Connection
// mongoose.connect("mongodb://localhost:27017/culturalHub", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.log("❌ MongoDB Error:", err));

// // Routes
// app.use("/api/community", communityRoutes);

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
