/**
 * getUrlForEnvironment for either production or staging
 */
const getUrlForEnvironment = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return ''
  }
  return ''
}
