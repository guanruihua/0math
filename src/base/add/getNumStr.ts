import { isNumber } from 'abandonjs'
import { isString } from 'asura-eye'

export const getNumConfig = (value: string) => {
  let str: string = isString(value) ? value : String(value)

  const [originBase = '0', originIndex = '0'] = str.split('e')

  // 底数正负
  let baseNeg = '+'
  // 底数
  let base = originBase
  // 底数整数部分
  let baseIntegerPart = originBase
  // 底数小数部分
  let baseDecimalPart = ''

  // 指数正负
  let indexNeg = '+'
  // 指数
  let index = originIndex

  if (originBase.indexOf('+') == 0 || originBase.indexOf('-') == 0) {
    baseNeg = originBase.slice(0, 1) || '+'
    base = originBase.slice(1) || '0'
    baseIntegerPart = originBase.slice(1) || '0'
    // .replace(/^0+|0+$/gi, '') || '0'
    // baseIntegerPart = originBase.slice(1).replace(/^0+|0+$/gi, '') || '0'
    // console.log(baseIntegerPart)
  }
  if (baseIntegerPart.indexOf('.') > -1) {
    const list = baseIntegerPart.split('.')
    baseIntegerPart = list[0] || '0'
    baseDecimalPart = list[1] || '0'
  }

  if (originIndex.indexOf('+') == 0 || originIndex.indexOf('-') == 0) {
    indexNeg = originIndex.slice(0, 1) || '+'
    index = originIndex.slice(1) || '0'
  }

  return {
    // 底数正负
    baseNeg,
    // 底数
    base,
    // 底数整数部分
    baseIntegerPart,
    // 底数整数部分(位数)
    baseIntegerPartLen: baseIntegerPart.length,
    // 底数小数部分
    baseDecimalPart,
    // 底数小数(位数)
    baseDecimalPartLen: baseDecimalPart.length,
    // 指数正负
    indexNeg,
    // 指数
    index,
    // 指数(number)
    indexNum: indexNeg === '-' ? -Number(index) : Number(index)
  }
}
export const trimZero = (value: string | number) => {
  let val = isNumber(value) ? String(value) : value
  let neg: string | undefined = undefined
  if (['-', '+'].includes(val[0])) {
    neg = val.slice(0, 1)
    val = val.slice(1)
  }
  if (val[0] === '0' && val[1] !== '.') {
    val = val.replace(/^0+/gi, '')
  }
  if (/\.0+$/.test(val)) {
    val = val.replace(/\.0+$/gi, '')
  }
  if (neg === '-') {
    return neg + val
  }
  return val
}

export const getNumStr = (value: string | number) => {
  let str: string = isString(value) ? value : String(value)

  if (str.indexOf('e') === -1) return str
  const _ = getNumConfig(str)
  const { baseNeg, base, indexNum, indexNeg } = _
  if (indexNum === 0) {
    if (baseNeg === '-') return baseNeg + base
    return base
  }

  if (indexNeg === '-') {
    const bases = base.replace('.', '').split('')
    const newIndex = _.baseIntegerPartLen + _.indexNum
    if (bases[newIndex - 1]) {
      bases[newIndex - 1] += '.'
    } else {
      let i = -newIndex
      while (i--) {
        bases.unshift('0')
      }
      bases.unshift('0.')
    }
    const tempVal = trimZero(bases.join(''))
    if (baseNeg === '-') return baseNeg + tempVal
    return tempVal
  }

  const getList = () => {
    if (base.indexOf('.') > -1) {
      return new Array(indexNum + base.indexOf('.')).fill('0')
    }
    return new Array(indexNum + base.length).fill('0')
  }
  const list = getList()
  base
    .replace('.', '')
    .split('')
    .forEach((v, i) => {
      list[i] = v
    })
  const tempVal = trimZero(list.join(''))
  if (baseNeg === '-') return baseNeg + tempVal
  return tempVal
}
