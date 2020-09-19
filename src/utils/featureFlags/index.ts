import store from 'store'

class FeatureFlags {
  isFeatureEnabled = (flag: string): boolean => {
    const {features: {flags}}: any = store.getState()
    return flags[flag]
  }
}

export default new FeatureFlags()
