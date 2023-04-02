import React from "react";
import { NavigationDots, SocialMediaIcon } from "../components";
const AppWrap = (Component, idName, className) =>
  function HOC() {
    const _date = new Date();
    const _getFullYear = _date.getFullYear();
    return (
      <div id={idName} className={`app__container`}>
        <SocialMediaIcon />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">&copy; {_getFullYear} Abdulzobur</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
