const base = '/api/comment';

export const CommentsEndpoint = {
  base: `${base}`,
  byId: (id: number) => `${base}/${id}`,
  confirmed: (id: number) => `${base}/${id}/confirmed`,
  reject: (id: number) => `${base}/${id}/reject`
} as const;
