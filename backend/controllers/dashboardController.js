const Lead = require('../models/Lead');
const Blog = require('../models/Blog');
const Career = require('../models/Career');
const JobListing = require('../models/JobListing');
const Newsletter = require('../models/Newsletter');
const IndustryUpdate = require('../models/IndustryUpdate');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
  try {
    const [
      totalLeads,
      totalBlogs,
      totalApplications,
      totalJobs,
      totalSubscribers,
      totalIndustryUpdates
    ] = await Promise.all([
      Lead.countDocuments(),
      Blog.countDocuments(),
      Career.countDocuments(),
      JobListing.countDocuments(),
      Newsletter.countDocuments(),
      IndustryUpdate.countDocuments()
    ]);

    // Calculate lead breakdown
    const leadBreakdown = await Lead.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ]);

    // Calculate growth (mocked for now, or based on last month)
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const leadsLastMonth = await Lead.countDocuments({ createdAt: { $gte: lastMonth } });

    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        totalBlogs,
        totalApplications,
        totalJobs,
        totalSubscribers,
        totalIndustryUpdates,
        leadBreakdown,
        leadsLastMonth
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error fetching dashboard stats',
      error: error.message
    });
  }
};

// @desc    Get recent activity (latest leads and applications)
// @route   GET /api/dashboard/recent
// @access  Private/Admin
const getRecentActivity = async (req, res) => {
  try {
    const recentLeads = await Lead.find().sort({ createdAt: -1 }).limit(5);
    const recentApplications = await Career.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
      success: true,
      data: {
        recentLeads,
        recentApplications
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error fetching recent activity',
      error: error.message
    });
  }
};

module.exports = {
  getDashboardStats,
  getRecentActivity
};
