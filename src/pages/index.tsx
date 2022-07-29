import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Liandro Silva | Blog</title>
        <meta
          name="description"
          content="Conteúdos sobre Front-end, Back-end e Mobile"
        />
      </Head>
    </div>
  );
};

export default Home;
