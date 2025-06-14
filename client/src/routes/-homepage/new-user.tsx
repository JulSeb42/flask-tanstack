import {
	useState,
	type ChangeEvent,
	type Dispatch,
	type FC,
	type FormEvent,
	type SetStateAction,
} from "react"
import { toast } from "react-toastify"
import { userService } from "api"
import type { User } from "types"

const INPUT_CLASSES =
	"px-2 border-1 border-gray-200 focus:border-blue-500 border-solid rounded-sm outline-none"

export const NewUser: FC<INewUser> = ({ users, setUsers }) => {
	const [inputs, setInputs] = useState({
		fullName: "Julien Sebag",
		email: "placeb78@hotmail.com",
		password: "Password42",
	})

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({ ...inputs, [e.target.id]: e.target.value })

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// fetch("http://localhost:5005/api/users/new-user", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		"Access-Control-Allow-Origin": "*",
		// 	},
		// 	body: JSON.stringify(inputs),
		// })
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.log(res)
		// 		setUsers([...users, res])
		// 	})
		// 	.catch(err => console.log(err))

		// fetch("/api/users/new-user", {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify(inputs),
		// })
		// 	.then(response => response.json())
		// 	.then(data => console.log(data))
		// 	.catch(err => console.log(err))

		userService
			.newUser(inputs)
			.then(res => {
				toast.success(`You just created ${inputs.fullName}`)
				setUsers([...users, res.data])
			})
			.catch(err => console.log(err))
	}

	return (
		<form onSubmit={handleSubmit} className="flex gap-2">
			<input
				placeholder="Full name"
				value={inputs.fullName}
				onChange={handleInputs}
				className={INPUT_CLASSES}
			/>

			<input
				placeholder="Email"
				value={inputs.email}
				onChange={handleInputs}
				className={INPUT_CLASSES}
			/>

			<input
				placeholder="Password"
				type="password"
				value={inputs.password}
				onChange={handleInputs}
				className={INPUT_CLASSES}
			/>

			<button type="submit">Create user</button>
		</form>
	)
}

interface INewUser {
	users: User[]
	setUsers: Dispatch<SetStateAction<User[]>>
}
