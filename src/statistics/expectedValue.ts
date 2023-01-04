import { add, multiply } from '../base'
/**
 * @title expectedValue
 * @description 期望值, 期望,数学期望
 * @param list {[number,number][]}
 * @returns number
 */
export function expectedValue(list: [number, number][] = []): number {
	if (list.length === 0) return 0
	let result = 0
	for (let i = 0; i < list.length; i++) {
		const [value, chance] = list[i]
		if (value && chance)
			result = add(result, multiply(value, chance))
	}
	return result
}