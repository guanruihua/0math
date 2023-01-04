import { isString, isNumber } from 'abandonjs'

/**
 * @title isDecimals
 * @description 判断是否为小数, 由于 1.7976931348623157e+308 和 1.7976931348623157e+3 带有e的数字 特殊性, 无法直接通过逗号的有无来判断
 * @param value 
 * @returns {boolean}
 */
export function isDecimals(value: unknown): boolean {
	if (isString(value)) return isNumber(Number(value)) && value.indexOf('.') > 0
	if (isNumber(value)) return value.toString().indexOf('.') > 0
	return false
}
