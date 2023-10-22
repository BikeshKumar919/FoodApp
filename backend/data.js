// app.js
const mongoose = require('mongoose');

//const uri = "mongodb+srv://bikesh:root@cluster0.eve5qul.mongodb.net/khana?retryWrites=true&w=majority&appName=AtlasApp";
//const uri = "mongodb://bikesh:root@ac-orfen4n-shard-00-00.eve5qul.mongodb.net:27017,ac-orfen4n-shard-00-01.eve5qul.mongodb.net:27017,ac-orfen4n-shard-00-02.eve5qul.mongodb.net:27017/khana?ssl=true&replicaSet=atlas-4wwkvk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp";
const uri="mongodb+srv://bikesh:root@cluster0.eve5qul.mongodb.net/khana?retryWrites=true&w=majority&appName=AtlasApp"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  const foodItemSchema1 = new mongoose.Schema({
    CategoryName: String,
    name: String,
    img: String
  });

  


  const FoodItem = mongoose.model('food_items', foodItemSchema1);

  const print=async()=>{
    try {
      const data = await FoodItem.find({}).exec();
      //const FoodCategory = mongoose.model('foodCategory', foodCategorySchema1);
      //const catData = await FoodCategory.find({}).exec();
      global.food_items=data;
      //global.foodCategory=catData;
      //console.log('Retrieved data: ghgh', data); // Add this line for debugging
      console.log(global.food_items)
      //console.log(global.foodCategory)
    } catch (error) {
      console.error(error);
      //res.status(500).json({ error: 'An error occurred' });
    }
  }
  print()


  const foodCategorySchema1 = new mongoose.Schema({
    CategoryName: String
  });
  const FoodCategory = mongoose.model('foodCategory', foodCategorySchema1);
  const catprint=async()=>{
    try {
      const catData = await FoodCategory.find({}).exec();
      global.foodCategory=catData;
      //console.log()global.foodCategory
      if (catData.length === 0) {
        console.log("No documents found.");
      } else {
        console.log(catData);
      }
    } catch (error) {
      console.error(error);
      //res.status(500).json({ error: 'An error occurred' });
    }
  }
catprint()





module.exports = mongoose;