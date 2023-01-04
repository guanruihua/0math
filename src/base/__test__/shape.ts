import { UnitTest } from 'unit-testing-js'
import { primeNumber, compositeNumber } from '..'

UnitTest(primeNumber, 'primeNumber')
	.addParamMap([1, 2, 3, 4,])
	.setMapValues(
		[4], false,
		[1], false,
	)
	.setDefaultValue(true)
	.buildCases()
	.run();

UnitTest(compositeNumber, 'compositeNumber')
	.addParamMap([1, 2, 3, 4, 44, 43, 43 * 191,])
	.setMapValues(
		[44], true,
		[4], true,
		[43], false,
		[43 * 191], true,
	)
	.setDefaultValue(false)
	.buildCases()
	.run();