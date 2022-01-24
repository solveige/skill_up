export const positions = ['developer', 'tester'] as const

export type Positions = typeof positions[number]