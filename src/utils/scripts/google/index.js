/* eslint-disable */
export const GoogleAnalyticsID = () => 'UA-153502128-1'
export const GoogleAdwordsID = () => 'AW-622817811'

const GoogleAnalyticsScript = () => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID()}`
  script.addEventListener('load', () => resolve(script), false)
  script.addEventListener('error', () => reject(script), false)
  document.body.appendChild(script)
})

const setup = () => GoogleAnalyticsScript().then(() => {
  const script = document.createElement('script')
  script.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', "${GoogleAnalyticsID()}");
    gtag('config', "${GoogleAdwordsID()}");`
    document.body.appendChild(script)
})

export default setup
