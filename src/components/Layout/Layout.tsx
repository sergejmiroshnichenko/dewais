import styles from "./Layout.module.scss";
import { FC, ReactNode } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

interface Layout {
  children: ReactNode;
}

export const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
