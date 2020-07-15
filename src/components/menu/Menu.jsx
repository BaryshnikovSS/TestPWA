import React from "react";
import List from "../list-Item/List-Item";

const Menu = ({ list, title, onClick }) => {
  return (
    <>
      <ul>
        {list && list.length >= 0 &&
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
    </>
  );
};

export default Menu;
