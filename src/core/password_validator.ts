function HasMinimumLength(password: string, minimum_length: number) {
	return password.length < minimum_length;
}

function HasLowercaseLetter(password: string) {
	return password.toLowerCase() === password;
}

function HasUppercaseLetter(password: string) {
	return password.toUpperCase() === password;
}

function ThereIsANumber(password: string) {
	return password.search('[0-9]') === -1;
}

export function is_valid_password(password: string): boolean {
	const minimum_length = 6;
	const has_minimum_length = HasMinimumLength(password, minimum_length);
	const has_lowercase_letter = HasLowercaseLetter(password);
	const has_uppercase_letter = HasUppercaseLetter(password);
	const there_is_a_number = ThereIsANumber(password);

	return !there_is_a_number &&
			!has_minimum_length &&
			!has_lowercase_letter &&
			!has_uppercase_letter;
}
