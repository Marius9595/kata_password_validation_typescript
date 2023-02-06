function HasMinimumLength(password: string, minimum_length: number) {
	return password.length >= minimum_length;
}

function HasLowercaseLetter(password: string) {
	return password.toLowerCase() !== password;
}

function HasUppercaseLetter(password: string) {
	return password.toUpperCase() !== password;
}

function ThereIsANumber(password: string) {
	return password.search('[0-9]') !== -1;
}

export function is_valid_password(password: string): boolean {
	const minimum_length = 6;
	return (
		ThereIsANumber(password) &&
		HasMinimumLength(password, minimum_length) &&
		HasLowercaseLetter(password) &&
		HasUppercaseLetter(password)
	);
}
