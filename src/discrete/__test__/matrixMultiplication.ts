import { UnitTest } from 'unit-testing-js'
import { matrixMultiplication } from '..'


UnitTest(matrixMultiplication)
	.addCases(
		{ params: [], tobe: [], },
		{
			params: [
				[2],
				[3]
			], tobe: [],
		},
		{
			params: [
				[[2]],
				[[3]]
			], tobe: [[6]],
		},
		{
			params: [
				[1],
				[1]
			], tobe: [],
		},
		{
			params: [
				[
					[1, 2, 3],
					[2, 3, 4]
				],
				[
					[1, 2],
					[2, 3],
					[3, 4]
				],
			],
			tobe: [
				[1 + 4 + 9, 2 + 6 + 12],
				[2 + 6 + 12, 4 + 9 + 16]
			]
		}

	)
	.run()