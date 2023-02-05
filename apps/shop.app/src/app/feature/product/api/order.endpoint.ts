const base = '/api/order';

export const OrderEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
} as const;
