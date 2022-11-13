import type { Actions } from '@sveltejs/kit'
import { fromForm, areOk, isOk } from '$utils/contact/contactFormUtils'
import { sendMail } from './mailer.js'

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData()
    const { name, message, email } = fromForm(formData)
    let result: {} = { sent: false }

    if (areOk({ name, email, message })) {
      const res = await sendMail(name, email, message)
        .then((response) => {
          console.log(`Response is: ${response}`)
        })
        .catch((err) => {
          console.log(`error is: ${err}`)

          return {
            success: true,
            result,
          }
        })
    } else {
      return {
        success: false,
        msg: 'Bad Request',
        nameErr: !isOk(name, false),
        emailErr: !isOk(email, true),
        messageErr: !isOk(message, false),
        name,
        email,
        message,
      }
    }

    return {
      success: true,
      result: { sent: true },
    }
  },
}
