import React from "react";
import { arrayExpression } from "@babel/types";
import Section from "./Section";

/**
 * This component is called for dispalying items in second page
 * We have a Section Component that depends of the type it displayes
 * the requiered information for each section
 */
export default ({ events, userName }) => (
  <React.Fragment>
    <h1 style={{ textAlign: "right", marginRight: "20%" }}>{userName}</h1>
    <Section type="fork" events={events} title="Recent Forks" />
    <Section type="pull" events={events} title="Recent Pull Requests" />
  </React.Fragment>
);
