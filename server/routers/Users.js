const express = require("express");
const { register, login, signOut, currentUser, registerAnyUser } = require("../controllers/auth");
const { verifyToken } = require("../middleware/verify");

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);

router.get("/current-user", verifyToken, currentUser);

module.exports = router;
