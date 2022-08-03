import { HttpResponseInterceptor, HttpClient } from "@core/data/protocols";

import { GetAllPostsModel } from "@core/domain/models/get-all-posts.model";
import { GetAllPosts } from "@core/domain/usecases/get-all-posts.domain";

export class RemoteGetAllPosts implements GetAllPosts {
  constructor(
    private readonly url: string,
    private httpClient: HttpClient<GetAllPostsModel>
  ) {}

  async findAll(): Promise<GetAllPostsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    return new HttpResponseInterceptor().validate(httpResponse);
  }
}
