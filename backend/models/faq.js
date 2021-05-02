const mongoose=require("mongoose")

const {Schema}=mongoose

const faqSchema=new Schema({
    user:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})


const FAQ=mongoose.model("FAQ",faqSchema)

module.exports =FAQ;