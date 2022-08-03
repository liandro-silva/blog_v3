import { HttpClientAdapter } from "@core/infra/http/http-client.infra";

export const makeHttpClient = (): HttpClientAdapter => {
  return new HttpClientAdapter();
};
