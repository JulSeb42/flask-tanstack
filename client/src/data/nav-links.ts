import type { PageType } from "types"
import { type FileRouteTypes } from "routeTree.gen"

type NavLink = {
	text: string
	to: FileRouteTypes["fullPaths"]
	type: PageType
}

export const navLinks: Array<NavLink> = [
	{ text: "Homepage", to: "/", type: "none" },
	{ text: "Users", to: "/users", type: "none" },
	{ text: "Signup", to: "/signup", type: "anon" },
	{ text: "Login", to: "/login", type: "anon" },
	{ text: "My account", to: "/my-account", type: "protected" },
	{ text: "Admin", to: "/admin", type: "admin" },
]

export const adminNavLinks: Array<Omit<NavLink, "type">> = [
	{ text: "Home", to: "/admin" },
	{ text: "Users", to: "/admin/users" },
]
