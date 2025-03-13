"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brighten_1 = __importDefault(require("./brighten"));
console.log('\nTesting Enhanced Brighten Color Module:\n');
// Test basic colors
console.log('Basic Colors:');
console.log(brighten_1.default.red('Red text'));
console.log(brighten_1.default.blue('Blue text'));
console.log(brighten_1.default.green('Green text'));
// Test special colors
console.log('\nSpecial Colors:');
console.log(brighten_1.default.emerald('Emerald text'));
console.log(brighten_1.default.ruby('Ruby text'));
console.log(brighten_1.default.sapphire('Sapphire text'));
// Test styles
console.log('\nStyles:');
console.log(brighten_1.default.bold('Bold text'));
console.log(brighten_1.default.italic('Italic text'));
console.log(brighten_1.default.underline('Underlined text'));
console.log('\nRGB & HSL Colors:');
console.log(brighten_1.default.rgb(255, 128, 0)('Custom RGB Color'));
console.log(brighten_1.default.bgRgb(128, 0, 255)('Custom RGB Background'));
console.log(brighten_1.default.hsl(330, 100, 50)('Custom HSL Color'));
console.log(brighten_1.default.bgHsl(150, 100, 50)('Custom HSL Background'));
console.log('\nSpecial Effects:');
console.log(brighten_1.default.rainbow('Enhanced Rainbow Text Effect'));
console.log(brighten_1.default.multiGradient('Multi-gradient Text Effect', [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 }
]));
console.log(brighten_1.default.neon('Neon Effect', 'blue'));
console.log('\nBox Styles:');
['single', 'double', 'round', 'bold'].forEach(style => {
    console.log(brighten_1.default.box(`Box with ${style} style`, style));
});
console.log('\nComplex Combinations:');
console.log(brighten_1.default.chain('bold', 'underline', 'brightBlue')('Multiple styles combined'));
console.log(brighten_1.default.box(brighten_1.default.rainbow('Rainbow in a box'), 'double'));
console.log(brighten_1.default.neon(brighten_1.default.box('Neon box with glitch', 'round'), 'blue'));
