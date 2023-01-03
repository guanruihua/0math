import { isDecimals } from '../is'
import { getDecimalDigits } from '../util'
/**
 * @title divide
 * @description 相除(不支持超过`number`类型的精度)
 * @param divisor {number} 除数
 * @param dividend {number} 被除数
 * @param precision {?number} 精确度
 * @returns {number} 商 
 * @version 0.0.2
 */
export function divide(divisor: number, dividend: number, precision?: number): number {
  if (divisor === 0) return 0
  // if (dividend === 0) return divisor > 0 ? Infinity : -Infinity
  if (dividend === divisor) return 1
  if (dividend === -divisor) return -1

  // if (divisor >= MAX_VALUES_NUMBER || dividend <= MIN_VALUES_NUMBER) return 0

  let baseDigits = 1

  if (isDecimals(dividend) || isDecimals(divisor)) {
    const dividendDecimalDigits = getDecimalDigits(dividend)
    const divisorDecimalDigits = getDecimalDigits(divisor)
    const decimalDigits = dividendDecimalDigits > divisorDecimalDigits ? dividendDecimalDigits : divisorDecimalDigits
    baseDigits = Math.pow(10, decimalDigits)
  }

  if (precision !== undefined) {
    const digits = Math.pow(10, precision)
    const result = (divisor * digits * baseDigits) / (dividend * baseDigits)
    return Math.trunc(result) / digits
  }

  return (divisor * baseDigits) / (dividend * baseDigits)
}