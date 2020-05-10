const express = require('express');
const activitiesController = require('../../../controllers/team/week01/activities');
const stretchController = require('../../../controllers/team/week01/stretch');
const fs = require('fs'); // File system for TA01
const router = express.Router();
// Remember Team Activity 01? 
// This is the same solution, but implemented in our app using 
// proper routing for the view engine


router.get('/', activitiesController.getActivitiesHome);

// CORE CHALLENGE 2 -
router.get('/activities', activitiesController.getActivities);

// CORE CHALLENGE 3 -
router.post('/add-activity', activitiesController.postAddActivity);

/***************************************************************************
* STRETCH CHALLENGE SOLUTIONS
* These are the solutions for the stretch challenges.
***************************************************************************/
// STRETCH CHALLENGE 1 - Add CSS.
router.get("/stretch-1", stretchController.getStretchOne);

// STRETCH CHALLENGE 2 - Write to file.
router.get("/stretch-2", stretchController.getStretchTwo);
// The url can be identical.
router.post("/stretch-2", stretchController.postStretchTwo);

// STRETCH CHALLENGE 3 - Add two numbers...
router.get("/stretch-3", stretchController.getStretchThree);
router.post("/stretch-3", stretchController.postStretchThree);

module.exports = router;