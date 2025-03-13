"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brighten_1 = __importDefault(require("./brighten"));
console.log('\nTermStyle Plus Demo:\n');
// Basic colors
console.log('Basic Colors:');
console.log(brighten_1.default.red('Red text'));
console.log(brighten_1.default.blue('Blue text'));
console.log(brighten_1.default.green('Green text'));
// Special colors
console.log('\nSpecial Colors:');
console.log(brighten_1.default.emerald('Emerald text'));
console.log(brighten_1.default.ruby('Ruby text'));
console.log(brighten_1.default.sapphire('Sapphire text'));
// Neon colors
console.log('\nNeon Colors:');
console.log(brighten_1.default.neon('Neon blue text', 'blue'));
console.log(brighten_1.default.neon('Neon pink text', 'pink'));
console.log(brighten_1.default.neon('Neon green text', 'green'));
// Styles
console.log('\nStyles:');
console.log(brighten_1.default.bold('Bold text'));
console.log(brighten_1.default.italic('Italic text'));
console.log(brighten_1.default.underline('Underlined text'));
// Rainbow and gradients
console.log('\nSpecial Effects:');
console.log(brighten_1.default.rainbow('Rainbow text'));
console.log(brighten_1.default.gradient('Gradient text', { r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }));
// Boxes
console.log('\nBox Styles:');
console.log(brighten_1.default.box('Single box', 'single'));
console.log(brighten_1.default.box('Double box', 'double'));
console.log(brighten_1.default.box('Round box', 'round'));
// Combined effects
console.log('\nCombined Effects:');
console.log(brighten_1.default.box(brighten_1.default.rainbow('Rainbow in a box'), 'double'));
console.log(brighten_1.default.neon(brighten_1.default.box('Neon box', 'round'), 'blue'));
