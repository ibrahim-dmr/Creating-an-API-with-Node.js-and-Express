const express = require('express');
const data = require('./data.js')
const server = express();

server.get('/', (req, res) => {
    res.send("Hello from Express");
});

server.get("/actors", (req, res) => {
    res.status(200).json(data);
});

server.get("/actors/:id" , (req,res) =>{
    const {id} = req.params;
    const actor = data.find(actor => actor.id === parseInt(id))
    
    if(actor){
        res.status(200).json(actor);
    } 
    else{
        res.status(404).send("The actor you are looking for could not be found.")
    }
});

server.listen(5000, () => {
    console.log("http://localhost:5000 adresine yapılan istekler dinleniyor...");
});
