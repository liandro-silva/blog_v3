export const makeApiUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
};
