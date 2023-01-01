import { UnitTest } from 'unit-testing-js'
import { isDecimals } from '..'

UnitTest(isDecimals)
	.addParamMap(
		[
			1.7976931348623157e+308,
			'1.7976931348623157e+308',
			1.7976931348623157e+2,
			'1.7976931348623157e+2',
		]
	)
	.setDefaultValue(true)
	.buildCases()
	.run()
