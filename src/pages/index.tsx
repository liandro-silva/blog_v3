import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Liandro Silva | Blog</title>
        <meta
          name="description"
          content="Conteúdos sobre Front-end, Back-end e Mobile"
        />
      </Head>
      <main>
        <h1 data-testid="heading">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
