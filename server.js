import express from "express"
import { startups } from "./data/data.js"

const PROT=3000




const app=express()

app.get('/api',(req,res)=>{
    let filteredStartups=startups
        const { industry, country, continent, is_seeking_funding, has_mvp } = req.query
        console.log(req.query)

        if(industry){
            filteredStartups=filteredStartups.filter(startup=>
                startup.industry.toLowerCase()===industry.toLowerCase()
            )
        }
        if(country){
            filteredStartups=filteredStartups.filter(startup=>
                startup.country.toLowerCase()===country.toLowerCase()
            )
        }
        if(continent){
            filteredStartups=filteredStartups.filter(startup=>
                startup.continent.toLowerCase()===continent.toLowerCase()
            )
        }
        if(is_seeking_funding){
            filteredStartups=filteredStartups.filter(startup=>
                startup.is_seeking_funding===JSON.parse (is_seeking_funding.toLowerCase())
            )
        }
        if(has_mvp){
            filteredStartups=filteredStartups.filter(startup=>
                startup.has_mvp===JSON.parse (has_mvp.toLowerCase())
            )
        }


        res.json(filteredStartups)
    
    
})


app.get("/api/:field/:term",(req,res)=>{
    let filteredStartups=startups

    const allowedFields = ['country', 'continent', 'industry']


        //devide the rea.params
        const {field,term}=req.params
        console.log(field)
        console.log(term)

        // check if the feild is allowed
        if(allowedFields.includes(field)){
            // server data based on reqested link
            filteredStartups=filteredStartups.filter(startups=>
                startups[field].toLowerCase()===term.toLowerCase()
            ) 
            res.json(filteredStartups)
        }else{
            
            return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
            
        }
        



        
        
    
})




app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})