const express = require("express");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const {
  addPortfolios,
  patchPortfolios,
  showPortfolios,
  deletePortfolios,
  getPortfolios,
} = require("./_controllers");
const upload = require("../../shared/upload");

const router = express.Router();

router.post("/portfolios", addPortfolios);
router.get("/portfolios", getPortfolios);
router.get("/portfolios/:id", showPortfolios);
router.patch("/portfolios/:id", isLoggedIn, patchPortfolios);
router.delete("/portfolios/:id", isLoggedIn, deletePortfolios);

module.exports = router;
