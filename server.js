import express from "express"


const PROT=3000

const celebrity = {
  type: "action hero",
  name: "JSON Statham"
}

const app=express()

app.get('/api',(req,res)=>{
    if(req.method==="GET"){
        res.json(celebrity)
    }else{}
    
})




app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})