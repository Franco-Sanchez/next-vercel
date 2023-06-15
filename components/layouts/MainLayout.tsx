import Head from "next/head";
import styles from "./styles/MainLayout.module.css";
import { NavBar } from "../NavBar";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Franco</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
