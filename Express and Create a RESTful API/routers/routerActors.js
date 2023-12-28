const router = require('express').Router();
let data = require('../data.js')

router.get("/", (req, res) => {
    res.status(200).json(data);
});

let next_id = 4;
router.post("/",  (req, res, next) => {
    let new_actor = req.body;
    if (!new_actor.name) {
        next({ statusCode: 400, errorMessage: "To add an actor, you must enter a name." });
    } else if (new_actor.isim && !new_actor.movies){
        next({
            statusCode:400,
            errorMessage: "You should enter movies to add an actor.",
        });
    }
    else {
        new_actor.id = next_id;
        next_id++;
        data.push(new_actor);
        res.status(201).json(new_actor);
    }
});

router.delete("/:id", (req, res) => {
    const removal_actor_id = req.params.id;
    const removedActor = data.find(actor => actor.id === Number(removal_actor_id));

    if (removedActor) {
        data = data.filter(actor => actor.id !== Number(removal_actor_id));
        res.status(204).end();
    } else {
        res.status(404).json({ errorMessage: "The actor you are trying to delete does not exist in the system." });
    }
});


router.get("/:id" , (req,res) =>{
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


module.exports = router;