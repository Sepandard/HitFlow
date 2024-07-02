const base = 'api/';

export const AuthEndpoint = {
  login: `${base}/login`,
  signup: `${base}/signup`,
} as const;
