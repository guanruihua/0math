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