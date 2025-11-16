export const enum ApiMessage {
	// Auth/Register
	TOKEN_ERROR='token_error',
	INVALID_TOKEN_STRUCTURE='invalid_token_structure',
	INVALID_TOKEN='invalid_token',
	AUTH_ERROR='auth_error',
	AUTH_SUCCESS='auth_success',
	SERVER_ERROR='server_error',
	EXISTING_USER='existing_user',
	USER_CREATED='user_created',
	REFRESH_TOKEN_REQUIRED='refresh_token_required',
	INVALID_REFRESH_TOKEN='invalid_refresh_token',
	
	// Users
	GET_USER='get_user',
	GET_USERS='get_users',
	USER_NOT_FOUND='user_not_found',
	USERS_NOT_FOUND='users_not_found',

	// Data
	EMPTY_DATA='empty_data'
}

export const apiMessages: OptionalRecord<ApiMessage, string> = {
	auth_error: 'Неверный логин или пароль',
	server_error: 'Непредвиденная ошибка. Попробуйте ещё раз',
	user_not_found: 'Пользователь не найден',
	users_not_found: 'Пользователи не найдены',
	existing_user: 'Пользователь с таким логином или почтой уже существует',
	empty_data: 'Данные не найдены',
	refresh_token_required: 'Отсутствует токен доступа'
}
