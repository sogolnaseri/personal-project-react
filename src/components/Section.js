import React from "react";
import EventDetails from "./EventDetails";
import { filteredEvents } from "./helper";

export default ({ events, title, type }) => {
  const getEventList = () => {
    if (type === "fork") {
      return filteredEvents(events, type).map(
        ({ repo, payload: { forkee } }, i) => (
          //getEventDetails(forkee.full_name, `Forked From : ${repo.name}`)
          <EventDetails
            eventName={forkee.full_name}
            eventdetails={`Forked From : ${repo.name}`}
          />
        )
      );
    } else if (type === "pull") {
      return filteredEvents(events, type).map(
        ({ payload: { pull_request } }, i) => (
          //getEventDetails(pull_request.title, `Status: ${pull_request.state}`)
          <EventDetails
            eventName={pull_request.title}
            eventdetails={`Status: ${pull_request.state}`}
            eventUrl={pull_request.html_url}
          />
        )
      );
    }
  };
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "left", marginLeft: "14%" }}>{title}</h2>
      <ul>{getEventList()}</ul>
    </React.Fragment>
  );
};
