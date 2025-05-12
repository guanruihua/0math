import { read } from '0file-system'

console.clear()
const txt = read('./src/util', { dataMerge: true })
// const txt = read('./src', { tree: false, dataMerge: true })

const regex = /\/\*\*(.*?)\*\//gs
const m = txt.match(regex).map((item: string) => {
  const res: string[] = []
  item.split('* @').forEach((row: string) => {
    const reg = /^[a-zA-z]/
    if (!reg.test(row)) {
      // console.log(row)
      return
    }
    res.push(row)
  })

  return res
})

console.log(m[0])

// console.log(txt)
// import('../src').then((res) => {
//   // console.log(Object.keys(res))
// })
