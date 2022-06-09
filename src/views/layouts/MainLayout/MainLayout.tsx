import Footer from "@/mod/Footer";
import Header from "@/mod/Header";
import type { FC, ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface IMainLayout {
  children: ReactNode;
}

const Mainlayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.mainLayoutRoot}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Mainlayout;
