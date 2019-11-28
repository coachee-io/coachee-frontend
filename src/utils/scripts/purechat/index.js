/* eslint-disable */
const PurechatID = () => '7a9fd8e4-6456-4b56-9536-2c0f2d7f1445'
const PureChatSetup = () => {
  window.purechatApi = {
    l: [],
    t: [],
    on() {
      this.l.push(arguments)
    },
  };
  (function () {
    let done = false
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'
    document.getElementsByTagName('HEAD').item(0).appendChild(script)
    script.onreadystatechange = script.onload = function (e) {
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        const w = new PCWidget({
          c: PurechatID(),
          f: true,
        })
        done = true
      }
    }
  }())
}
/* eslint-enable */

export default PureChatSetup
