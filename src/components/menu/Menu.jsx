import React from "react";
import List from "../list-Item/List-Item";
import css from "./Menu.module.css";

const Menu = ({ list, title, onClick }) => {
  return (
    <ul className={css.container}>
      {list &&
        list.length >= 0 &&
        list.map((el, idx) => (
          <List
            key={idx + el.title}
            image={el.image}
            name={el.title}
            path={`${title}/${el.title}`}
            handleClick={onClick}
          />
        ))}
    </ul>
  );
};

export default Menu;
