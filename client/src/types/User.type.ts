export type User = {
	_id: string
	fullName: string
	email: string
	password: string
	role: "user" | "admin"
}

export type EditAccountFormData = Pick<User, "fullName">

export type EditPasswordFormData = {
	oldPassword: string
	newPassword: string
}
