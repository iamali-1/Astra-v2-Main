const express = require("express");
const { BlogImageUpload } = require("../middleware/uploads");
const { createBlog, editBlog, allBlogs, singleBlogById, ViewCountAdd, removeBlog, singleBlogBySlug } = require("../controllers/blogs");
const { verifyToken } = require("../middleware/verify");

const router = express.Router();

router.post("/create-blog", verifyToken, BlogImageUpload.single("image"), (req, res, next) => {
  if (req.fileValidationError) {
    return res.json({ error: req.fileValidationError });
  }
  createBlog(req, res, next);
});

router.post("/blog/:postId", verifyToken, BlogImageUpload.single("image"), (req, res, next) => {
  if (req.fileValidationError) {
    return res.json({ error: req.fileValidationError });
  }
  editBlog(req, res, next);
});

router.get("/admin-blogs", verifyToken, allBlogs);

router.get("/admin/blog/:id", verifyToken, singleBlogById);

router.delete("/blog/:postId", verifyToken, removeBlog);

// client
router.get("/all-blogs", allBlogs);
router.put("/add-view/:slug", ViewCountAdd);
router.get('/by-slug/:slug', singleBlogBySlug)

module.exports = router;
