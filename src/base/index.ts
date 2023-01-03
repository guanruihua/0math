import { toNumber } from 'abandonjs'
import { isDecimals } from '../is'
import { getDecimalDigits } from '../util'

/**
 * @title add
 * @description 两数求和
 * @param addend {number} 加数
 * @param augend {number} 被加数
 * @returns {number}
 * @version 0.0.2
 */
export function add(addend: number, augend: number): number {

  if (addend === 0) return augend
  if (augend === 0) return addend

  if (isDecimals(augend) || isDecimals(addend)) {
    const augendDecimalDigits = getDecimalDigits(augend)
    const addendDecimalDigits = getDecimalDigits(addend)
    const decimalDigits = augendDecimalDigits > addendDecimalDigits ? augendDecimalDigits : addendDecimalDigits
    const digits = Math.pow(10, decimalDigits)
    const augendTemp = augend * digits
    const addendTemp = addend * digits
    return (augendTemp + addendTemp) / digits
  }
  return toNumber(toNumber(augend) + toNumber(addend))
}

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