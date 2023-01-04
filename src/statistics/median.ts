import { sort } from '../util/sort'
import { isEven, divide, add } from '../base'

/**
 * @title median
 * @description 中位数, 中值
 * @param list {number[]}
 * @returns {number|null}
 */
export function median(list: number[]): number | null {
	if (list.length === 0) return null
	if (list.length === 1) return list[0]
	const newList = sort(list)
	const len = newList.length
	if (isEven(len))
		return divide(add(newList[(len / 2) - 1], newList[(len / 2)]), 2)
	return newList[(len - 1) / 2]
}