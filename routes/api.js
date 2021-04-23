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



module.exports = router;