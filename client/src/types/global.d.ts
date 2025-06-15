import type {
	FunctionComponent,
	ElementType as ElType,
	ChangeEvent as Change,
	FormEvent as Form,
	Dispatch,
	SetStateAction,
} from "react"

declare global {
	type Children = ReactChildren
	type DispatchState<T> = Dispatch<SetStateAction<T>>
	type FC<T = FunctionComponent> = FunctionComponent<T>
	type ElementType = ElType
	type ChangeEvent<T> = Change<T>
	type FormEvent = Form<HTMLFormElement>
}
