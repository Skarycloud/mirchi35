import PrivacyPolicyContent from '@/components/privacy-policy-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mirchi35 Private Limited - Learn how we protect and handle your data.',
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
