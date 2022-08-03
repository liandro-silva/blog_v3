// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../@core/shared/lib/generate-feed";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const posts = getAllPosts([
      "title",
      "date",
      "coverImage",
      "excerpt",
      "link",
    ]);
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: "algo de errado", error });
  }
}
