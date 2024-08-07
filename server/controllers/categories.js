const _categorySchema = require("../database/models/CategorySchema");
const errorHandler = require("../middleware/errorHandler");

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return next(errorHandler(400, "All fields are required"));

    const categoryExist = await _categorySchema.findOne({ name });
    if (categoryExist) return next(errorHandler(400, "All fields are required"));
    else if (!categoryExist) {
      const newCategory = new _categorySchema({ name });
      await newCategory.save();

      return res.status(201).json({
        msg: "Category created successfully",
        category: newCategory,
      });
    }
  } catch (error) {
    next(error);
  }
};

const allCategories = async (req, res, next) => {
  try {
    const allCategories = await _categorySchema.find({});
    return res.status(200).json({ categories: allCategories });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const _category = await _categorySchema.findById({ _id });
    if (!_category) {
      return next(errorHandler(404, "Not found"));
    }
    await _categorySchema.findByIdAndRemove(_id);
    return res.status(200).json({ msg: "Category has been removed", ok: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  allCategories,
  deleteCategory,
};
