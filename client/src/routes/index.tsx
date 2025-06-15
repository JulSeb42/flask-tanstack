import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { UsersList, NewUser, Signup } from "./-homepage"
import { useAuthContext } from "context"
import { authService } from "api"
import type { User } from "types"

export const Route = createFileRoute("/")({
	component: App,
})

function App() {
	const [users, setUsers] = useState<User[]>([])
	const { isLoggedIn, logoutUser, loginUser } = useAuthContext()

	const login = () => {
		authService
			.login({ email: "placeb78@hotmail.com", password: "Password42" })
			.then(res => loginUser(res.data.authToken))
			.catch(err => console.log(err))
	}

	return (
		<main className="flex flex-col gap-6 p-12">
			<UsersList users={users} setUsers={setUsers} />
			<NewUser users={users} setUsers={setUsers} />
			<Signup />
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
		</main>
	)
}
