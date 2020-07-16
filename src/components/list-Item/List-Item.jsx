import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const ListItem = ({ image, cssItem, cssLink, name, path, handleClick }) => (
  <li style={cssItem} title={name} onClick={handleClick}>
    {/* {image && <img src={require(`${image}?original`)} alt="img"/>}  */}
    {/* {image && <img src={require("../../assets/images/icons/navbar/privy.svg")} alt="img"  />} */}
    <NavLink style={cssLink} to={`/${path.toLowerCase()}`} activeClassName="active">
      {name}
    </NavLink>
  </li>
);

export default withRouter(ListItem);
