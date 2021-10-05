const mongoose =require("mongoose");




mongoose.connect(process.env.MONGO_URI,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
    
    )

    var dbconnect = mongoose.connection

    dbconnect.on('error', ()=>{

        console.log('Db connection failed')
    })

    dbconnect.on('connected',()=>{

        console.log("Db connected");
    })

    module.exports=mongoose