import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ image, name, path, handleClick }) => (
  <li title={name} onClick={handleClick}>
    {/* {image && <img src={"require(image)"} alt="img" width="24" height="24" />} */}
    <NavLink style={{color: "fff"}} to={`/${path.toLowerCase()}`}>{name}</NavLink>
  </li>
);

export default ListItem;
