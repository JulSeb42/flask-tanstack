import { Navigate } from "@tanstack/react-router"
import { useAuth } from "context"

export const AnonRoute: FC<IAnonRoute> = ({ children }) => {
	const { isLoggedIn } = useAuth()

	if (isLoggedIn) return <Navigate to="/my-account" />

	return children
}

interface IAnonRoute {
	children?: Children
}
