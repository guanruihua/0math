import { getNumStr, trimZero } from './getNumStr'
/**
 * @title bigAdd
 * @description 两数求和
 * @param {number|string} addend 加数
 * @param {number|string} augend 被加数
 * @returns {string}
 * @version 0.0.2
 */
export function bigAdd(addend: number | string, augend: number | string): string {
  const run = (a: string, b: string) => {
    let aNeg = 1
    let bNeg = 1
    if (a[0] === '-') {
      aNeg = -1
      a = a.slice(1)
    }
    if (b[0] === '-') {
      bNeg = -1
      b = b.slice(1)
    }

    const toList = (val: string) => {
      return val.split('')
    }

    const ar = toList(a)
    const br = toList(b)
    const aLen = ar.length
    const bLen = br.length
    const minLen = aLen > bLen ? aLen : bLen
    const maxItem = aLen > bLen ? 'a' : 'b'
    const list: (string | number)[] = aLen > bLen ? ar : br

    // 进位
    let carry = 0
    for (let i = 1; i < minLen + 1; i++) {
      const aiNum = Number(ar[aLen - i]) || 0
      const biNum = Number(br[bLen - i]) || 0

      const sum = aiNum * aNeg + biNum * bNeg + carry
      const newIndex = maxItem === 'a' ? aLen - i : bLen - i
      if (sum > 9) {
        carry = 1
        list[newIndex] = sum % 10
        continue
      }
      list[newIndex] = sum
      carry = 0
    }
    if (carry) {
      list.unshift(carry)
    }
    return trimZero(list.join(''))
  }

  const addendVal: string = getNumStr(addend)
  const augendVal: string = getNumStr(augend)

  if (addendVal === '0') return augendVal
  if (augendVal === '0') return addendVal
  if (addendVal === '-' + augendVal) return '0'
  if ('-' + addendVal === augendVal) return '0'

  return run(addendVal, augendVal)
}
