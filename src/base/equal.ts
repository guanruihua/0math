/**
 * @title equal
 * @description 指定误差内相等
 * @param compare {number} 比较数
 * @param compared {number} 被比较数
 * @param float {?number=0.1} 误差
 * @returns boolean
 */
export function equal(compare: number, compared: number, float = 0.1): boolean {
	return Math.abs(compare - compared) <= float
}