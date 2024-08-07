const express = require("express");
const { verifyToken } = require("../middleware/verify");
const { create, deleteCategory, allCategories } = require("../controllers/categories");

const router = express.Router();

router.post("/create", verifyToken, create);
router.delete("/remove/:_id", verifyToken, deleteCategory);

router.get("/all-cats", allCategories);

module.exports = router;
