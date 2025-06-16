import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Page } from "components"
import { UsersList, Signup } from "./-homepage"
import { Login } from "./-homepage/login"
import type { User } from "types"

const App = () => {
	const [users, setUsers] = useState<Array<User>>([])

	return (
		<Page title="Home">
			<UsersList users={users} setUsers={setUsers} />
			<Signup />
			<Login />
		</Page>
	)
}

export const Route = createFileRoute("/")({
	component: App,
})
