const { v4 : uuidv4}= require('uuid')
const express = require('express');
const router=express.Router();


const stripe=require('stripe')('sk_test_51JdaRPSEt6f96bO4V791Tf7agexWVf5iiixKl8DOhixNvBYhoqaSu8fDfbkJugGwKHQv0BOgCNa3rfs3wVGYkZfk00YznyhuVC')

const Order= require('../models/OrderModel') 
router.post('/placeorder',async(req,res)=>{


    const {token,cartItems,currentUser,subtotal} =req.body

    const customer=await stripe.customers.create({
        email:token.email,
        source:token.id
    })

    const payment=await stripe.charges.create({

        amount:subtotal*100,
        currency:"inr",
        customer:customer.id,
        receipt_email : token.email

    },{
        idempotencyKey:uuidv4()
    })

    if(payment){

        const order =new Order({
            
            userid: currentUser._id,
            name : currentUser.name,
            email:currentUser.email,
            orderItems:cartItems,
            shippingAddress:{
                address : token.card.address_line1,
                city:token.card.address_city,
                country :token.card.address_country,
                postalcode:token.card.address_zip
            },

            orderAmount : Number(subtotal),
            transactionId: payment.source.id,
            isDelivered :false
        })
        
       order.save(err=>{

        if(err){

            return res.status(400).json({message:'something went wrong'});

        }else{
            
            res.send('Order placed successfully')
        }
       })
    }else{

        return res.status(400).json({message:'Payment failed'});
    }
});


router.post('/getorderbyuserid',(req,res)=>{

    const userid=req.body.userid

    Order.find({userid:userid},(err,docs)=>{

        if(err){

            return res.status(400).json({message:"something wenr wrong"});
        }else{
            res.send(docs)
        }
    })
})


router.post('/getorderbyid',(req,res)=>{

    const orderid=req.body.orderid

    Order.find({_id:orderid},(err,docs)=>{

        if(err){

            return res.status(400).json({message:"something wenr wrong"});
        }else{
            res.send(docs[0])
        }
    })
})
module.exports=router