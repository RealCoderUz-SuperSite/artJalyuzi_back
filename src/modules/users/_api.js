const express = require("express");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const {
  postLoginUser,
  getMe,
  editUserMe,
  Main,
  Dev,
} = require("./_controllers");

const router = express.Router();

router.post("/login", postLoginUser);
router.get("/admin/me", isLoggedIn, getMe);
router.patch("/admin/me", isLoggedIn, editUserMe);

router.get("/", Main);
router.get("/dev", Dev);

module.exports = router;
