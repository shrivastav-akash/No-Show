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
    origin: ["https://attendify-1-w2mu.onrender.com"], // Allow your deployed frontend
    credentials: true,
  }),
);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/courses", require("./routes/courses"));
app.use("/api/users", require("./routes/users"));

app.get("/", (req, res) => res.send("API Running"));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
