import { isEffectNumber, isString } from 'asura-eye'
import { getCfg, Cfg } from './util'

/**
 * @title maxAB
 * @description a 比 b 大
 */
export function max_a2b(a: any, b: any): boolean {
  const A: Cfg = getCfg(a)
  const B: Cfg = getCfg(b)

  if (A.type === 'Number' && A.type === B.type) return a > b

  if (A.positive && !B.positive) return true
  if (!A.positive && B.positive) return false

  if (A.integer.length > B.integer.length) return A.positive === true
  if (A.integer.length < B.integer.length) return A.positive === false

  if (A.integer === B.integer && A.fraction === B.fraction) {
    return false
  }
  const getNum = (str: string, i: number) => Number(str.slice(i, i + 15))

  for (let i = 0; i < A.integer.length; i += 15) {
    const av = getNum(A.integer, i)
    const bv = getNum(B.integer, i)
    if (av === bv) continue
    if (A.positive === false) return av < bv
    return av > bv
  }
  if (A.fraction && A.fraction !== '0' && !B.fraction) return A.positive === true
  if (!A.fraction && B.fraction && B.fraction !== '0') return A.positive === false

  if (A.fraction && B.fraction)
    for (let i = 0; i < A.fraction.length; i += 15) {
      const av = getNum(A.fraction, i)
      const bv = getNum(B.fraction, i)
      if (av === bv) continue
      if (A.positive === false) return av < bv
      return av > bv
    }
  return false
}

/**
 * @title max
 * @description 求最大值(只会判断有效值), 只会统计number | string类型的数值
 * @param list 数组
 * @returns 最大值
 */
export function max(list: any[]): number | undefined {
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
    if (max_a2b(val, value)) {
      value = val
    }
  }

  return value
}
