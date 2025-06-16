import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "react-toastify"
import { authService } from "api"
import { useAuth } from "context"

const INPUT_CLASSES =
	"px-2 border-1 border-gray-200 focus:border-blue-500 border-solid rounded-sm outline-none"

export const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "Julien Sebag",
		email: "placeb78@hotmail.com",
		password: "Password42",
	})
	const { setToken, setUser, loginUser } = useAuth()

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({ ...inputs, [e.target.id]: e.target.value })

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		authService
			.signup(inputs)
			.then(res => {
				loginUser(res.data.authToken)
				toast("User is logged in")
			})
			.catch(err => console.log(err))
	}

	return (
		<form className="flex gap-2" onSubmit={handleSubmit}>
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

			<button type="submit">Signup</button>
		</form>
	)
}
