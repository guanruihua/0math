import { UnitTest, test } from 'unit-testing-js'
import { add, divide } from '..'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

UnitTest(add)
	.addCases(
		// { params: [MAX_VALUES_NUMBER, MAX_VALUES_NUMBER], tobe: MAX_VALUES_NUMBER },
		// { params: [MAX_VALUES_NUMBER, INFINITY], tobe: MAX_VALUES_NUMBER },
		// { params: [MAX_VALUES_NUMBER, -INFINITY], tobe: 0 },
		{ params: [INFINITY, -INFINITY], tobe: 0 },
		{ params: [0.001, 0.0003], tobe: 0.0013 },
		{ params: [1, 0.00003], tobe: 1.00003 },
		{ params: [0.1, 0.00003], tobe: 0.10003 },
	)
	.addParamMap(
		[1, 3],
		[1, 2],
	).setIndexValues({
		0: 2,
		1: 3,
		2: 4,
		3: 5
	})
	.buildCases()
	.run()

test('divide', divide,
	{ params: [3, 1], tobe: 3 },
	{ params: [3, 3], tobe: 1 },
	{ params: [3, 2], tobe: 1.5 },
	{ params: [3, 4], tobe: 0.75 },
	{ params: [3, 5], tobe: 0.6 },
	{ params: [3, 9], tobe: 1 / 3 },
	{ params: [6, 4], tobe: 1.5 },
	{ params: [MAX_VALUES_NUMBER, 4], tobe: MAX_VALUES_NUMBER / 4 },
	{ params: [Infinity, 4], tobe: MAX_VALUES_NUMBER / 4 },
	{ name: '0-1', params: [1, INFINITY], tobe: 0 },
	{ name: '0-2', params: [1, -INFINITY], tobe: 0 },
)