import { createContext, use, useState, useEffect } from "react"
import type { ThemeName, IThemeContext } from "./types"

const ThemeContext = createContext<IThemeContext>(null as any)

export const ThemeProviderWrapper: FC<IThemeProviderWrapper> = ({
	children,
}) => {
	const storedTheme = localStorage.getItem("theme") as ThemeName
	const [theme, setTheme] = useState<ThemeName>(storedTheme ?? "light")

	const docEl = document.documentElement

	const switchToLight = () => {
		setTheme("light")
		localStorage.setItem("theme", "light")
		docEl.classList.add("light")
		docEl.classList.remove("dark")
	}

	const switchToDark = () => {
		setTheme("dark")
		localStorage.setItem("theme", "dark")
		docEl.classList.add("dark")
		docEl.classList.remove("light")
	}

	const switchTheme = () => {
		if (theme === "light") switchToDark()
		else switchToLight()
	}

	useEffect(() => {
		if (storedTheme === "light") switchToLight()
		else if (storedTheme === "dark") switchToDark()
		else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches)
				switchToDark()
			else switchToLight()
		}
	}, [storedTheme, window.matchMedia, theme])

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

interface IThemeProviderWrapper {
	children?: Children
}

export const useTheme = () => use(ThemeContext) as IThemeContext
