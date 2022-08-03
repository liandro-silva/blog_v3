import { HttpResponse } from "./HttpResponse";
import { HttpStatus } from "./HttpStatus";

export class HttpResponseInterceptor {
  public validate(httpResponse: HttpResponse) {
    switch (httpResponse.statusCode) {
      case HttpStatus.OK:
        return httpResponse.body;
      default:
        return httpResponse.body;
    }
  }
}
