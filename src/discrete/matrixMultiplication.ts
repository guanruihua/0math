import { multiply, add } from '../base'

export type MatrixConstant = number[][]

/**
 * @title matrixMultiplication
 * @description 矩阵连乘
 * @param matrixMultiplier {MatrixConstant=[]} 矩阵乘数
 * @param matrixMultiplicand {MatrixConstant=[]} 被矩阵乘数
 */
export function matrixMultiplication(
	matrixMultiplier: MatrixConstant = [],
	matrixMultiplicand: MatrixConstant = []
) {
	if (matrixMultiplicand.length < 1) return []
	if (!Array.isArray(matrixMultiplicand[0])) return []
	if (!Array.isArray(matrixMultiplier[0])) return []
	/*** 有效性判断 start ***/
	const matrixMultiplierColSize = matrixMultiplier.length
	const matrixMultiplierRowSize = matrixMultiplier[0].length
	const matrixMultiplicandColSize = matrixMultiplicand.length
	const matrixMultiplicandRowSize = matrixMultiplicand[0].length
	if(
		matrixMultiplierColSize!==matrixMultiplicandRowSize
		|| matrixMultiplierRowSize!==matrixMultiplicandColSize
		){
		console.error('The format of Matrix Multiplier and Matrix Multiplicand does not meet the requirements')
		return []
	}
	/*** 有效性判断 end ***/

	const matrixMultiplicandSize = matrixMultiplicand[0].length

	return matrixMultiplier.map((matrixMultiplierUnit) => {
		const result = new Array(matrixMultiplicandSize).fill(0)
		for (let colIndex = 0; colIndex < matrixMultiplicandSize; colIndex++) {
			let total = 0
			matrixMultiplierUnit.forEach((target = 0, index) => {
				total = add(total, multiply(target, matrixMultiplicand[index][colIndex]))
			})
			result[colIndex] = total
		}
		return result
	})
}