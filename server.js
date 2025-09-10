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
        //devide the rea.params
        const {field,term}=req.params
        console.log(field)
        console.log(term)

        // server data based on reqested link
        filteredStartups=filteredStartups.filter(startups=>
            startups[field].toLowerCase()===term.toLowerCase()
        )
        
        res.json(filteredStartups)
    
})


/*
Challenge:
1. Add a new route which accepts GET requests to /api/<field>/<term>.
2. Filter the data based on the path params.
3. Serve the filtered data.

For now, don’t worry that using some fields will trigger an error.

** The functionality **
Get all startups in a given country via api/country/<country name>
Get all startups in a given continent via api/continent/<continent name>
Get all startups in a given industry via api/industry/<industry name>

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This will throw an error - but that's fine!
	api/has_mvp/true

*/


app.listen(PROT,()=>{
    console.log(`The server is runnin on http://localhost:${PROT}`)
    console.log('Go check it out in your browser! 🌟');
})