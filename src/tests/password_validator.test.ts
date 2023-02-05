/*
TODO:
- "a23n_E" -> true
- "a2n_E" -> false   (minimum six characteres)
- "a23n_e" -> false  (at least a uppercase character)
- "A23N_E" -> false  (at least a lowercase character)
- "aaan_E" -> false  (at least a number)
- "a23n4E" -> true   (at least a underscore)
 */

import { is_valid_password } from '../core/password_validator';

describe('Password validator should', () => {
	it('evaluate as valid a password that meet all requirements of strong password', () => {
		const strong_password = 'a23n_E';
		expect(is_valid_password(strong_password)).toBeTruthy();
	});

	it('evaluate as invalid a password that has not the minimum length', () => {
		const short_password = 'a2n_E';
		expect(is_valid_password(short_password)).toBeFalsy();
	});

	it('evaluate as invalid a password that has not at least a uppercase letter', () => {
		expect(is_valid_password('a23n_e')).toBeFalsy();
	});

	it('evaluate as invalid a password that has not at least a lowercase letter', () => {
		expect(is_valid_password('A23N_E')).toBeFalsy();
	});
});
