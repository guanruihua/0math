formatNum = function(f, digit) { 
    const m = Math.pow(10, digit)
    return parseInt(f * m, 10) / m
}

const num1 = 0.1
const num2 = 0.2

console.log(formatNum(num1 + num2, 1) === 0.3)