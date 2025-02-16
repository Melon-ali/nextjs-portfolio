'use client'
import LoginForm from '@/src/components/forms/LoginForm'
import RegisterForm from '@/src/components/forms/RegisterForm'
import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs'
import { baseUrl } from '@/src/utils/authOptions'
import { signIn } from 'next-auth/react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-900 items-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 text-white">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-white">Login</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <LoginForm />
            </CardContent>
            <p className="text-center text-white">Or Sign In Using</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button
                onClick={() =>
                  signIn('google', {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                className="rounded-full"
              >
                <FaGoogle />
              </Button>
              <Button
                onClick={() =>
                  signIn('github', {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                className="rounded-full"
              >
                <FaGithub />
              </Button>
            </div>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Register</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <RegisterForm />
            </CardContent>
            <p className="text-center">Or Sign In Using</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button
                onClick={() =>
                  signIn('google', {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                className="rounded-full"
              >
                <FaGoogle />
              </Button>
              <Button
                onClick={() =>
                  signIn('github', {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                className="rounded-full"
              >
                <FaGithub />
              </Button>
            </div>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
