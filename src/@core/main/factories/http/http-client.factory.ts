import { HttpClientAdapter } from "../../../infra/http/http-client.infra";

export const makeHttpClient = (): HttpClientAdapter => {
  return new HttpClientAdapter();
};
