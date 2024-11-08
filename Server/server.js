
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
import Appliance from '../Models/Appliance.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = user;
      next();
    });
  };

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
      const hashedPassword = await bcrypt.hash(password, 10);
        
      const user = new User({
          username,
          email,
          password: hashedPassword,
      });

      await user.save();

      const token = jwt.sign({ id: user._id }, JWT_SECRET);

      res.status(201).json({ message: 'User created successfully' , token});
  } catch (error) {
       res.status(400).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.status(200).json({ message: 'Login successful', token, user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/save-appliance', authenticateToken, async (req, res) => {
  const { appliance, company, time, frequency, rating } = req.body;

  try {
    const record = new Appliance({
      userId: req.user.id, // Link the record to the logged-in user's ID
      appliance,
      company,
      time,
      frequency,
      rating,
    });

    await record.save();
    res.status(201).json({ message: 'Record saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save record', details: error.message });
  }
});

app.get('/get-appliance', authenticateToken, async (req, res) => {
  try {
    const appliances = await Appliance.find({ userId: req.user.id });
    
    // Transform the data to match the expected format
    const formattedAppliances = appliances.map(appliance => ({
      appliance: appliance.appliance,
      company: appliance.company,
      time: appliance.time,
      frequency: appliance.frequency,
      rating: appliance.rating
    }));

    res.status(200).json(formattedAppliances);
  } catch (error) {
    console.error("Error retrieving appliances:", error);
    res.status(500).json({ 
      error: 'Failed to retrieve appliances',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
