const mongoose = require("mongoose");
const debug=require("debug")("development:mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(()=>{
    debug("connected");
    
})
.catch((err)=>{
    debug(err);

    
    

})

module.exports=mongoose.connection