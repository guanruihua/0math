import { test, UnitTest } from 'unit-testing-js'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../../constants'
import { add, adds } from '..'
import * as _ from '..'

test(
  'bigAdd',
  _.bigAdd,
  { params: ['19', '-19'], tobe: '0' },
  { params: ['-19', '19'], tobe: '0' },
  { params: ['19', '-18'], tobe: '1' },
  { params: ['9', '-8'], tobe: '1' },
  { params: ['9.991e+5', 1], tobe: '999101' },
  { params: ['9.991e+5', '9.991e+5'], tobe: '1998200' },
  { params: ['9.991e+10', '9.991e+10'], tobe: '199820000000' },
)

test(
  'getNumStr',
  _.getNumStr,
  { params: ['9.991e+5'], tobe: '999100' },
  { params: [-19], tobe: '-19' },
  { params: ['-19'], tobe: '-19' },
  { params: ['-19e-0'], tobe: '-19' },
  { params: ['-19e+0'], tobe: '-19' },
  { params: ['-0.019e+3'], tobe: '-19' },
  { params: ['-19000.19e-3'], tobe: '-19.00019' },
  { params: ['-19000.19e-5'], tobe: '-0.1900019' },
  { params: ['-19000.19e-7'], tobe: '-0.001900019' },
  { params: ['-0.019e+3'], tobe: '-19' },
  { params: ['-0.019e-3'], tobe: '-0.000019' },
  { params: [19], tobe: '19' },
  { params: ['19'], tobe: '19' },
  { params: ['19e-0'], tobe: '19' },
  { params: ['19e+0'], tobe: '19' },
  { params: ['0.019e+3'], tobe: '19' },
  { params: ['19000.19e-3'], tobe: '19.00019' },
  { params: ['19000.19e-5'], tobe: '0.1900019' },
  { params: ['19000.19e-7'], tobe: '0.001900019' },
  { params: ['0.019e+3'], tobe: '19' },
  { params: ['0.019e-3'], tobe: '0.000019' },
  { params: ['19000e-3'], tobe: '19' },
  { params: ['+19000e-3'], tobe: '19' },
  { params: ['+00019000e-3'], tobe: '19' },
  { params: ['-000019000.0000e-3'], tobe: '-19' },
  { params: ['-000019000e-3'], tobe: '-19' },
  { params: ['-000019000.000e-3'], tobe: '-19' }
)

UnitTest(add)
  .addCases(
    // { params: [MAX_VALUES_NUMBER, MAX_VALUES_NUMBER], tobe: MAX_VALUES_NUMBER },
    // { params: [MAX_VALUES_NUMBER, INFINITY], tobe: MAX_VALUES_NUMBER },
    // { params: [MAX_VALUES_NUMBER, -INFINITY], tobe: 0 },
    { params: [INFINITY, -INFINITY], tobe: 0 },
    { params: [0.001, 0.0003], tobe: 0.0013 },
    { params: [1, 0.00003], tobe: 1.00003 },
    { params: [0.1, 0.00003], tobe: 0.10003 }
  )
  .addParamMap([1, 3], [1, 2])
  .setIndexValues({
    0: 2,
    1: 3,
    2: 4,
    3: 5
  })
  .buildCases()
  .run()

UnitTest(adds)
  .addCases(
    { params: [0, 0], tobe: 0 },
    { params: [0, 1, 2, 3], tobe: 6 },
    { params: [1], tobe: 1 },
    { params: [33, 44], tobe: 77 }
  )
  .run()
