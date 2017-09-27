export const enum CodePoint {
    Min = 0x0000,
    AsciiMax = 0x007F,
    Latin1Max = 0x00FF,
    BmpMax = 0xFFFF,
    Max = 0x10FFFF,

    /** \u0007 "\a" */
    BELL = 0x0007,
    /// \b
    "\b" = 0x0008,
    /// \t <TAB>
    "\t" = 0x0009,
    /// \n <LF>
    "\n" = 0x000A,
    /// \v <VT>
    "\v" = 0x000B,
    /// \f <FF>
    "\f" = 0x000C,
    /// \r <CR>
    "\r" = 0x000D,
    /// " " <SP>
    " " = 0x0020,

    '"' = 0x0022,
    "#" = 0x0023,
    "'" = 0x0027,
    "-" = 0x002D,
    "." = 0x002E,
    "/" = 0x002F,
    "*" = 0x002A,
    _0 = 0x0030,
    _9 = 0x0039,
    A = 0x0041,
    X = 0x0058,
    Z = 0x005A,
    "\\" = 0x005C,
    a = 0x0061,
    b = 0x0062,
    f = 0x0066,
    n = 0x006E,
    r = 0x0072,
    t = 0x0074,
    u = 0x0075,
    v = 0x0076,
    x = 0x0078,
    y = 0x0079,
    z = 0x007A,

    /// \u0085 <NEL>
    NEXT_LINE = 0x0085,
    /// \u00A0 <NBSP>
    NO_BREAK_SPACE = 0x00A0,
    /// \u1680
    OGHAM_SPACE_MARK = 0x1680,
    /// \u2000
    EN_QUAD = 0x2000,
    /// \u2001
    EM_QUAD = 0x2001,
    /// \u2002
    EN_SPACE = 0x2002,
    /// \u2003
    EM_SPACE = 0x2003,
    /// \u2004
    THREE_PER_EM_SPACE = 0x2004,
    /// \u2005
    FOUR_PER_EM_SPACE = 0x2005,
    /// \u2006
    SIX_PER_EM_SPACE = 0x2006,
    /// \u2007
    FIGURE_SPACE = 0x2007,
    /// \u2008
    PUNCTUATION_SPACE = 0x2008,
    /// \u2009
    THIN_SPACE = 0x2009,
    /// \u200A
    HAIR_SPACE = 0x200A,
    /// \u2028 <LS>
    LINE_SEPARATOR = 0x2028,
    /// \u2029 <PS>
    PARAGRAPH_SEPARATOR = 0x2029,
    /// \u202F
    NARROW_NO_BREAK_SPACE = 0x202F,
    /// \u205F
    MEDIUM_MATHEMATICAL_SPACE = 0x205F,
    /// \u3000
    IDEOGRAPHIC_SPACE = 0x3000,
    
    SurrogateMin = 0xD800,
    HighSurrogateMin = SurrogateMin,
    HighSurrogateMax = 0xDBFF,
    LowSurrogateMin = 0xDC00,
    SurrogateMax = 0xDFFF,
    LowSurrogateMax = SurrogateMax,

    /// \uFEFF <BOM>
    ZERO_WIDTH_NO_BREAK_SPACE = 0xFEFF,
    /// \uFFFD
    REPLACEMENT_CHARACTER = 0xFFFD,
}
export const enum Int32 {
    Min = -2147483648,
    Zero = 0,
    Max = 2147483647,
}
export const enum UInt32 {
    Min = 0,
    Zero = 0,
    Max = 0xFFFFFFFF,
}
export type primitive = boolean | number | string | null | undefined
export type mixed = null | undefined | {}

export type Nullable<T extends undefined | {}> = T | null
export type Optional<T extends {} | null> = T | undefined

export type Tuple1<T1> = [T1]
export type Tuple2<T1, T2> = [T1, T2]
export interface ReadonlyTuple1<T1> extends ReadonlyArray<mixed> {
    readonly 0: T1
}
export interface ReadonlyTuple2<T1, T2> extends ReadonlyArray<mixed> {
    readonly 0: T1
    readonly 1: T2
}

export interface Array1<T> extends Tuple1<T>, Array<T> { }
export interface Array2<T> extends Tuple2<T, T>, Array<T> { }

export interface ReadonlyArray1<T> extends ReadonlyArray<T> {
    readonly 0: T
}
export interface ReadonlyArray2<T> extends ReadonlyArray<T> {
    readonly 0: T
    readonly 1: T
}

export namespace String {
    export function codePoints(string: string) {
        const chars = []
        for (let i = 0; i < string.length;) {
            const char = string.codePointAt(i) as CodePoint
            chars.push(char)
            i += char <= CodePoint.BmpMax ? 1 : 2
        }
        return chars
    }
}

export namespace Iterable {
    export function* truncate<T>(xs: Iterable<T>, count: number) {
        let i = 0
        for (const x of xs) {
            if (count <= i) { return }
            yield x
            i++
        }
    }
}
