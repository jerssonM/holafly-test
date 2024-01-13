export const ROUTES = {
  HOME: "/home",
  LOGIN: "/",
};

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
