import { isArray } from "check-it-type"

/**
 * @title mode
 * @description 众数, 范数, 密集数
 * @param list {number[]}
 * @returns {null|number|number[]}
 */
export function mode(list: number[]): null | number | number[] {
	const record: Record<`${number}`, number> = {}
	let maxCount = 1
	for (let i = 0; i < list.length; i++) {
		const item = list[i]
		if (record[item] === undefined) {
			record[item] = 1
			continue
		}
		if (++record[item] > maxCount) {
			maxCount = record[item]
		}
	}
	if (maxCount === 1) return null

	let result: null | number | number[] = null
	for (const key in record) {
		if (record[key] === maxCount) {
			if (result === null) {
				result = Number(key)
				continue
			}
			if (result !== null && !isArray(result)) {
				result = [result, Number(key)]
				continue
			}
			if (isArray(result)) {
				result.push(Number(key))
				continue
			}

		}
	}
	return result
}