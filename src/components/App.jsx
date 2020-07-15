import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./loader/Loader";
import Title from "./title/Title";
import Nav from "./navbar/Navbar";
import Context from "../context/context";
import navbar from "../db/navbar.json";

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

const EmotionPage = lazy(() =>
  import("../pages/mindPage/emotionPage/EmotionPage" /* webpackChunkName: "mind" */)
);

const BrainPage = lazy(() =>
  import("../pages/mindPage/brainPage/BrainPage" /* webpackChunkName: "mind" */)
);

/**
 * component
 */
function App() {
  /**
   * state
   */
  const [menuTitle, setMenuTitle] = useState("Privy");
  const [hdrDiscription, setHdrDiscription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );

  /**
   * handlers
   */
  function handleClick(e) {
    setMenuTitle(e.currentTarget.title);
    setHdrDiscription(
      navbar.find((el) => el.title === e.currentTarget.title).description
    );
  }

  /**
   * render
   */
  return (
    <Context.Provider value={{menuTitle}}>

      <div>

        <button></button>

        <Title title={menuTitle} description={hdrDiscription}/>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={PrivyPage} />
            <Route exact path="/mind" component={MindPage} />
            <Route exact path="/mind/emotion" component={EmotionPage} />
            <Route exact path="/mind/brain" component={BrainPage} />
            <Route exact path="/body" component={BodyPage} />
            <Route exact path="/breath" component={BreathPage} />
            <Route exact path="/more" component={MorePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>

        <Nav onClick={handleClick} />

      </div>

    </Context.Provider>
  );
}

export default App;
