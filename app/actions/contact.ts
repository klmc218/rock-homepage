'use server'

export type ContactState = { status: 'idle' | 'success' | 'error'; fields?: string[] }

const inquiryTypes = new Set(['oem', 'distribution', 'bulk', 'brochure', 'other'])
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function read(formData: FormData, key: string, max: number) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function submitInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const inquiry = {
    name: read(formData, 'name', 100),
    company: read(formData, 'company', 150),
    country: read(formData, 'country', 80),
    email: read(formData, 'email', 200),
    type: read(formData, 'type', 20),
    message: read(formData, 'message', 3000),
  }

  const invalid: string[] = []
  if (!inquiry.name) invalid.push('name')
  if (!inquiry.company) invalid.push('company')
  if (!inquiry.country) invalid.push('country')
  if (!emailPattern.test(inquiry.email)) invalid.push('email')
  if (!inquiryTypes.has(inquiry.type)) invalid.push('type')

  if (invalid.length) return { status: 'error', fields: invalid }

  // TODO: connect a delivery channel (e.g. Resend email or a Neon database) to store/forward inquiries.
  console.log('[inquiry]', { ...inquiry, receivedAt: new Date().toISOString() })

  return { status: 'success' }
}
