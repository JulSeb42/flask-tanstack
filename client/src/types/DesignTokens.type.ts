import type { TailwindGlobalColor } from "utils/tailwind"

export const designTokens = {
	colorsShort: {
		red: "red",
		orange: "orange",
		amber: "amber",
		yellow: "yellow",
		lime: "lime",
		green: "green",
		emerald: "emerald",
		teal: "teal",
		cyan: "cyan",
		sky: "sky",
		blue: "blue",
		indigo: "indigo",
		violet: "violet",
		purple: "purple",
		fuchsia: "fuchsia",
		pink: "pink",
		rose: "rose",
		slate: "slate",
		gray: "gray",
		black: "black",
		white: "white",
		current: "current",
		transparent: "transparent",
		background: "background",
	},
	colorsHover: {
		red: "red",
		orange: "orange",
		amber: "amber",
		yellow: "yellow",
		lime: "lime",
		green: "green",
		emerald: "emerald",
		teal: "teal",
		cyan: "cyan",
		sky: "sky",
		blue: "blue",
		indigo: "indigo",
		violet: "violet",
		purple: "purple",
		fuchsia: "fuchsia",
		pink: "pink",
		rose: "rose",
		slate: "slate",
		gray: "gray",
		white: "white",
	},

	textTags: {
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		h5: "h5",
		h6: "h6",
		p: "p",
		strong: "strong",
		em: "em",
		small: "small",
		ul: "ul",
		ol: "ol",
	},

	buttonVariants: {
		plain: "plain",
		ghost: "ghost",
		transparent: "transparent",
	},
	buttonSizes: {
		large: "large",
		small: "small",
	},
} as const

export type AllColor = TailwindGlobalColor
export type ColorShort = keyof typeof designTokens.colorsShort
export type ColorHover = keyof typeof designTokens.colorsHover
export type TextTag = keyof typeof designTokens.textTags
export type ButtonVariant = keyof typeof designTokens.buttonVariants
export type ButtonSize = keyof typeof designTokens.buttonSizes
