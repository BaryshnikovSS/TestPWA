import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/context";
import css from './MindPage.module.css'
import Menu from "../../components/menu/Menu";
import subMenu from "../../db/subMenu.json";

const MindPage = () => {

  const { menuTitle } = useContext(Context);

  let history = useHistory();

  function handleClick(e) {
    history.push({
      state: { category: e.currentTarget.title },
    });
  }

  return (
    <div className={css.container}>
      <Menu
        list={subMenu[menuTitle.toLowerCase()]}
        title={menuTitle}
        onClick={handleClick}
      />
    </div>
  );
};

export default MindPage;
