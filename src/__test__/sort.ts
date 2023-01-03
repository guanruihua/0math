import { UnitTest } from 'unit-testing-js'
import { sort } from '../sort'

UnitTest(sort)
	.addCases(
		{ params: [[1, 4, 3]], tobe: [1, 3, 4] },
		{ params: [[1, 4, 3], 'desc'], tobe: [4, 3, 1] },
	)
	// .buildCases()
	.run()