const _blogSchema = require("../database/models/BlogSchema");
const errorHandler = require("../middleware/errorHandler");
const slugify = require("slugify");

const fs = require("fs");

const createBlog = async (req, res, next) => {
  const { title, content, category, slug, seoTitle, metaDescription, image, description } = req.body;

  try {
    // console.log(req.file, req.body, "here is");
    // return;

    const alreadyExist = await _blogSchema.findOne({ slug });
    if (alreadyExist) return next(errorHandler(400, "Already Exist."));

    if (alreadyExist) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.json({ error: "Title is taken" });
    }

    let payloadData = {
      title,
      description,
      content,
      category,
      slug,
      seoTitle,
      metaDescription,
      image: {
        url: req.file ? req.file.path : undefined,
      },
      viewCount: 0,
    };

    const newPost = await new _blogSchema(payloadData).save();
    return res.json(newPost);
  } catch (err) {
    next(err);
  }
};

const editBlog = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { title, content, slug, image, category, seoTitle, metaDescription, description } = req.body;

    if (!title || !content || !category || !seoTitle || !metaDescription || !description) {
      return next(errorHandler(400, "All fields are required"));
    }

    const existingPost = await _blogSchema.findById(postId);

    if (req.file && existingPost.image && existingPost.image.url) {
      // Delete the old image from the filesystem
      fs.unlink(existingPost.image.url, (err) => {
        if (err) console.error(`Error deleting file: ${existingPost.image.url}`, err);
      });
    }

    let payloadData = {
      title,
      content,
      category,
      slug,
      seoTitle,
      metaDescription,
      description,
      image: {
        url: req.file ? req.file.path : existingPost.image.url,
      },
    };

    const post = await _blogSchema
      .findByIdAndUpdate(postId, payloadData, {
        new: true,
      })
      .populate("category", "_id name slug");

    return res.json(post);
  } catch (err) {
    next(err);
  }
};

const ViewCountAdd = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await _blogSchema.findOne({ slug });
    post.viewCount += 1;
    await post.save();
    res.json({ ok: true });
  } catch (error) {}
};

const allBlogs = async (req, res) => {
  try {
    const blogs = await _blogSchema.find({}).populate("category", "_id name slug").sort({ createdAt: -1 });
    return res.json(blogs);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const singleBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await _blogSchema.findOne({ _id: id }).populate("category", "_id name slug");

    return res.json(blog);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const removeBlog = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await _blogSchema.findByIdAndDelete(postId);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const singleBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    console.log(slug, "here si the slg");
    const blog = await _blogSchema.findOne({ slug }).populate("category", "_id name slug");
    console.log(blog);
    return res.json(blog);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  createBlog,
  editBlog,
  allBlogs,
  singleBlogById,
  removeBlog,
  ViewCountAdd,
  singleBlogBySlug,
};
