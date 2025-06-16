export type ThemeName = "light" | "dark"

export interface IThemeContext {
	theme: ThemeName
	switchTheme: () => void
}
