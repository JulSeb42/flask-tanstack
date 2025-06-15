import { http } from "./http-common"
import { SERVER_PATHS } from "./server-paths"
import type { User, ApiResponse } from "types"

const BASE_URL = "http://localhost:5005/api/auth"

class AuthService {
	async signup(data: { fullName: string; email: string; password: string }) {
		return http.post(`${BASE_URL}/signup`, data)
	}

	async login(data: { email: string; password: string }) {
		return await http.post(`${BASE_URL}/login`, data)
	}

	async loggedIn(data: {}) {
		return await http.get(`${BASE_URL}/loggedin`, data)
	}
}

export const authService = new AuthService()
