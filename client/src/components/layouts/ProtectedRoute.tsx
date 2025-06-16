import { Navigate } from "@tanstack/react-router"
import { useAuth } from "context"

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
	const { isLoggedIn } = useAuth()

	if (!isLoggedIn) return <Navigate to="/login" />

	return children
}

interface IProtectedRoute {
	children?: Children
}
