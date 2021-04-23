const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.find({})
        res.json(workoutData)
    } catch (error) {
        res.status(500).json(error);
    }

});

router.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});
router.get("/api/workouts/range",function(req,res){  
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});

router.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

router.put("/api/workouts/:id",({body,params},res)=>{   
    Workout.findByIdAndUpdate(  
     params.id,
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});






module.exports = router;