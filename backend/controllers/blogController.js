const Blog = require('../models/Blog');

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private/Admin
const createBlog = async (req, res) => {
  try {
    let { slug } = req.body;
    let baseSlug = slug;
    let counter = 1;
    
    // Check if slug exists and find a unique one
    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    const blog = await Blog.create({ ...req.body, slug });
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Slug already exists. Please try a different title.' });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all published blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
  try {
    const { section, category, limit } = req.query;
    const query = { status: 'published' };
    
    if (section) query.section = section;
    if (category) query.category = category;

    let blogsQuery = Blog.find(query).sort({ createdAt: -1 });

    if (limit) {
      blogsQuery = blogsQuery.limit(parseInt(limit));
    }

    const blogs = await blogsQuery;
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: 'published' });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
const updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    if (req.body.slug && req.body.slug !== blog.slug) {
      let { slug } = req.body;
      let baseSlug = slug;
      let counter = 1;
      
      // Check if another blog already has this slug
      while (await Blog.findOne({ slug, _id: { $ne: req.params.id } })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
      req.body.slug = slug;
    }

    blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Slug already exists. Please try a different title.' });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog
};
