const base = '/api/product';

export const ProductEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
} as const;
