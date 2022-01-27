const http= require("http")//import http
const url=require("url")//import url
const app = http.createServer((req,res)=>{// initialize app
   
    const querydata= url.parse(req.url,true)//parse url using url function
    console.log(querydata)
    if(querydata.pathname==="/products")res.write("<h1>product page</h1>")//.pathname contains the url
    else if(querydata.pathname==="/catalog")res.write("<h1>catalog page</h1>")
    
    res.end()//end

})//listen on this port

const app2=http.createServer((req,res)=>{

    const querydata=url.parse(req.url,true)
    //querydata.query has key value pair where key is search query eg localhost:8000/catalog?app=redmi then .query haskey  as app and value as redmi
    if(querydata.pathname==="/products"){
        if(querydata.query.app="redmi" && querydata.query.price==="200")res.write("<h1>product redmi</h1>")

    }
    else if(querydata.pathname==="/catalog"){
        if(querydata.query.app="redmi" && querydata.query.price==="200")res.write("<h1>catalog redmi</h1>")

    }
    res.end()//end
}).listen(3000)
