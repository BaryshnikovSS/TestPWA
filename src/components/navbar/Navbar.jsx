import React from "react";
import List from "../list-Item/List-Item";
import navbar from "../../db/navbar.json";
import css from "./Navbar.module.css";

const stls = {
  active: {
    backgroundColor: "#000",
  },
};

const Navbar = ({ title, onClick }) => (
  <nav className={css.navigation}>
    <ul>
      {navbar.map((el, idx) => (
        <List
          key={idx + el.title}
          image={el.image}
          name={el.title}
          path={el.title.toLowerCase()}
          cssItem={title === el.title ? stls.active : {}}
          handleClick={onClick}
        />
      ))}
    </ul>
  </nav>
);

export default Navbar;
