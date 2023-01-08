import React, { Fragment, useState, useEffect } from "react";
import DescriptionWhitLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";
import { Link } from "react-router-dom";

const Planet = (props) => {

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }

  return (
    //<div onClick={() => props.clickOnPlanet(props.name)}>
    <div>
      <Link to={`/planet/${props.id}`}>{title}</Link>
      <DescriptionWhitLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
    </div>
  );
};

export default Planet;
