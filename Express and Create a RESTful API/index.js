const express = require('express');
const data = require('./data.js')
const server = express();

server.get('/', (req, res) => {
    res.send("Hello from Express");
});

server.get("/actors", (req, res) => {
    res.status(200).json(data);
});

let next_id = 4;
server.post("/actors",  (req, res) => {
    let new_actor = req.body;
    new_actor.id = next_id;
    next.id++;
    data.push(new_actor);
    res.status(201).json(new_actor);
});

server.delete("/actors/:id", (req, res) => {
    const removal_actor_id = req.params.id;
    const removedActor = data.find(actor => actor.id === Number(removal_actor_id));

    if (removedActor) {
        data = data.filter(actor => actor.id !== Number(removal_actor_id));
        res.status(204).end();
    } else {
        res.status(404).json({ errorMessage: "The actor you are trying to delete does not exist in the system." });
    }
});


server.get("/actors/:id" , (req,res) =>{
    console.log("rec.query", req.query);
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
