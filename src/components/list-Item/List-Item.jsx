import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const ListItem = ({ image, cssItem, cssLink, name, path, handleClick }) => (
  <li style={cssItem} title={name} onClick={handleClick}>
    {/* {image && <img src={require(image)} alt="img" width="24" height="24" />} */}
    {/* {image && <img src="../../assets/images/icons/navbar/body.svg" alt="img" width="24" height="24" />} */}
    <NavLink style={cssLink} to={`/${path.toLowerCase()}`} activeClassName="active">
      {name}
    </NavLink>
  </li>
);

export default withRouter(ListItem);
