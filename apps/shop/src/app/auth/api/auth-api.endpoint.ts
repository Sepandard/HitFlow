const base = 'api/auth';

export const AuthEndpoint = {
  login: `${base}/login`,
  signup: `${base}/signup`,
} as const;
