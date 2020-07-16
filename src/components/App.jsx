import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./loader/Loader";
import Title from "./title/Title";
import Nav from "./navbar/Navbar";
import Context from "../context/context";
import navbar from "../db/navbar.json";
import css from './App.module.css'

const PrivyPage = lazy(() =>
  import("../pages/homePage/HomePage" /* webpackChunkName: "home" */)
);

const MindPage = lazy(() =>
  import("../pages/mindPage/MindPage" /* webpackChunkName: "mind" */)
);

const BodyPage = lazy(() =>
  import("../pages/bodyPage/BodyPage" /* webpackChunkName: "mind" */)
);

const BreathPage = lazy(() =>
  import("../pages/breathPage/BreathPage" /* webpackChunkName: "mind" */)
);

const MorePage = lazy(() =>
  import("../pages/morePage/MorePage" /* webpackChunkName: "mind" */)
);

const CategoryPage = lazy(() =>
  import("../pages/categoryPage/CategoryPage" /* webpackChunkName: "mind" */)
);

/**
 * component
 */
function App() {
  /**
   * state
   */
  const [menuTitle, setMenuTitle] = useState("Privy");
  const [menuDiscription, setMenuDiscription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );

  /**
   * componentDidMount analog
   */
  useEffect(() => {
    async function fetchData() {
      const title = navbar[0].title;
      const description = navbar[0].description;

      dataRecorder({ title, description});
    }
    
    const data = JSON.parse(localStorage.getItem("mainMenu"));

    if (data) {
      dataRecorder(data);
    }

    if (!data) {
      fetchData();
    }
  }, []);

  /**
   * recorder 
   */
  function dataRecorder(data) {
    const { title, description} = data;
    setMenuTitle(title);
    setMenuDiscription(description);
    localStorage.setItem("mainMenu", JSON.stringify(data));
  }

  /**
   * handlers
   */
  function handleClick(e) {
    const title = e.currentTarget.title;
    const description = navbar.find((el) => el.title === e.currentTarget.title).description;

    dataRecorder({ title, description });
  }

  /**
   * render
   */
  return (
    <Context.Provider value={{menuTitle}}>

      <div>

        <button className={css.button}></button>

        <Title title={menuTitle} description={menuDiscription}/>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={PrivyPage} />
            <Route exact path="/mind/:category" component={CategoryPage} />
            <Route exact path="/mind" component={MindPage} />
            <Route exact path="/body" component={BodyPage} />
            <Route exact path="/breath" component={BreathPage} />
            <Route exact path="/more" component={MorePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>

        <Nav title={menuTitle} onClick={handleClick} />

      </div>

    </Context.Provider>
  );
}

export default App;
