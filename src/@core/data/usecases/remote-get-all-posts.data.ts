import { HttpResponseInterceptor } from "./../protocols/HttpResponseInterceptor";
import { GetAllPostsModel } from "../../domain/models/get-all-posts.model";
import { GetAllPosts } from "../../domain/usecases/get-all-posts.domain";
import { HttpClient } from "../protocols/HttpClient";

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
