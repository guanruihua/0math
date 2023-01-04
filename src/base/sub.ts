import { add } from './add'

/**
 * @title sub
 * @description 两数求差
 * @param subtrahend {number} 减少数
 * @param minuend {number} 被减数
 * @returns {number}
 * @version 0.0.2
 */
export function sub(subtrahend: number, minuend: number): number {
	if (subtrahend === minuend) return 0
	return add(subtrahend, -minuend)
}