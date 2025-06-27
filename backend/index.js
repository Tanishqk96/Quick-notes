const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const app = express();
const connectDB = require('../backend/config/db');
const authroutes = require('./routes/AuthRoutes');
const NotesRoutes = require('./routes/NotesRoutes')
app.use(cors());
app.use(express.json());
env.config();
connectDB();
app.use('/api',authroutes);
app.use('/api',NotesRoutes);
app.use('/about',(req,res)=>{
    console.log("hello!");
    res.send("About route");    
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});