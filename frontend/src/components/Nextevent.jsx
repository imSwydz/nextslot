import { useState, useEffect } from "react";

function NextEvent() {
  const [event, setEvent] = useState(null);


  useEffect(() => {
    async function handleEvent() {
    const response = await fetch("http://localhost:5000/events");
    const events = await response.json();


        // finds any upcoming event
    const upcomingEvents = events.filter((event) => {
      return new Date(event.date) > new Date();
    });
    // sorts the events in ascending order
    upcomingEvents.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

    setEvent(upcomingEvents[0] || null);
  }

    handleEvent();
  }, []);

  return (
    <div>
      {event ? (
        <>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </>
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
}

export default NextEvent;