import { startups } from "../data/data.js"

export const getDataByPathParams = (req,res)=>{
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
        



        
        
    
}