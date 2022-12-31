const base = '/api/category';

export const CategoryEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
} as const;
