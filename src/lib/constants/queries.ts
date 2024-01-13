export const QUERIES = {
  MOBILE_PLANS: "mobile-plans",
};

const ONE_HOUR_IN_SECONDS = 3600;

export const QUERY_CACHE_CONFIG = {
  staleTime: ONE_HOUR_IN_SECONDS * 4,
  cacheTime: ONE_HOUR_IN_SECONDS * 4,
};
