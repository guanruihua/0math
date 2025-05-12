import { isString, type } from 'asura-eye'

export interface Cfg {
  origin: any
  type: string
  /**
   * 正数
   */
  positive: boolean
  /**
   * 整数数
   */
  integer: string
  /**
   * 小数
   */
  fraction?: string | undefined
}

/**
 * @title getCfg
 * @param {any} value
 * @returns {Cfg}
 * @supported '-99999999999999991111111111111111111.00001'
 * @unsupported 科学计数法
 */
export const getCfg = (value: any): Cfg => {
  const cfg: Cfg = {
    origin: value,
    type: type(value),
    positive: true,
    integer: '0',
    fraction: undefined,
  }
  if (!isString(value)) {
    value = String(value)
  }
  const list = /([+-])?(\d+)(\.)?(\d+)?/gi.exec(value) || []

  cfg.positive = list.at(1) !== '-'
  const integer = list.at(2)?.replace(/^0+/, '') || ''
  cfg.integer = integer
  const fraction = list.at(4)
  cfg.fraction = fraction
  return cfg
}