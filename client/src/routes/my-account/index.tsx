import { createFileRoute } from "@tanstack/react-router"

const MyAccount = () => {
	return <div>Hello "/my-account/"!</div>
}

export const Route = createFileRoute("/my-account/")({
	component: MyAccount,
})
