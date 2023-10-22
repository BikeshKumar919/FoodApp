const mongoose = require('mongoose');
const url="mongodb+srv://bikesh:root@cluster0.eve5qul.mongodb.net/khana?retryWrites=true&w=majority&appName=AtlasApp"
const mongoDb=async()=>{
    await mongoose.connect(url)
    
}
mongoose.connection.on('connected', async() => {
    await console.log('connected');
    /*const fetched_data=await mongoose.connection.db.collection("food_items");
    await fetched_data.find({}).toArray((err,data)=>{
        if(err)
            console.log(err)
        else
            console.log(data)
    })*/
    console.log(mongoose.connection.readyState); //logs 1
  });

module.exports=mongoDb