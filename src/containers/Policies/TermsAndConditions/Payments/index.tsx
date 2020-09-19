import React, {PureComponent} from 'react'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class Payments extends PureComponent {
  render() {
    return (
      <>
        <H3 id="payments">
          4. How our payments work
        </H3>
        <Para>
          4.1. The total programme price will be reserved when you submit your card details,
          however payment will only be taken 12 hours after your intro call.
          This means that if you are not happy with your intro call,
          you have up to 12 hours to let us know. After this time, the payment will be debited.
        </Para>
        <Para>
          4.2. Payment may be made by debit or credit card.
          Any refunds will be paid to the same card that you used at the time of booking.
          You cannot pay by cash or cheque.
        </Para>
        <Para>
          4.3. We reserve the right to cancel your booking if we are refused authority for payment
          or reasonably believe that payment will be refused at any stage.
        </Para>
        <Para>
          If you’re a coach:
        </Para>
        <Para>
          4.4. During your registration with us, we will require that you create a Stripe account.
          We do this to ensure that all payments made to our coaches are secure and reliable,
          as well as ensuring compliance to all Know Your Customer (KYC), Customer Due Dilligence (CDD)
          and Anti-Money Laundering (AML) European and UK regulations.
          Stripe will request information from you to identify and protect your identity.
        </Para>
        <Para>
          4.5. All payments will be made from coachee.io to your Stripe account.
          We will pay you up to 72 hours after each booked session,
          and only after you let us know via email that the session has successfully happened.
          Please note that the payment for the first session after the intro call might take slightly longer,
          as the processing of the customer’s payment can take up to 7 business days after the intro call.
          We will take our 15% fee from the total price of the coaching program,
          and pay you the remaining amount divided by each session.
        </Para>
      </>
    )
  }
}

export default Payments
