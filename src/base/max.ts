import { isEffectNumber, type } from 'check-it-type'
import { Itteratee } from '../type'
import { useValue } from '../util'
/**
 * @title max
 * @description 求最大值(只会判断有效值), 只会统计number | string类型的数值
 * @param list 数组
 * @returns 最大值
 */

export function max(list: any[]): number | undefined {
	let maxValue: number | undefined = undefined
	list.forEach((val: any): void => {
		const item = Number(val)
		if (isEffectNumber(item)) {
			if (maxValue === undefined) {
				maxValue = item
			} else maxValue = item < maxValue ? maxValue : item
		}
	})
	return maxValue
}

/**
 * @title maxBy
 * @description 求最大值
 * @param list 要迭代数组
 * @param itteratee 迭代函数 / key
 * @returns 最大值
 */
export function maxBy(
	list: any[],
	itteratee?: Itteratee
): number | undefined | { [key: string]: any } {
	const _type: string = type(itteratee)
	if (_type === 'Undefined') {
		return max(list)
	}
	let maxValue: number | undefined = undefined
	let result: number | undefined | { [key: string]: any } = undefined
	const handleValue: any = useValue(itteratee)

	list.forEach((val: any): void => {
		const item = Number(handleValue(val))
		if (isEffectNumber(item)) {
			if (maxValue === undefined) {
				maxValue = item
				result = val
			}
			if (item > maxValue) {
				maxValue = item
				result = val
			}
		}
	})
	return result
}