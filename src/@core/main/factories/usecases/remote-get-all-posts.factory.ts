import { RemoteGetAllPosts } from "../../../data/usecases/remote-get-all-posts.data";
import { makeApiUrl } from "../http/api-url.factory";
import { makeHttpClient } from "../http/http-client.factory";

export const makeGetAllPosts = () => {
  return new RemoteGetAllPosts(makeApiUrl("generate-feed"), makeHttpClient());
};
