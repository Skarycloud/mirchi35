import ContactContent from '@/components/contact-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mirchi35. Contact our customer care team for support, inquiries, or partnership opportunities.',
}

export default function ContactPage() {
  return <ContactContent />
}
