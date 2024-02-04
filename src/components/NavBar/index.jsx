import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./navBar.module.css";
import ResponsiveMenu from "../ResponsiveMenu";

import logoOne from "../../assets/logo.svg";
import logoTwo from "../../assets/responsivo.svg";
import menu from "../../assets/menu.svg"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const pathSwap = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 870) {
        closeMenu();
      }

      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathSwap]);

  return (
    <>
      <div className={styles.navContainer}>
        <img src={windowSize <= 400 ? logoTwo : logoOne} alt="Logo" />

        <div className={styles.linksMaior}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkPending
            }
            style={{ paddingRight: "25px" }}
          >
            01.Página Inicial
          </NavLink>

          <NavLink
            to="/projetos"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkPending
            }
            style={{ paddingRight: "25px" }}
          >
            02.Projetos
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkPending
            }
          >
            03.Contato
          </NavLink>
        </div>

        <div className={styles.menuResponsivo} onClick={handleClick}>
          <img src={menu} alt="Menu" />
        </div>
      </div>

      {click ? <ResponsiveMenu /> : null}
    </>
  );
}
