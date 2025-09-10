import express from "express"
import { apiRoute } from "./routes/apiRoute.js"


const PROT=3000

/*
Challenge:
1. Refactor the code to use express.Router()

*/


const app=express()



app.use('/api',apiRoute)




app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})