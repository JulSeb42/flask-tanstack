import { useAuth } from "context"
import { authService } from "api"

export const Login = () => {
	const { isLoggedIn, logoutUser, loginUser } = useAuth()

	const login = () => {
		authService
			.login({ email: "placeb78@hotmail.com", password: "Password42" })
			.then(res => loginUser(res.data.authToken))
			.catch(err => console.log(err))
	}

	return (
		<>
			<p>Is logged in: {isLoggedIn === true ? "true" : "false"}</p>

			{isLoggedIn ? (
				<button onClick={logoutUser} className="self-start">
					Logout
				</button>
			) : (
				<button onClick={login} className="self-start">
					Login
				</button>
			)}
		</>
	)
}
