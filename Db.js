const mongoose =require("mongoose");

var mongoDbUrl="mongodb+srv://jaggu:jaggu123@cluster0.anils.mongodb.net/jshop"


mongoose.connect(mongoDbUrl,
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