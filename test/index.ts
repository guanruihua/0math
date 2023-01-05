import { loadModule, TestSetting } from 'unit-testing-js'

TestSetting.set('isSummary', true)

function runTest() {
  loadModule(async () => {
    await import(`../src/__test__`)
    await import(`../src/statistics/__test__`)
    await import(`../src/base/__test__`)
    await import(`../src/trigonometric/__test__`)
  })
}

runTest()