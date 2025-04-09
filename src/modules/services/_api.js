const express = require("express");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const {
  addServices,
  patchServices,
  showServices,
  deleteServices,
  getServices,
} = require("./_controllers");
const upload = require("../../shared/upload");

const router = express.Router();

router.post("/services", addServices);
router.get("/services", getServices);
router.get("/services/:id", showServices);
router.patch("/services/:id", isLoggedIn, patchServices);
router.delete("/services/:id", isLoggedIn, deleteServices);

module.exports = router;
