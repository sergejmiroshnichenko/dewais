import styles from "./Header.module.scss";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav className={styles.header_nav}>
        <ul>
          <li>Github Search</li>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
