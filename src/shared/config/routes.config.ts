export const ROUTES = {
  HOME: "/",
  PLANNER: "/planner",
  GUIDE: "/guide",
  NOT_FOUND: "*",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];