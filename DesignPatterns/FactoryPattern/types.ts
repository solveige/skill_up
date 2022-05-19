export const positions = ['developer', 'manager'] as const

export type Positions = typeof positions[number]