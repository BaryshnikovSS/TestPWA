import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Context from "../../context/context";
import Menu from "../../components/menu/Menu";
import List from "../../components/list-Item/List-Item";
import css from "./SubMenu.module.css";
import subMenu from "../../db/subMenu.json";

/**
 * inline styles
 */
const stls = {
  activeItem: {
    background: "linear-gradient(94.94deg, #FC9D83 -0.59%, #FFCE00 107.84%)"
  },
  activeLink: {
    color: "#fff"
  }
};

/**
 * component
 */
const SubMenu = ({ match }) => {
  const category = match.params.category;

  const { menuTitle } = useContext(Context);

  const [list, setList] = useState(null);

  /**
   * componentDidMount analog
   */
  useEffect(() => {
    function fetchData(menuTitle, category) {
      const currentList = subMenu[menuTitle.toLowerCase()].find(
        (el) => el.title === ucFirst(category)
      ).menu;

      dataRecorder(currentList);
    }

    const data = JSON.parse(localStorage.getItem("session"));

    if (data) {
      dataRecorder(data);
    }

    if (!data) {
      fetchData(menuTitle, category);
    }
  }, [menuTitle, category]);

  /**
   * helpers
   */
  function dataRecorder(data) {
    setList(data);
    localStorage.setItem("session", JSON.stringify(data));
  }

  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  /**
   * handlers
   */
  function handleClick(e) {
    const category = e.currentTarget.title;
    const data = subMenu[menuTitle.toLowerCase()].find(
      (el) => el.title === ucFirst(category)
    ).menu;
    setList(data);
    localStorage.setItem("session", JSON.stringify(data));
  }

  /**
   * render
   */
  return (
    <div className={css.container}>
      <div className={css.buttons}>
        <ul>
          {subMenu[menuTitle.toLowerCase()].map((el, idx) => (
            <List
              key={idx + el.title}
              name={el.title}
              path={menuTitle + "/" + el.title}
              cssItem={ucFirst(category) === el.title ? stls.activeItem : {}}
              cssLink={ucFirst(category) === el.title ? stls.activeLink : {}}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </div>

      <div className={css.subMenu}>
        {list && <Menu list={list} title={menuTitle} />}
      </div>
    </div>
  );
};

export default withRouter(SubMenu);
