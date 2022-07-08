const mongoose =require('mongoose');

const Schema = mongoose.Schema;
const foodSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    cuisine:{
        type:String,
        required:true
    }
},{timestamps:true})

const FoodModel =mongoose.model("Food", foodSchema);
exports.FoodModel = FoodModel;