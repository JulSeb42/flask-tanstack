import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { UsersList, NewUser } from "./-homepage"
import type { User } from "types"

export const Route = createFileRoute("/")({
	component: App,
})

function App() {
	const [users, setUsers] = useState<User[]>([])

	return (
		<main className="flex flex-col gap-6 p-12">
			<UsersList users={users} setUsers={setUsers} />
			<NewUser users={users} setUsers={setUsers} />
		</main>
	)
}
