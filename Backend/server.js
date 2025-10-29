const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://mongodb-service:27017/myapp';
mongoose.connect(MONGO_URI).then(() => console.log('✅ MongoDB Connected'));

// Define Item schema
const Item = mongoose.model('Item', {
  name: String,
  createdAt: { type: Date, default: Date.now }
});

// API Routes
app.get('/api/items', async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
});

app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));
