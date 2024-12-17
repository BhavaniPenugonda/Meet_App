import { useState } from "react";
import { format } from "date-fns";



const Event = ({event}) => {

  const [showDetails, setShowDetails] = useState(false);
  console.log(event);
  const startDate= format(event.start?.dateTime,"dd-MM-yyyy")
  const endDate= format(event.end?.dateTime,"dd-MM-yyyy")
  const creationDate= format(event.created,"dd-MM-yyyy")
  return (
    <li
      className="event">
            <h2>{event.summary}</h2>
            <p>Date Created:{creationDate}</p>
            <p>Start Date : {startDate}</p>
            <p>End Date :{endDate}</p>
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
