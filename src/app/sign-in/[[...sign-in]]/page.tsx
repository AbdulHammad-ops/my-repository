import { SignIn } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <main className='flex justify-center items-center min-h-screen bg-black'>
      <SignIn />
    </main>
  )
}