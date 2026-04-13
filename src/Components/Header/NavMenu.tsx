import { useState } from "react";
import styles from "./Header.module.css";

interface NavMenuProps {
  logo: string;
  NavElemnets: string[];
}

const NavMenu = ({ logo, NavElemnets }: NavMenuProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.NavMenuContainer}>
      <div className={styles.NavMenuContent}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        <div className={`${styles.NavElemnts} ${show ? styles.Show : ""}`}>
          <ul>
            {NavElemnets.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>

        <div className={styles.BarsIcon} onClick={() => setShow(!show)}>
          <img src="/menu.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;