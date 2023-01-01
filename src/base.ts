import { toNumber } from 'abandonjs'
import { isDecimals } from './is'
import { getDecimalDigits } from './util'
import { MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from './constants'

/**
 * @title add
 * @description 两数求和(不支持超过js`number`类型的精度)
 * @param augend number 加数
 * @param addend number 被加数
 * @returns number ( 不会超过数字的边界值 1.7976931348623157e+308 )
 */
export function add(augend: number, addend: number): number {

  if ((augend === Infinity && addend === -Infinity) ||
    (augend === -Infinity && addend === Infinity)) return 0
  if (augend === Infinity || addend === Infinity) return Infinity

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
 * @title divide
 * @description 相除
 * @param dividend number 除数
 * @param divisor number 被除数
 * @returns number 商 
 */
export function divide(dividend: number, divisor: number): number {
  if (divisor >= MAX_VALUES_NUMBER || divisor <= MIN_VALUES_NUMBER) return 0
  return toNumber(dividend) / toNumber(divisor)
}