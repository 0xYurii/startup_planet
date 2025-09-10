import { startups } from "../data/data.js"


export const getAllData=(req,res)=>{
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
    
    
}