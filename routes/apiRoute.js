import express from 'express'
import { getAllData } from "../controllers/getAllData.js"
import { getDataByPathParams } from "../controllers/getDataByPathParams.js"



export const apiRoute=express.Router()


apiRoute.get('/',getAllData)


apiRoute.get("/:field/:term",getDataByPathParams)