import { isEffectNumber } from 'check-it-type'
import { Itteratee } from '../type'
import { useValue } from '../util'

/**
 * @title min
 * @description 求最小值
 * @param list 要迭代的数组
 * @returns 最小值
 */
export function min(list: any[]): number | undefined {
  return minBy(list)
}

/**
 * @title minBy
 * @description 求最小值
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 最小值
 */
export function minBy(list: any[], itteratee?: Itteratee): any {

  if (list.length === 0) return undefined
  let result: any = undefined
  let minValue: number | undefined = undefined
  let len: number = list.length

  while (len--) {
    const val = Number(useValue(itteratee)(list[len]))
    if (isEffectNumber(val)) {
      if (minValue === undefined) {
        minValue = val
      } else minValue = minValue < val ? minValue : val
      result = list[len]
    }
  }

  return result
}