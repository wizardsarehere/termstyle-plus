import { RGB, Colors, Styles, BoxStyle, NeonColor, Brighten as BrightenInterface } from './types';
declare class Brighten implements BrightenInterface {
    readonly colors: Colors;
    readonly bg: Colors;
    readonly styles: Styles;
    [key: string]: any;
    constructor();
    rgb(r: number, g: number, b: number): (text: string) => string;
    bgRgb(r: number, g: number, b: number): (text: string) => string;
    private hslToRgb;
    hsl(h: number, s: number, l: number): (text: string) => string;
    bgHsl(h: number, s: number, l: number): (text: string) => string;
    rainbow(text: string): string;
    gradient(text: string, startColor: RGB, endColor: RGB): string;
    multiGradient(text: string, colors: RGB[]): string;
    neon(text: string, color?: NeonColor): string;
    box(text: string, style?: BoxStyle): string;
    chain(...styles: string[]): (text: string) => string;
}
declare const brighten: Brighten;
export default brighten;
