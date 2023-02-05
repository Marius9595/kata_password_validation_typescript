export function is_valid_password(password: string): boolean {
	const minimum_length = 6;
	if (password.length < minimum_length) {
		return false;
	}

	if (password.toLowerCase() === password) {
		return false;
	}

	if (password.toUpperCase() === password) {
		return false;
	}

	return true;
}
