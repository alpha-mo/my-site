export const fromForm = (formData: FormData) => {
  return {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
  }
}

export const areOk = (values: {
  name: string
  email: string
  message: string
}) => {
  const { name, email, message } = values
  return isOk(name, false) && isOk(email, true) && isOk(message, false)
}

export const isOk = (value: string, isEmail: boolean) => {
  if (isEmail) {
    return !!value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  } else return !!value && value.length >= 3
}
