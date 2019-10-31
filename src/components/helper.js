export const filteredEvents = (events, type) => {
  if (type === "fork") {
    return events.filter(event => event.type === "ForkEvent");
  } else if (type === "pull") {
    return events.filter(event => event.type === "PullRequestEvent");
  }
};
