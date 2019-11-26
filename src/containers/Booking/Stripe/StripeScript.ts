let load: any

const StripeScript = (): Promise<HTMLBodyElement> => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = 'https://js.stripe.com/v3/'
  script.addEventListener('load', () => resolve())
  script.addEventListener('error', () => reject())
  document.body.appendChild(script)
})

const StripeScriptSetup = () => {
  if (!load) {
    load = StripeScript()
  }

  return load
}

export default StripeScriptSetup
