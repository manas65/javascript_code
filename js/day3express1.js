
///////basic express

// const express=require("express")
// const app=express()
// app.get("/home",(req,res)=>{
//     res.send({prname:"xyz",prprice:123})
// }).listen(3000,()=>{console.log("req")})


const express=require("express")
const app=express()
// const bodyparser=require("body-parser")
// app.use(bodyparser.json)
app.get("/home",(req,res)=>{
    res.send({prname:"xyz",prprice:123})
})
app.get("/home/:prname/:prprice",(req,res)=>{//params
    res.send({prname:req.params.prname,prprice:req.params.prprice})
    
})
app.post("/home/:prname/:prprice",(req,res)=>{//params
    console.log(req.body)
    res.send("sucess")
    
})



app.listen(3000,()=>{console.log("req")})