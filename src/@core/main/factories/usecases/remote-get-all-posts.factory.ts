import { RemoteGetAllPosts } from "@core/data/usecases/remote-get-all-posts.data";

import { makeHttpClient } from "@core/main/factories/http/http-client.factory";
import { makeApiUrl } from "@core/main/factories/http/api-url.factory";

export const makeGetAllPosts = () => {
  return new RemoteGetAllPosts(makeApiUrl("generate-feed"), makeHttpClient());
};
