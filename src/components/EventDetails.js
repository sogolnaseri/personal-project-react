import React from "react";
/**
 * this function returns the data for each border
 *
 */
export default ({ eventName, eventdetails, eventUrl }) => {
  return (
    <ol
      style={{
        textAlign: "left",
        border: "1px solid black",
        marginLeft: "10%",
        borderRadius: "6px",
        marginBottom: "10px",
        width: "70%"
      }}
      key={eventName}
    >
      <p>
        <b>
          <a
            style={{ display: "table-cell", textDecoration: "none" }}
            href={eventUrl ? eventUrl : `https://github.com/${eventName}`}
            target="_blank"
          >
            {eventName}
          </a>
        </b>
      </p>
      <p>{eventdetails}</p>
    </ol>
  );
};
