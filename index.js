const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const authRoutes = require('./Routes/authroutes');


require('dotenv').config();

console.log('EMAIL:', process.env.EMAIL);
console.log('PASSWORD:', process.env.PASSWORD); 

app.use(cors({
  origin:["https://node-mailer-project-frontend.vercel.app"],
  methods:["POST","GET"],
  credentials: true,
}));
app.use(express.json());

console.log('Attempting to connect to MongoDB using URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));



app.use('', authRoutes);

const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
  res.send(`<h1>This Is HomePage</h1>`);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
