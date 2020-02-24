/**
 * getUrlForEnvironment for either production or staging
 */
export const getUrlEnvironmentDomain = (): string => `${process.env.REACT_APP_API_URL}`
