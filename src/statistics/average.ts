import { add } from '../base'

/**
 * @title average
 * @description 平均数
 * @param ...args {number[]}
 * @returns {number}
 * @version 0.0.2
 */
export const average = (...args: number[]) => args.reduce((a, b) => add(a, b)) / args.length