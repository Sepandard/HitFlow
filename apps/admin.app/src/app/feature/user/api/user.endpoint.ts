const base = '/api/user';

export const UserEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
} as const;
