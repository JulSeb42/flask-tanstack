import { http } from "./http-common"
import { generateServerRoute } from "utils"
import type { SERVER_PATHS } from "./server-paths"
import type {
	User,
	ApiResponse,
	SignupFormData,
	LoggedInFormData,
	LoginFormData,
	ResetPasswordFormData,
} from "types"

type PATHS = keyof typeof SERVER_PATHS.AUTH

const generateRoute = (route: Exclude<PATHS, "ROOT">) =>
	generateServerRoute("AUTH", route)

class AuthService {
	signup = async (data: SignupFormData): ApiResponse<User> =>
		await http.post(generateRoute("SIGNUP"), data)

	login = async (data: LoginFormData): ApiResponse<User> =>
		await http.post(generateRoute("LOGIN"), data)

	loggedIn = async (data: LoggedInFormData): ApiResponse<User> =>
		await http.get(generateRoute("LOGGED_IN"), data)

	verify = async (id: string, token: string) =>
		await http.put(generateServerRoute("AUTH", "VERIFY", [id, token]))

	forgotPassword = async (email: string) =>
		await http.post(generateRoute("FORGOT_PASSWORD"), { email })

	resetPassword = async (data: ResetPasswordFormData) =>
		await http.put(generateRoute("RESET_PASSWORD"), data)
}

export const authService = new AuthService()
