import { Fragment } from "react/jsx-runtime"
import { clsx } from "utils"
import { Meta, type IMeta } from "./Meta"
import { Header } from "./Header"
import { ProtectedRoute } from "./ProtectedRoute"
import { AnonRoute } from "./AnonRoute"
import type { PageType } from "types"

export const Page: FC<IPage> = ({
	title,
	description,
	keywords,
	cover,
	children,
	mainSize = "default",
	type = "none",
}) => {
	const WrapperElement =
		type === "protected"
			? ProtectedRoute
			: type === "anon"
				? AnonRoute
				: Fragment

	return (
		<WrapperElement>
			<Meta
				title={title}
				description={description}
				keywords={keywords}
				cover={cover}
			/>

			<Header />

			<section className="flex justify-center-safe px-12 py-6 w-full">
				<main
					className={clsx(
						"flex flex-col items-stretch gap-6 w-full",
						genMainSize[mainSize],
					)}
				>
					{children}
				</main>
			</section>
		</WrapperElement>
	)
}

type MainSize = "default" | "form"

interface IPage extends IMeta {
	children?: Children
	mainSize?: MainSize
	type?: PageType
}

const genMainSize: Record<MainSize, string> = {
	default: "max-w-[600px]",
	form: "max-w-[400px]",
}
