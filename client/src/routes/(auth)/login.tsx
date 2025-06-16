import { createFileRoute } from "@tanstack/react-router"

const Login = () => {
	return <div>Hello "/(auth)/login"!</div>
}

export const Route = createFileRoute("/(auth)/login")({
	component: Login,
})
