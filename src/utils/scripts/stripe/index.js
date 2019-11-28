let load = null

const StripeScript = () => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = 'https://js.stripe.com/v3/'
  script.addEventListener('load', () => resolve(), false)
  script.addEventListener('error', () => reject(), false)
  document.body.appendChild(script)
})

const setup = () => {
  if (!load) {
    load = StripeScript()
  }
  return load
}

export default setup
