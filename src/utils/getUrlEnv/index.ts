/**
 * getUrlForEnvironment for either production or staging
 */
export const getUrlEnvironmentDomain = (): string | undefined => {
  // Production env
  if (process.env.REACT_APP_CONTEXT_ENV === 'production') {
    return process.env.REACT_APP_PRODUCTION_API
  }

  // Staging env
  if (process.env.REACT_APP_CONTEXT_ENV === 'staging') {
    return process.env.REACT_APP_STAGING_API
  }

  // Default to local environment
  return process.env.REACT_APP_LOCAL_API
}
