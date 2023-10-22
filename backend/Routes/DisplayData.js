const express = require('express')
const router = express.Router()

/*router.post('/foodData',async(req,res)=>{
    try {
        //console.log(global.food_items,global.foodCategory)
        res.send(global.food_items,global.foodCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
})*/
router.post('/foodData', async (req, res) => {
    try {
        const response = {
            foodItems: global.food_items,
            foodCategories: global.foodCategory
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;