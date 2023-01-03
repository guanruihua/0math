import { loadModule, TestSetting } from 'unit-testing-js'
// npm run dev --modules=要运行的模块名(new)

TestSetting.set('isSummary', true)

function runTest() {
  loadModule(async () => {
    await import(`../src/__test__`)
    await import(`../src/statistics/__test__`)
  })
}

runTest()