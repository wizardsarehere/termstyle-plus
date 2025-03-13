export interface RGB {
    r: number;
    g: number;
    b: number;
}
export interface Colors {
    [key: string]: string;
}
export interface Styles {
    [key: string]: string;
    reset: string;
    bold: string;
    dim: string;
    italic: string;
    underline: string;
    blink: string;
    reverse: string;
    hidden: string;
    strikethrough: string;
    doubleUnderline: string;
    overline: string;
}
export type BoxStyle = 'single' | 'double' | 'round' | 'bold';
export type NeonColor = 'blue' | 'pink' | 'green' | 'orange' | 'yellow' | 'purple';
export interface Brighten {
    colors: Colors;
    bg: Colors;
    styles: Styles;
    rgb(r: number, g: number, b: number): (text: string) => string;
    bgRgb(r: number, g: number, b: number): (text: string) => string;
    hsl(h: number, s: number, l: number): (text: string) => string;
    bgHsl(h: number, s: number, l: number): (text: string) => string;
    rainbow(text: string): string;
    gradient(text: string, startColor: RGB, endColor: RGB): string;
    multiGradient(text: string, colors: RGB[]): string;
    neon(text: string, color?: NeonColor): string;
    box(text: string, style?: BoxStyle): string;
    chain(...styles: string[]): (text: string) => string;
    [key: string]: any;
}
