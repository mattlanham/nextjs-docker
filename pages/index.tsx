import Head from "next/head";
import styles from "../styles/Home.module.css";
import type { ReactElement } from 'react';

const Home = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test App - Next.js on Docker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        This is a test app for Next.js on Docker
      </main>

      
    </div>
  );
};

export default Home; 