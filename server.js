///---------------- imports---------------------//
// ---(these are also global variables, they are set as variables then used)
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs');
const port = process.env.PORT || 8000


//---------------middleware-------------------//
app.use(express.static (path.resolve('./public')))

app.get('/api', (request, res) => {
    res.sendFile(path.resolve('./API/restaurant-directory.json'))
  });

app.get('/api/:restaurant', (request, response) => {
    response.sendFile(path.resolve(`./API/${request.params.restaurant}.json`))
});

app.listen(port,()=> console.log (`listening on port: ${port}`) )




