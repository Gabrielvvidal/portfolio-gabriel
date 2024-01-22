import { NavLink } from "react-router-dom";

import styles from "./responsiveMenu.module.css";

export default function ResponsiveMenu() {
  return (
    <div className={styles.linksMenor}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.linkPending
        }
      >
        01.Página Inicial
      </NavLink>

      <NavLink
        to="/projetos"
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.linkPending
        }
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
  );
}
