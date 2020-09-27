class Conversions {
  _isGTagAvailable = false

  _account = 'AW-622817811/4M-rCNG6nNsBEJPk_agC'

  constructor() {
    this._isGTagAvailable = !!window?.gtag
  }


  createConversion = () => {
    if (this._isGTagAvailable) {
      window.gtag('event', 'conversion', {send_to: this._account})
    }
  }
}

const conversions = new Conversions()

export const {createConversion} = conversions
