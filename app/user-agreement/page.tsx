import UserAgreementContent from '@/components/user-agreement-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Agreement',
  description: 'Mirchi35 Vendor App - End User License Agreement (EULA) and Food Safety Compliance Addendum.',
}

export default function UserAgreementPage() {
  return <UserAgreementContent />
}
