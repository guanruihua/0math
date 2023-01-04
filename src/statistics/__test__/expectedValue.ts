import { UnitTest } from 'unit-testing-js'
import { expectedValue } from '..'

UnitTest(expectedValue)
	.addCases(
		{ param: [], tobe: 0 },
		{
			param: [
				[3, 0.1],
				[2, 0.2],
				[1, 0.3],
			], tobe: 1
		},
	)
	.run()