import { UnitTest } from 'unit-testing-js'
import { getDecimalDigits } from '..'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'

UnitTest(getDecimalDigits)
	.setDefaultValue(0)
	.addParamMap(
		[
			1.7976931348623157e+308,
			'1.7976931348623157e+308',
			1.7976931348623157e+2,
			'1.7976931348623157e+2',
			1.7976,
			'1.7976',
			1.7976931348623157e-308,
			INFINITY,
			MAX_VALUES_NUMBER,
			MIN_VALUES_NUMBER
		]
	)
	.setIndexValues({
		2: 14,
		3: 14,
		4: 4,
		5: 4,
		6: 324
	})
	.setDefaultValue(0)
	.buildCases()
	.run()