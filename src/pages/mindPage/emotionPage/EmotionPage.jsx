import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../../context/context";
import Menu from "../../../components/menu/Menu";
import List from "../../../components/list-Item/List-Item";
import css from "./EmotionPage.module.css";
import subMenu from "../../../db/subMenu.json";

const EmotionPage = ({ location: { state } }) => {
  const { category } = state;

  const { menuTitle } = useContext(Context);

  const [list, setList] = useState(null);

  let history = useHistory();

  useEffect(() => {
    async function fetchData(menuTitle, category) {
      const currentList = await subMenu[menuTitle.toLowerCase()].find(
        (el) => el.title === category
      ).menu;

      dataRecorder(currentList);
    }

    // function getStateIdValidation(state) {
    //   console.log('state', state)
    //   if (state === undefined || null) return false;
    //   if (!('category' in state)) return false;
    //   return true;
    // }

    const data = JSON.parse(localStorage.getItem("session"));

    if (data) {
      dataRecorder(data);
    }

    if (!data) {
      // if (getStateIdValidation(data)) return history.push('/');
      fetchData(menuTitle, category);
    }
  }, [category, menuTitle, history]);

  function dataRecorder(data) {
    setList(data);
    localStorage.setItem("session", JSON.stringify(data));
  }

  function handleClick() {}

  return (
    <div className={css.container}>
      <div className={css.buttons}>
        <ul>
          {subMenu[menuTitle.toLowerCase()].map((el, idx) => (
            <List
              key={idx + el.title}
              name={el.title}
              path={el.title}
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

export default EmotionPage;
