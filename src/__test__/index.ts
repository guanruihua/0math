import './base'
import './is'
import './getDecimalDigits'

import * as _ from '..'
import { test } from 'unit-testing-js'

test('ceil', _.ceil,
  { params: [3.1245], tobe: 4 },
  { params: [13.1245], tobe: 14 },
  { params: [0.1245], tobe: 1 },
  { params: [4.006], tobe: 5 },
  { params: [6.004, 2], tobe: 6.01 },
  { params: [6040, -2], tobe: 6100 },
  { params: [6040111, -2], tobe: 6040200 },
)

test('floor', _.floor,
  { params: [3.1245], tobe: 3 },
  { params: [13.1245], tobe: 13 },
  { params: [0.1245], tobe: 0 },
  { params: [4.006], tobe: 4 },
  { params: [6.004, 2], tobe: 6.00 },
  { params: [6040, -2], tobe: 6000 },
  { params: [6040111, -2], tobe: 6040100 },
)

test('max', _.max,
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912']], tobe: 9999999912 },
)

test('maxBy', _.maxBy,
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555]], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, 'fjsdkfjksdjf']], tobe: 99999999 },
  { params: [[1, 4, 5, 2, 99999999, 3, 1, 100, 5555555, '', '9999999912']], tobe: 9999999912 },
  { params: [[{ a: 1 }, { b: 3 }], 'a'], tobe: { a: 1 } },
)

test('mean', _.mean,
  { params: [[1, 4, 5, 10, 100]], tobe: 24 },
  { params: [[1, 4, 10, 100, 'fjsdkfjksdjf']], tobe: 23 },
)

test('meanBy', _.meanBy,
  { params: [[1, 4, 5, 10, 100]], tobe: 24 },
  { params: [[1, 4, 10, 100, 'fjsdkfjksdjf']], tobe: 23 },
)



test('min', _.min,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 1 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: undefined },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: undefined },
)

test('minBy', _.minBy,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 1 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 1 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: undefined },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: { a: 123 } },
)

test('sum', _.sum,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 10000000028 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }]], tobe: 0 },
)

test('sumBy', _.sumBy,
  { params: [[1, 4, 5, 2, 3, 1, 100]], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, 'fjsdkfjksdjf']], tobe: 116 },
  { params: [[1, 4, 5, 2, 3, 1, 100, '', '9999999912']], tobe: 10000000028 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }]], tobe: 0 },
  { params: [[{ a: 123 }, { a: 999 }, { a: 111333 }], 'a'], tobe: 112455 },
)


test('multiply', _.multiply,
  { params: [110, 4], tobe: 440 },
)