const express = require('express');
const mongoose =require('mongoose');
const { FoodModel } = require('./models/Food');
const cors = require('cors');


const app = express();
const PORT=3001;
app.use(cors());

// ..................new entry in data...............................

app.get('/Write-db', async (req,res)=>{
    const newEntry = new FoodModel({
        name:'Tikki',
        cuisine:'American'
    });

    const result = await newEntry.save()
   res.send(result);
})

// .................Return for whole data..............................

app.get('/Write-db', async (req,res)=>{

    const result = await FoodModel.find()
   res.send(result);
})

app.get('/Write-db', async (req,res)=>{

    const result = await FoodModel.findById("62c7bf17b960c9c5bc354033")
   res.send(result);
})

// ..................Connect to MongoDB...........................


const dbURL ="mongodb+srv://dash:12345@dk.tgk6v.mongodb.net/?retryWrites=true&w=majority"

const connectToMongoDB = async ()=>{
    try{
        mongoose.connect(dbURL);
        console.log("Connected to Database")
    }
    catch(err){
        console.log("Found error not connected")
    }

}

// ....................Listen to Port................................

app.listen(PORT,()=>{
    console.log("server started");
    connectToMongoDB();
})