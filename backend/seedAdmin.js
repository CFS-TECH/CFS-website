const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

// Load environment variables
dotenv.config();

const seedAdmin = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('Error: MONGO_URI is not defined in your .env file.');
      process.exit(1);
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully.');

    const email = 'crossoverfintechhr@gmail.com';
    
    // Check if admin already exists
    let admin = await Admin.findOne({ email });
    const password = 'AdminPassword123';

    if (admin) {
      admin.password = password;
      await admin.save();
      console.log('--------------------------------------------------');
      console.log('Admin password updated/reset successfully!');
      console.log(`Email:    ${email}`);
      console.log(`Password: ${password}`);
      console.log('--------------------------------------------------');
      process.exit(0);
    }

    admin = new Admin({
      email,
      password,
    });

    await admin.save();
    console.log('--------------------------------------------------');
    console.log('Admin user created successfully!');
    console.log(`Email:    ${email}`);
    console.log(`Password: ${password}`);
    console.log('--------------------------------------------------');
    console.log('IMPORTANT: Please change your password after logging in.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin user:', error.message);
    process.exit(1);
  }
};

seedAdmin();
