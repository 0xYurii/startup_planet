import express, { json } from "express"
import { apiRoute } from "./routes/apiRoute.js"


const PROT=3000



const app=express()



/*
Challenge:
1. If a client uses an unknown route, serve this JSON 

{ message: "Endpoint not found. Please check the API documentation." }

Remember to server an error code!

Test:
 http://localhost:3000/wrong-api/useless/user
*/

app.use('/api',apiRoute)

app.use((req,res)=>{
    res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
    
    
})




app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})