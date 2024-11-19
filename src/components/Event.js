import { useState } from "react";



const Event = ({event}) => {

  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      className="event">
            <h2>{event.summary}</h2>
            <p>{event.created}</p>
            <p>{event.start?.dateTime}</p>
            <p>{event.end?.dateTime}</p>
            <p>{event.location}</p>
            <button className="detail-btn" onClick={()=>setShowDetails(!showDetails)}>
                { showDetails ? "Hide details" : "Show details"}
            </button>
            {
                showDetails ?  <p role="description" className="details">{event.description}</p> : <></>
            }
    </li>
  );
}

export default Event;
