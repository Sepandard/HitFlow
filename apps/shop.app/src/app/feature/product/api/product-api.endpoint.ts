const base = 'api/product';

export const ProductEndpoint = {
  base: `${base}`,
  getById: (id: number) => `${base}/${id}`,
} as const;
