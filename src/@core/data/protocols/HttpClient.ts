import { HttpResponse } from "./HttpResponse";
import { HttpRequest } from "./HttpRequest";

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
