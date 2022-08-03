import { GetAllPostsModel } from "../models/get-all-posts.model";

export interface GetAllPosts {
  findAll: () => Promise<GetAllPostsModel>;
}
