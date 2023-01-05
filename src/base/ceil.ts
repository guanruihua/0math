/**
 * @title ceil
 * @description 四舍五入, 向上取整的值(没有对number边界值[Infinity值处理])
 * @param num {number} 要向上舍入的值
 * @param precision {number=0} 精度(负数就是想整数部分取整)
 * @returns {number}
 */
export function ceil(num: number, precision = 0): number {
	return Math.ceil(num * 10 ** precision) * (10 ** -precision)
}