const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);

app.listen(3001, () => console.log("Backend running on port 3001"));
