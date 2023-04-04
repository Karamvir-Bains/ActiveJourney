import Head from 'next/head'
import LoginForm from "./_login.form"
import RegistrationForm from './_registration.form'

export default function Login() {
  return (
    <>
      <Head>
        <title>User Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">
          User Login
        </h1>
        <LoginForm />
        <RegistrationForm />
      </main>
    </>
  )
}
