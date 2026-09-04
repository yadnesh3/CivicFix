const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const departmentRoutes = require("./routes/departmentRoutes");
const userRoutes = require("./routes/userRoutes");
const issueRoutes = require("./routes/issueRoutes");
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/departments", departmentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/issues", issueRoutes);

app.get("/", (req, res) => {
  res.send("CivicFix Backend is running");
});

connectDB();





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});