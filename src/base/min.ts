import { isEffectNumber, isString } from 'asura-eye'
import { max_a2b } from './max'

/**
 * @title min
 * @description 求最小值
 * @param list 要迭代的数组
 * @returns 最小值
 */
export function min(list: any[]): number | string | undefined {
  if (list.length === 0) return undefined
  let value: number | undefined = undefined
  let len: number = list.length
  const noNum = (val: any): boolean => {
    if (isEffectNumber(val)) return false
    if (isString(val) && /[+-]?\d+\.?\d+?/gi.test(val)) return false
    return true
  }
  while (len--) {
    const val = list[len]
    if (noNum(val)) {
      continue
    }
    if (value === undefined) {
      value = val
      continue
    }
    if (max_a2b(value, val)) {
      value = val
    }
  }

  return value
}
