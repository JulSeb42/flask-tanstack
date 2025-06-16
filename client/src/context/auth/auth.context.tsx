import { useState, useEffect, createContext, use } from "react"
import { authService } from "api"
import type { User } from "types"
import type { IAuthContext } from "./types"

export const AuthContext = createContext<IAuthContext>(null as any)

export const AuthProviderWrapper: FC<IAuthProviderWrapper> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(null as any)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [user, setUser] = useState<User>(null as any)

	const loginUser = (token: string) => {
		localStorage.setItem("authToken", token)
		verifyStoredToken()
	}

	const setToken = (token: string) => {
		localStorage.setItem("authToken", token)
		setIsLoggedIn(true)
	}

	const logoutUser = () => {
		localStorage.removeItem("authToken")
		setIsLoggedIn(false)
		setUser(null as any)
	}

	const verifyStoredToken = async () => {
		const storedToken = localStorage.getItem("authToken")

		if (storedToken) {
			await authService
				.loggedIn({
					headers: {
						Authorization: `Bearer ${storedToken}`,
					},
				})
				.then(res => {
					const user: User = res.data
					setUser(user)
					setIsLoggedIn(true)
					setIsLoading(false)
				})
				.catch(err => {
					console.log(err)
					setIsLoggedIn(false)
					setUser(null as any)
					setIsLoading(false)
				})
		} else {
			setIsLoggedIn(false)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		verifyStoredToken()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				isLoading,
				user,
				setUser,
				loginUser,
				logoutUser,
				setToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => use(AuthContext) as IAuthContext

interface IAuthProviderWrapper {
	children: Children
}
