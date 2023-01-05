/**
 * @title random
 * @description 随机数
 * @param min {number}
 * @param max {number} 不包含
 * @returns {number}
 */
export function random(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
