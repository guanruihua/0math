import { UnitTest, } from 'unit-testing-js'
import { divide, multiply, sub } from '..'

UnitTest(v => v, 'combine')
	.addCases(
		{ param: multiply(divide(1, 3), 3), tobe: 1 }
	)
	.run()
