/**
 * Create random digit
 *
 * @param {length: number} options
 * @returns {number}
 */
function getRandomDigit(length) {
	return Math.trunc(Math.random() * Math.pow(10, length));
}

/**
 * Create random string
 *
 * @param {length: number} options
 * @returns {string}
 */
function getRandomString(length) {
	const code = Math.random().toString(32).substring(2);

	if (code.length >= length) {
		return code.substring(0, length);
	}

	return code + getRandomString(length - code.length);
}

/**
 * Generate some random digit or letter key
 *
 * @since 0.1.0
 *
 * @param {{type: "digit" | "string", length: number}} options
 * @returns {string}
 */
function generateKey(options = {}) {
	const { type = "digit", length = 4 } = options;

	if (!Number.isInteger(length) || length < 0) {
		throw new Error("Key lenght must be a positive number");
	}

	if (type === "digit") {
		if (length > 16) {
			throw new Error("Key lenght must be lower or equal 16");
		}

		return String(getRandomDigit(length)).padStart(length, "0");
	}

	if (type === "string") {
		if (length > 32) {
			throw new Error("Key lenght must be lower or equal 32");
		}

		return getRandomString(length).slice(0, length);
	}

	throw new Error("Unsupported key type");
}

module.exports = generateKey;
