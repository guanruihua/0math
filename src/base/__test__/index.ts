import { UnitTest, test } from 'unit-testing-js'
import { add, divide, multiply, sub } from '..'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../../constants'

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

UnitTest(divide)
	.addCases(
		{ params: [0, Infinity], tobe: 0 },
		{ params: [Infinity, 0], tobe: Infinity },
		{ params: [-Infinity, 0], tobe: -Infinity },
		{ params: [3, 1], tobe: 3 },
		{ params: [3, 3], tobe: 1 },
		{ params: [3, 2, 1], tobe: 1.5 },
		{ params: [3, 4, 2], tobe: 0.75 },
		{ params: [3, 5, 1], tobe: 0.6 },
		{ params: [3, 9, 3], tobe: 0.333 },
		{ params: [6, 4, 1], tobe: 1.5 },
		{ params: [MAX_VALUES_NUMBER, 4], tobe: MAX_VALUES_NUMBER / 4 },
		{ params: [Infinity, 4], tobe: Infinity },
		{ params: [1, INFINITY], tobe: 0 },
		{ params: [1, -INFINITY], tobe: 0 },
		{ params: [0.1, 0.3, 4], tobe: 0.3333 },
		{ params: [0.1, 0.3, 2], tobe: 0.33 },
	)
	.addParamMap(
		[2],
		[1]
	)
	.setIndexValues({
		0: 2
	})
	// .setDefaultValue(1)
	.buildCases()
	// .log('cases')
	.run()

test('multiply', multiply,
	{ params: [110, 4], tobe: 440 },
)

test('sub', sub,
	{ params: [3, 1], tobe: 2 }
)