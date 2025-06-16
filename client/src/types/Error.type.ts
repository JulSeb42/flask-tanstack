import type { AxiosError } from "axios"

export type Error<T> = AxiosError<T> | undefined
export type ErrorMessage = Error<{ message: string }> | string | Array<string>
