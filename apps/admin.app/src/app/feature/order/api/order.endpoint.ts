const base = '/api/order';

export const OrderEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
  changeStatus: (id: number) => `${base}/status-change/${id}`,
} as const;

