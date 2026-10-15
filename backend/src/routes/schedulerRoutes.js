const express = require("express");
const router = express.Router(); 
import parseScheduleRequest from "./services/aiService.js"
import parse from "./controllers/aicontroller.js"

// 3 main events in our app, authentication (to connect to google calendar), schedules or the ai layer to process messy text, events (calendar entities)


router.get("/auth/google", (req,res) => 
    res.send("Google Login")
);
router.get("/auth/google/callback", (req,res) => {
    res.send("Token Authentication from Google")
}
);

router.post("/ai/parse", parse);


router.get("/events/ui", fetchEvent);



module.exports = router; 
 
