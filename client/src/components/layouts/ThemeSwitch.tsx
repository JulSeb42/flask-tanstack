import { clsx } from "utils"
import { BiSun, BiMoon } from "react-icons/bi"
import { useTheme } from "context"

export const ThemeSwitch = () => {
	const { theme, switchTheme } = useTheme()

	return (
		<button
			className="inline-flex [&>svg]:z-10 relative [&>svg]:relative justify-between items-center-safe px-2 border-1 border-white border-solid rounded-full w-[64px] h-[24px]"
			onClick={switchTheme}
		>
			<BiSun />
			<BiMoon />
			<span
				className={clsx(
					"top-0 z-0 absolute bg-blue-500 rounded-full w-[50%] h-full transition-all duration-200 ease-in-out",
					theme === "light" ? "left-0" : "left-[50%]",
				)}
			/>
		</button>
	)
}
