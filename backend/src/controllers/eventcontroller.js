// for the events (main controller in this prototype)

export async function getNextEvent(req, res) {
  try {
    const nextEvent = await Events.findOne(
      {
        where : {
          [Op.gte] : new Date(); 
        }
      }
    )

  }
}