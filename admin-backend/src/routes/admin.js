const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/auth");

router.post("/login", adminController.login);
router.get("/informasi", auth, adminController.getInformasi);
router.put("/informasi", auth, adminController.updateInformasi);

module.exports = router;
