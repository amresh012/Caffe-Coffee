const express = require("express");
const { updateConfig, getConfig } = require("../controller/websiteCtrl");
const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getConfig);
router.post("/", updateConfig);// authMiddleware, isAdmin, add these here
module.exports = router;
