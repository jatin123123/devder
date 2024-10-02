const mongoose=require("mongoose")

const connectDB=async()=>{
try {
    await mongoose.connect("mongodb+srv://jatinjangid947:KWhi9qrI6GmPDqWv@cluster0.us8c0kb.mongodb.net/devtinder");
    console.log("DB connect successfully")
} catch (error) {
    console.error("Error in Db",error)
}    

}

module.exports=connectDB