const express = require('express')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const cors = require('cors')
const dbConnect = require('./db/connection')
require('dotenv').config()
const app = express()
const port = process.env.PORT 

dbConnect() // Connect to the database

app.use(cors()) // Enable CORS for all routes
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use('/api/users',userRouter) // Use user router for all routes starting with '/user'
app.use('/api/tasks',taskRouter) // Use task router for all routes starting with '/task'


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})