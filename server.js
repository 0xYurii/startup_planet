import express, { json } from "express"
import { apiRoute } from "./routes/apiRoute.js"
import cors from "cors"

const PROT=3000



const app=express()

app.use(cors())


app.use('/api',apiRoute)

app.use((req,res)=>{
    res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
    
    
})




app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})