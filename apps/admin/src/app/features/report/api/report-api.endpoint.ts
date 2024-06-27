const base = '/api/hit';

export const ReportEndpoint = {
    base: `${base}`,
    type: `${base}/type`,
    range: `${base}/range`,
} as const 