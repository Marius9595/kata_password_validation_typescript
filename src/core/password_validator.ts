export function is_valid_password(password: string): boolean {
	const minimum_length = 6;
	const has_minimum_length = password.length < minimum_length;
	if (has_minimum_length) {
		return false;
	}

	const has_lowercase_letter = password.toLowerCase() === password;
	if (has_lowercase_letter) {
		return false;
	}

	const has_uppercase_letter = password.toUpperCase() === password;
	if (has_uppercase_letter) {
		return false;
	}

	const there_is_a_number = password.search('[0-9]') === -1;
	if (there_is_a_number) {
		return false;
	}

	return true;
}
