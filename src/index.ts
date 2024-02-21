import express, {Express, Request, Response} from 'express'
// const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT


app.get('/', (req:Request, res: Response) => {
  console.log(req.headers)
  res.send('hahahah')
})

app.listen(port, () => {
  console.log('halooooo', port)
}) 