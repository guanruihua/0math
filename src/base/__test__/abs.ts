import { UnitTest } from 'unit-testing-js'
import { abs } from '..'

UnitTest(abs)
	.addParamMap([1, -1])
	.setDefaultValue(1)
	.buildCases()
	.run();