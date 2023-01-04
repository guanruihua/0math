/**
 * @title isEven
 * @description 偶数
 * @param num {number}
 * @returns {boolean}
 */
export const isEven = (num: number) => num % 2 === 0

/**
 * @title isOdd
 * @description 奇数
 * @param num {number}
 * @returns {boolean}
 */
export const isOdd = (num: number) => num % 2 === 1

/**
 * @title primeNumber
 * @description 质数, 素数
 * @param num {number}
 * @returns {boolean}
 */
export const primeNumber = (num: number): boolean => {
	if ([0, 1].includes(num) || num < 0) return false
	return !compositeNumber(num)
}

/**
 * @title compositeNumber
 * @description 合数
 * @param num {number}
 * @returns {boolean}
 */
export const compositeNumber = (num: number): boolean => {
	if ([0, 1, 2, 3].includes(num)) return false
	if (isEven(num) || num < 0) return true
	if (
		num % 3 === 0
		|| num % 5 === 0
		|| num % 7 === 0
		|| num % 11 === 0
		|| num % 13 === 0
		|| num % 17 === 0
	) return true
	for (let i = 19; i < num; i += 2)
		if (num % i === 0) return true

	return false
}