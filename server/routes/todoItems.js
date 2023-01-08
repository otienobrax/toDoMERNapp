const router = require('express').Router();
//import todo model
const todoItemsModel = require('../models/todoItems');


//Lets create our first route -- we will add Todo Item to our database
router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        res.status(200).json('Item added Successfully.');
    }catch(err){
        res.json(err);
    }
})

//lets create second route .. get data from database
router.get('/api/items', async(req, res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

//export router
module.exports = router;