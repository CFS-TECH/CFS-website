const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Load Swagger document
const swaggerDocument = YAML.load('./swagger.yaml');

// Connect to Database
connectDB();

const app = express();
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Swagger API Docs Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import Routes (To be implemented)
const leadRoutes = require('./routes/leadRoutes');
const careerRoutes = require('./routes/careerRoutes');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const jobRoutes = require('./routes/jobRoutes');
const industryUpdateRoutes = require('./routes/industryUpdateRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/leads', leadRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/industry-updates', industryUpdateRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
