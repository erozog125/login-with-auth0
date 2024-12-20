import { useAuth0 } from "@auth0/auth0-react"

export const App = () => {

  const { loginWithRedirect } = useAuth0()

  return (
    <button onClick={() => loginWithRedirect()}>LogIn</button>
  )
}

