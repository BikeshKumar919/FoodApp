const express = require('express')
const app = express()
const port = 5000

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Rquested-With,Content-Type,Accept"
  );
  next();
})


//const mongoose = require('./data'); // Import the Mongoose connection

// ... (Your server setup code)

// Example route to retrieve all documents from the "food_items" collection
const mongoose = require('./data'); // Import the Mongoose connection from data.js

// Define a schema
/*const foodItemSchema2 = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String
});

// Create a model for the 'food_items' collection
const FoodItem = mongoose.model('food_items', foodItemSchema2);

// ... (Define your routes and server setup)

// Example route to retrieve and print data
/*app.get('/getFoodItems', async (req, res) => {
  try {
    // Retrieve data from the 'food_items' collection
    const data = await FoodItem.find({}).exec();

    // Send the data as a JSON response
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});*/
/*app.post('/', async (req, res) => {
  try {
    const data = await FoodItem.find({}).exec();
    global.food_items=data;
    //console.log('Retrieved data: ghgh', data); // Add this line for debugging
    console.log(global.food_items)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

*/
// Define a route to retrieve and print dat

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json()) //app.use is a middleware
app.use("/api",require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));