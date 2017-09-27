import { ReadonlyTuple2, mixed, ReadonlyArray2 } from "../src/wiinuk-extensions"

export const x: ReadonlyTuple2<number, boolean> = [0, false]
export const y: number = x[0]
export const z: boolean = x[1]
export const a: mixed = x[2]
export const xs: Iterable<mixed> = x
export const [_a, _b] = x
export const [_x, _y, _z] = xs

export const xs2: ReadonlyArray2<number> = [0, 1, 2]
export const x0: number = xs2[0]
export const x1: number = xs2[1]
export const x2: number | undefined = xs2[2]
export const [_x0, _y0] = xs2
