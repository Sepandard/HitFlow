const base = 'api/comment';

export const UserEndpoint = {
  base: `${base}`,
  comment:   `${base}/user`,
} as const;
