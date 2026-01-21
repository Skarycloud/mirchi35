import DeleteAccountContent from '@/components/delete-account-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account & Data Request',
  description: 'Delete Account & Data Request for Mirchi35 Private Limited - Learn how to request account deletion and data removal.',
}

export default function DeleteAccountPage() {
  return <DeleteAccountContent />
}
