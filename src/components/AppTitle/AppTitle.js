import React from "react";
export const AppTitle = props => (
  <>
    <h1 className="title-container__title">{props.title}</h1>
    <h3 className="title-container__subtitle">{props.subtitle}</h3>
  </>
);
