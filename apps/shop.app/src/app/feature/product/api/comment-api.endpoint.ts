const base = 'api/comment';

export const CommentEndpoint = {
  base: `${base}`,
  user:   `${base}/user`,
  getById: (id: number) => `${base}/${id}`,
  confirmed: (id: number) => `${base}/${id}/confirmed`,
  reject: (id: number) => `${base}/${id}/reject`,
} as const;
