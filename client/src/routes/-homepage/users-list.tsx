import {
	useState,
	useEffect,
	type Dispatch,
	type SetStateAction,
	type FC,
} from "react"
import { userService } from "api"
import type { User } from "types"

export const UsersList: FC<IUsersList> = ({ users, setUsers }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState(undefined as any)

	useEffect(() => {
		if (!users?.length) {
			userService
				.allUsers()
				.then(res => setUsers(res.data))
				.catch(err => setErrorMessage(err.response.data.message))
				.finally(() => setIsLoading(false))
		}
	}, [users])

	if (isLoading) return <p>Loading...</p>

	if (errorMessage) return <p>{errorMessage}</p>

	return (
		<ul>
			{users.map(user => (
				<li key={user._id}>
					{user.fullName}:{" "}
					<a href={`mailto:${user.email}`}>{user.email}</a>
				</li>
			))}
		</ul>
	)
}

interface IUsersList {
	users: User[]
	setUsers: Dispatch<SetStateAction<User[]>>
}
