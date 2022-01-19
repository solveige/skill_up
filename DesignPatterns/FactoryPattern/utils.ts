type Enum = { [s: string]: string }

export function isEnumValue<T extends Enum>(enumSrc: T, value: unknown): value is T[keyof T] {
	return Number.isInteger(enumSrc[enumSrc[value as keyof T] as any as keyof T]);
}