const express = require('express');
const { json } = require('react-router-dom');
const router = express.Router()
const Order=require('../models/Orders')


router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date})

    let eid=await Order.findOne({'email':req.body.email})

    if(eid===null){
        try {
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error) {
            //res.send("Error Message",error.message)
            console.log("error")
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},
            {$push : {order_data:data}}).then(()=>{
                res.json({success:true})
            })
        }
        catch (error) {
            res.send("Error Message",error.message)
        }
    }
})

router.post('/myorderData',async(req,res)=>{
        try {
          let myData=await Order.findOne({'email':req.body.email})
            res.json({orderData:myData})
        } catch (error) {
            console.log("another error")

        }
})

module.exports = router;
