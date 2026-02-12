require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: [process.env.CLIENT_URL], // Allow your deployed frontend and local dev
    credentials: true,
  }),
);

// Database Connection & Server Start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Routes
    app.use("/api/auth", require("./routes/auth"));
    app.use("/api/courses", require("./routes/courses"));
    app.use("/api/users", require("./routes/users"));

    app.get("/", (req, res) => res.send("backend Running"));
    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

startServer();
