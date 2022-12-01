const base = 'api/landing-page';

export const LandingPageEndpoint = {
  base: `${base}`,
  count: `${base}/count`,
  byId: (id: number) => `${base}/${id}`,
} as const;
