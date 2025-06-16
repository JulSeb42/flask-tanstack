import { useState, useEffect } from "react"
import { Link } from "@tanstack/react-router"
import { SITE_DATA, navLinks } from "data"
import { clsx } from "utils"
import { useAuth } from "context"
import { ThemeSwitch } from "./ThemeSwitch"

const LINK_HOVER = "hover:text-gray-300 active:text-gray-100"

export const Header = () => {
	const { isLoggedIn, user, logoutUser } = useAuth()

	const [links, setLinks] = useState(navLinks)

	useEffect(() => {
		if (isLoggedIn && user?.role === "admin") {
			setLinks(links.filter(l => l.type !== "anon"))
		} else if (isLoggedIn) {
			setLinks(links.filter(l => l.type !== "anon" && l.type !== "admin"))
		} else {
			setLinks(
				links.filter(l => l.type !== "protected" && l.type !== "admin"),
			)
		}
	}, [isLoggedIn, user?.role])

	return (
		<header
			className={clsx(
				"flex justify-between bg-blue-800 px-[5%] py-4 text-white",
			)}
		>
			<Link to="/" className={clsx("font-black", LINK_HOVER)}>
				{SITE_DATA.NAME}
			</Link>

			<nav className="flex items-center-safe gap-4">
				{links.map((link, i) => (
					<Link
						to={link.to}
						className={clsx("[&.active]:font-black", LINK_HOVER)}
						key={i}
					>
						{link.text}
					</Link>
				))}
				{isLoggedIn && (
					<button
						className={clsx("[&.active]:font-black", LINK_HOVER)}
						onClick={logoutUser}
					>
						Logout
					</button>
				)}
				<ThemeSwitch />
			</nav>
		</header>
	)
}
