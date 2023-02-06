export function is_valid_password(password: string): boolean {
	const minimum_length = 6;
	const has_minimum_length = password.length < minimum_length;
	const has_lowercase_letter = password.toLowerCase() === password;
	const has_uppercase_letter = password.toUpperCase() === password;
	const there_is_a_number = password.search('[0-9]') === -1;

	return !there_is_a_number &&
			!has_minimum_length &&
			!has_lowercase_letter &&
			!has_uppercase_letter;
}
