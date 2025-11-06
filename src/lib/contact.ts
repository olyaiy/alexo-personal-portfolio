export interface ContactMessageInput {
  name: string
  email: string
  message: string
}

export interface ContactMessageResponse {
  success: boolean
  message?: string
}

export async function submitContactMessage(input: ContactMessageInput): Promise<ContactMessageResponse> {
  const formData = new FormData()

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (accessKey) {
    formData.set('access_key', accessKey)
  }

  const name = (input.name || '').trim()
  const email = (input.email || '').trim()
  const message = (input.message || '').trim()

  formData.set('name', name)
  formData.set('email', email)
  formData.set('message', message)
  formData.set('from_name', name || 'Portfolio Visitor')
  formData.set('replyto', email)
  formData.set('subject', `New portfolio message${name ? ` from ${name}` : ''}`)
  formData.set('botcheck', '')

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.success) {
    const errorMessage =
      (data && typeof data.message === 'string' && data.message) ||
      `Request failed with status ${response.status}`

    throw new Error(errorMessage)
  }

  return data
}
