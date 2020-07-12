import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { CSSTransition } from "react-transition-group";
import history from "./../history";

function Header(props) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src={require("../assets/logo3.png")}
        className="Logo"
        alt="logo"
        onClick={() => history.push("/Env")}
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="#" name="Env">
            Environment
          </a>
          <a href="#" name="Supplier">
            Supplier
          </a>
          <a href="#" name="Prod">
            Products
          </a>
          <a href="#" name="Po">
            Purchase Order
          </a>
          <a href="#" name="ASN">
            ASN
          </a>
          <button>Logout</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Gear">
        ⚙️
      </button>
    </header>
  );
}

export default Header;
