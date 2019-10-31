import React from "react";
import EventDetails from "./EventDetails";

export default ({ events, title, type }) => {
  const filteredEvents = () => {
    if (type === "fork") {
      return events.filter(event => event.type === "ForkEvent");
    } else if (type === "pull") {
      return events.filter(event => event.type === "PullRequestEvent");
    }
  };

  //   const getEventDetails = (eventName, eventdetails) => (
  //     <ol
  //       style={{
  //         textAlign: "left",
  //         border: "1px solid black",
  //         marginLeft: "10%"
  //       }}
  //       key={eventName}
  //     >
  //       <p>
  //         <b>
  //           <a
  //             style={{ display: "table-cell", textDecoration: "none" }}
  //             href={`https://github.com/${eventName}`}
  //             target="_blank"
  //           >
  //             {eventName}
  //           </a>
  //         </b>
  //       </p>
  //       <p>{eventdetails}</p>
  //     </ol>
  //   );

  const getEventList = () => {
    if (type === "fork") {
      return filteredEvents().map(({ repo, payload: { forkee } }, i) => (
        //getEventDetails(forkee.full_name, `Forked From : ${repo.name}`)
        <EventDetails
          eventName={forkee.full_name}
          eventdetails={`Forked From : ${repo.name}`}
        />
      ));
    } else if (type === "pull") {
      return filteredEvents().map(({ payload: { pull_request } }, i) => (
        //getEventDetails(pull_request.title, `Status: ${pull_request.state}`)
        <EventDetails
          eventName={pull_request.title}
          eventdetails={`Status: ${pull_request.state}`}
          eventUrl={pull_request.html_url}
        />
      ));
    }
  };
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "left", marginLeft: "14%" }}>{title}</h2>
      <ul>{getEventList()}</ul>
    </React.Fragment>
  );
};
