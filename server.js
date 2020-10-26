///---------------- imports 
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs');
const port = process.env.PORT || 8000

//---------------middleware
app.use(express.static (path.resolve('./public')))

app.get('/api', (request, res) => {
    res.sendFile(path.resolve('./API/restaurant-directory.json'))
  });

app.get('/api/:restaurant', (request, response) => {
    response.sendFile(path.resolve(`./API/${params.path.restaurant}`)) // 
    // LOOK UP HOW TO ACCESS PARAMS
    //You need to change your variable on line 15 to access the params.restauramnt
//But there's a syntaxes to it that im not familiar with off the top of my head so you'll have to look it up
 
});

app.listen(port,()=> console.log (`listening on port: ${port}`) )

// global variables





// json files will be linked here, but not imported, instead use route to find the API folder.
///app.get (read) and app.post (write), depends on syntax


