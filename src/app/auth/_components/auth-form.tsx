'use client'

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const AuthForm = () => {
  const { signIn } = authClient

  const handleSignIn = async (provider: 'github' | 'google') => {
    await signIn.social({
      provider,
      callbackURL: '/dashboard',
    })
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl">
          Welcome to Cryptopia
        </CardTitle>
        <CardDescription className="text-center">
          Choose one of the following methods to login
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleSignIn('github')}
        >
          <FaGithub className="mr-2 h-4 w-4" />
          Login with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleSignIn('google')}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          By logging in, you agree to our terms of service and privacy policy
        </div>
      </CardFooter>
    </Card>
  )
}
