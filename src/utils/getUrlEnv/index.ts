/**
 * getUrlForEnvironment for either production or staging
 */
export const getUrlEnvironmentDomain = (): string => 'http://localhost:80' || 'https://api.coachee.pmdcosta.ninja'
