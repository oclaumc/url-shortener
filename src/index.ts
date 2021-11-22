import { MongoConnection } from './database/MongoConnection'
import express from 'express';
import { URLcontroller } from './controller/URLcontroller'

const api = express()
api.use(express.json())
api.use(express.urlencoded({ extended: true }))



const database = new MongoConnection()
database.connect()


const urlController = new URLcontroller()
api.post("/shorten", urlController.shorten)
api.get("/:hash", urlController.redirect)

api.listen(process.env.PORT, () => console.log('express listening'))
