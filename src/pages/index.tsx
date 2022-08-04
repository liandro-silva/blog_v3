import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { GetAllPostsModel } from "../@core/domain/models/get-all-posts.model";
import { makeGetAllPosts } from "../@core/main/factories/usecases/remote-get-all-posts.factory";
import DefaultLayout from "../layouts/default";

export default function Home() {
  useEffect(() => {
    (async () => {
      const service = makeGetAllPosts();
      const posts = await service.findAll();
      console.log(posts);
    })();
  }, []);
  return (
    <div>
      <Head>
        <title>Liandro Silva | Blog</title>
        <meta
          name="description"
          content="Conteúdos sobre Front-end, Back-end e Mobile"
        />
      </Head>
      <DefaultLayout>
        <main>
          <h1 data-testid="heading">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </DefaultLayout>
    </div>
  );
}
