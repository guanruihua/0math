type Order = 'asc' | 'desc'

export function sort(list: number[], order: Order = 'asc'): number[] {
	if (order === 'desc') return list.sort((a, b) => b - a)
	return list.sort((a, b) => a - b)
}