export function is_valid_password(password: string): boolean {
	if (password.length < 6) {
		return false;
	}
	return true;
}
