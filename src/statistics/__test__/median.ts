import { UnitTest } from 'unit-testing-js'
import { median } from '..'

UnitTest(median)
	.addCases(
		{ param: [], tobe: null },
		{ param: [1], tobe: 1 },
		{ param: [1, 2], tobe: 1.5 },
		{ param: [1, 2, 3, 0], tobe: 1.5 },
		{ param: [1, 2, 3, 3, 3, 3, 2, 1, 0], tobe: 2 },
		{ param: [1, 2, 3, 3, 3, 3, 12, 12, 12], tobe: 3 },
	)
	.run()