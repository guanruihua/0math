import { getDecimalDigits, isDecimals } from '../util'

/**
 * @title add
 * @description 两数求和
 * @param addend {number} 加数
 * @param augend {number} 被加数
 * @returns {number}
 * @version 0.0.2
 */
export function add(addend: number, augend: number): number {

	if (addend === 0) return augend
	if (augend === 0) return addend
	if (addend === -augend) return 0

	if (isDecimals(augend) || isDecimals(addend)) {
		const augendDecimalDigits = getDecimalDigits(augend)
		const addendDecimalDigits = getDecimalDigits(addend)
		const decimalDigits = augendDecimalDigits > addendDecimalDigits ? augendDecimalDigits : addendDecimalDigits
		const digits = Math.pow(10, decimalDigits)
		const augendTemp = augend * digits
		const addendTemp = addend * digits
		return (augendTemp + addendTemp) / digits
	}
	return augend + addend
}

/**
 * @title add
 * @description 多数求和
 * @param addends {...number[]} 加数
 * @returns {number}
 * @version 0.1.1
 */
export function adds(...addends: number[]): number {
	if (addends.length === 0) return 0
	if (addends.length === 1) return addends[0]
	return addends.reduce((prev: number, curr: number) => add(prev, curr))
}