import parseScheduleRequest from "../services/aiservice.js"
import {Events} from "../models/event.js"


export async function parse(req,res) {
  try {
  const {message} = req.body 
  const result = await parseScheduleRequest(message)
  const newEvent = await Events.create(
    {
      title: result.title, 
      date: result.date,
      startTime : result.startTime,
      startTime: result.startTime,
      endTime: result.endTime || null,
      duration: result.duration || null,
      status: "pending"
    }
   );
   res.status(201).json(newEvent);

  }
  catch (error) {
    res.stats(500).json({error :  "Failed to parse and save event!"});

  };
}

