/**
 * getUrlForEnvironment for either production or staging
 */
const getUrlForEnvironment = (): string => {
  // if (process.env.NODE_ENV === 'production') {
  //   return ''
  // }
  
  // Default for now for staging
  return "https://api.coache.pmdcosta.ninja/"
}
