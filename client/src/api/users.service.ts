import { http } from "./http-common"
import { SERVER_PATHS } from "./server-paths"
import type { User, ApiResponse } from "types"

class UserService {
	allUsers(): ApiResponse<User[]> {
		return http.get("http://localhost:5005/api/users")
	}

	newUser(data: {
		fullName: string
		email: string
		password: string
	}): ApiResponse<User> {
		return http.post(SERVER_PATHS.USERS.NEW_USER, data)
	}
}

export const userService = new UserService()
