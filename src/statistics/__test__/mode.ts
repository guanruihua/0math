import { UnitTest } from 'unit-testing-js'
import { mode } from '..'

UnitTest(mode)
	.addCases(
		{ param: [1, 2, 3, 0], tobe: null },
		{ param: [1, 2, 3, 3, 3, 3, 2, 1, 0], tobe: 3 },
		{ param: [1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 0], tobe: [2, 3] },

	)
	.run()