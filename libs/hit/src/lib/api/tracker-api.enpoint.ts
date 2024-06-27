const base = '/api/hit';

export const hitEndpoint = {
    base: `${base}`,
    byPage: (page:string)=>`${base}/${page}`
}