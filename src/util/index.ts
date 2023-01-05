export * from './sort'
export * from './is'
import { isEffectNumber, isNumber, isString, type } from 'check-it-type'
import { Itteratee, NumberLike } from '../type'
import { isDecimals } from './is'
import { INFINITY } from '../constants'

/**
 * @title getDecimalDigits
 * @description 获取小数点位数
 * @param value {NumberLike}
 * @returns {number}
 */
export function getDecimalDigits(value: NumberLike): number {
  if (value === INFINITY) return 0
  if (!isDecimals(value)) return 0

  const tempValue = isString(value) ? value : (value).toString()
  if (!isString(tempValue)) return 0

  if (tempValue.indexOf('e') !== -1) {
    // 获取底数和指数
    const [baseNum, indexNum] = tempValue.split('e')

    const result = baseNum.length - baseNum.indexOf('.') - 1 - Number(indexNum)
    if (result > 0) return result
    return 0
  }

  return tempValue.length - tempValue.indexOf('.') - 1
}

/**
 * @ 无限大（小）当做 js Number 的最大（小）值[主要处理计算异常的问题, 二期再加入大位数处理]
 * @ 二期再加入大位数计算
 */

const __binary: string[] = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B']
/**
 * @title HEX
 * @description 将数字装换成需要装换的数据格式(k, m, g, t, p, e, z, y, b)
 * @param num (number|string) 待转换的数子 (<binary^ 9)
 * @param binary (number) 进制 (default:1024)
 * @returns (number)
 */
export function toHEX(
  num: number | string,
  binary = 1024
): string {
  let result = ''
  let tempNum = Number(num)
  if (num > binary ** 9) return '1024B'
  const index = 0

  function translate(index: number): void {
    const _index_num: number = tempNum % binary
    tempNum = (tempNum - _index_num) / binary
    if (_index_num > 0) result = _index_num + __binary[index] + result
    if (tempNum < 1) return
    translate(++index)
  }
  translate(index)
  return result
}

/**
 * @title mean
 * @description 求平均值
 * @param list 要迭代的数组
 * @returns 平均值
 */
export function mean(list: any[]): number | undefined {
  return sum(list) / list.length
}

/**
 * @title meanBy
 * @description 求平均数
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 平均数
 */
export function meanBy(list: any[], itteratee?: Itteratee): any {

  return list.reduce((total = 0, item) => {
    const itemNum = Number(useValue(itteratee)(item))
    if (isNumber(itemNum)) {
      return total + itemNum
    }
    if (isNumber(total)) {
      return total
    }
    return 0
  }) / list.length
}

/**
 * @title sum
 * @description 求和
 * @param list 要迭代的数组
 * @returns 总和
 * @version 2.2.3
 */
export function sum(list: any[] = []): number {
  return list.reduce((total = 0, item) => {
    const itemNum = Number(item)
    if (isNumber(itemNum)) {
      return total + itemNum
    }
    if (isNumber(total)) {
      return total
    }
    return 0
  })
}
/**
 * @title sumBy
 * @description 求和
 * @param list 要迭代的数组
 * @param itteratee 迭代函数 / key
 * @returns 总和
 */
export function sumBy(list: any[], itteratee?: Itteratee): undefined | number {
  if (list.length === 0) return undefined
  let total: undefined | number = 0
  let len: number = list.length
  while (len--) {
    const val = Number(useValue(itteratee)(list[len]))
    if (isEffectNumber(val)) {
      if (total === undefined) total = 0
      total += val
    }
  }
  return total
}

export function useValue(itteratee?: Itteratee): any {
  const __type: string = type(itteratee)

  return function (val: any): any {
    if (__type === 'String') return val[itteratee as string]
    if (__type === 'Function') return (itteratee as (val: any) => any)(val)
    return val
  }
}