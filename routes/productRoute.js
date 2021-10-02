const express=require('express');

const router =express.Router();

const Product= require('../models/ProductModel');


router.get('/getallproducts',(req,res)=>{

Product.find({},(err,docs)=>{

if(!err){

    return res.send(docs);

}else{
    return res.status(400).json({message:"Failed"});
}

})

});

router.post('/getproductbyid',(req,res)=>{

    Product.find({_id : req.body.productid},(err,docs)=>{
    
    if(!err){
    
        res.send(docs[0]);
    
    }else{
        return res.status(400).json({message:"Failed"});
    }
    
    })
    
    });

    router.get('/test',(req,res)=>{

       res.send("yoooooo")
        
        });

module.exports=router