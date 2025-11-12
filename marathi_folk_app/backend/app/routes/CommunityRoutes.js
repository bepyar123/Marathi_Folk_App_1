// import express from "express";
// import multer from "multer";
// import Community from "../models/Community.js";

// const router = express.Router();

// // Configure image upload
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // POST - Add community knowledge
// router.post("/", upload.array("images"), async (req, res) => {
//   try {
//     const { title, category, location, content } = req.body;
//     const images = req.files.map((file) => file.filename);
//     const newEntry = new Community({ title, category, location, content, images });
//     await newEntry.save();
//     res.status(201).json({ message: "Knowledge shared successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET - Retrieve all shared knowledge
// router.get("/", async (req, res) => {
//   const data = await Community.find().sort({ createdAt: -1 });
//   res.json(data);
// });

// export default router;
