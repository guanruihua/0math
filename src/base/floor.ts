/**
 * @title floor
 * @description 向下取整(没有对number边界值[Infinity值处理])
 * @param num 待向下舍入的值
 * @param precision 精度 (负数就是处理整数部分)
 * @returns 向下取整
 */
export function floor(num: number, precision = 0): number {
	return (
		Math.floor(num * (10 ** precision)) * (10 ** -precision)
	)
}

/**
 * @title round
 * @description 四舍五入后最接近的整数
 * @param value {number}
 * @returns {number}
 */
export function round(value: number): number {
	return Math.round(value)
}

/**
 * @title trunc
 * @description 去除小数部分
 * @param value {number}
 * @returns {number}
 */
export function trunc(value:number):number{
	return Math.trunc(value)
}