import React, { useContext } from "react";
import Context from "../../context/context";
import Menu from "../../components/menu/Menu";
import subMenu from "../../db/subMenu.json";

const MindPage = () => {
  const { menuTitle } = useContext(Context);

  return <Menu list={subMenu[menuTitle.toLowerCase()]} title={menuTitle} />;
};

export default MindPage;
