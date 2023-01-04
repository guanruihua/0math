/**
 * @title multiply
 * @description 两数相乘
 * @param multiplier {number} 乘数
 * @param multiplicand {number} 被乘数
 * @returns {number} 积
 */
export function multiply(multiplier: number, multiplicand: number): number {
  if (multiplicand === 0 || multiplier == 0) return 0
  if (multiplier === 1) return multiplicand
  if (multiplicand === 1) return multiplier
  return multiplier * multiplicand
}