import React from "react";
import EventDetails from "./EventDetails";
/**
 * this function calls the EventDeatils Component with fork or pull data
 */
export default ({ events, title, type }) => {
  //The below function filters the events ased on their type
  const getEventList = () => {
    const filteredEvents = () => {
      if (type === "fork") {
        return events.filter(event => event.type === "ForkEvent");
      } else if (type === "pull") {
        return events.filter(event => event.type === "PullRequestEvent");
      }
    };
    if (type === "fork") {
      return filteredEvents().map(({ repo, payload: { forkee } }) => (
        <EventDetails
          eventName={forkee.full_name}
          eventdetails={`Forked From : ${repo.name}`}
        />
      ));
    } else if (type === "pull") {
      return filteredEvents().map(({ payload: { pull_request } }) => (
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
