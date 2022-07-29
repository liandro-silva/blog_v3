import axios, { AxiosResponse } from "axios";
import { HttpClient } from "../../data/protocols/HttpClient";
import { HttpRequest } from "../../data/protocols/HttpRequest";
import { HttpResponse } from "../../data/protocols/HttpResponse";

export class HttpClientAdapter implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
