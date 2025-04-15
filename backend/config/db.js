const mongoose=require("mongoose")

const connectDB=()=>mongoose.connect("mongodb://127.0.0.1:27017/CampAid")
.then(()=>{
    console.log("DB connected");
    
})
.catch(err=>console.log(err)
)

module.exports=connectDB