require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); 

const connectToMongoDB = require('./db/connectToMongoDB')
const settingRoute = require('./routes/settingRoute')

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', settingRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")));


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});