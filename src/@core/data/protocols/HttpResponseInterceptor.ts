import { HttpResponse } from "./HttpResponse";
import { HttpStatus } from "./HttpStatus";

export class HttpResponseInterceptor {
  public validate(httpResponse: HttpResponse) {
    switch (httpResponse.statusCode) {
      case HttpStatus.OK:
        return httpResponse.body;
      case HttpStatus.NOT_MODIFIED:
        return httpResponse.body;
      default:
        throw new Error("Opps! Algo deu errado, tente novamente.");
    }
  }
}
