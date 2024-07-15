const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const authRoutes = require('./Routes/authroutes');



console.log('EMAIL:', process.env.EMAIL);
console.log('PASSWORD:', process.env.PASSWORD); 

require('dotenv').config();
app.use(cors());
app.use(express.json());

console.log('Attempting to connect to MongoDB using URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));



app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
