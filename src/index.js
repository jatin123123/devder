const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
app.use(express.json());

app.post("/signup",async(req,res)=>{
  try {
    const user=new User(req.body);
    await user.save()
    res.send("User Created Sucessfully");
  } catch (error) {
    console.log("error in user Creation",error)
  }
})

connectDB();
app.listen(3000, () => {
    console.log("App is running on localhost 3000");
});
