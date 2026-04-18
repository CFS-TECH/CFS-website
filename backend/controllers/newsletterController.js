const Newsletter = require('../models/Newsletter');
const sendEmail = require('../utils/sendEmail');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    let subscriber = await Newsletter.findOne({ email });
    
    if (subscriber) {
      return res.status(400).json({ success: false, message: 'Already subscribed' });
    }

    subscriber = await Newsletter.create({ email });

    // Send welcome email to subscriber
    try {
      await sendEmail({
        email: email,
        subject: 'Welcome to Crossover Fintech Support Newsletter!',
        html: `
          <h1>Welcome to CFS!</h1>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You will now receive weekly updates on fintech and digital growth.</p>
          <br/>
          <p>Best Regards,</p>
          <p><b>CFS Team</b></p>
        `
      });

      // Notify admin about new subscriber
      await sendEmail({
        email: process.env.EMAIL_USER,
        subject: 'New Newsletter Subscriber',
        html: `<h3>New subscriber alert!</h3><p>Email: ${email}</p>`
      });
    } catch (emailError) {
      console.error('Email could not be sent', emailError);
      // We still return success since the subscriber was created in the DB
    }

    res.status(201).json({ success: true, data: subscriber });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all subscribers
// @route   GET /api/newsletter
// @access  Private/Admin
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Delete subscriber
// @route   DELETE /api/newsletter/:id
// @access  Private/Admin
const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Newsletter.findByIdAndDelete(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ success: false, message: 'Subscriber not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { subscribe, getSubscribers, deleteSubscriber };
