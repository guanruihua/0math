import { divide } from 'base'

/**
 * @title Pnm
 * @description 从m个人挑吹n个人的进行排列可能数
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
export function Pnm(n: number, m: number): number {
  let result = 1
  for (let i = 1; i <= m; i++) result *= i
  let dividend = 1
  for (let i = 1; i <= m - n; i++) dividend *= i

  return divide(result, dividend)
}

/**
 * @title Cnm
 * @description 从m个人挑吹n个人的进行组合可能数
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
export function Cnm(n: number, m: number): number {
  let result = 1
  for (let i = 1; i <= m; i++) result *= i
  let dividend = 1
  for (let i = 1; i <= n; i++) dividend *= i
  for (let i = 1; i <= m - n; i++) dividend *= i

  return divide(result, dividend)
}
