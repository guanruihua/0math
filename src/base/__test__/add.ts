import { test, UnitTest } from 'unit-testing-js'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../../constants'
import { add, adds } from '..'

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

UnitTest(adds)
	.addCases(
		{ params: [0, 0], tobe: 0 },
		{ params: [0, 1, 2, 3], tobe: 6 },
		{ params: [1], tobe: 1 },
		{ params: [33, 44], tobe: 77 },
	)
	.run()