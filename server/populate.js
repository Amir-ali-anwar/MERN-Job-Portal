import {readFile} from 'fs/promises'
import  dotenv from 'dotenv'
dotenv.config()
import ConnectDB from './db/connect'
import Job from './model/Job'

const start= async()=>{
    try {
        await ConnectDB(process.env.MONGO_URL);
        await Job.deleteMany()
    } catch (error) {
        
    }
}