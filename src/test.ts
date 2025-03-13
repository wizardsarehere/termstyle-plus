import brighten from './brighten';
import { BoxStyle } from './types';

console.log('\nTesting Enhanced Brighten Color Module:\n');

// Test basic colors
console.log('Basic Colors:');
console.log(brighten.red('Red text'));
console.log(brighten.blue('Blue text'));
console.log(brighten.green('Green text'));

// Test special colors
console.log('\nSpecial Colors:');
console.log(brighten.emerald('Emerald text'));
console.log(brighten.ruby('Ruby text'));
console.log(brighten.sapphire('Sapphire text'));

// Test styles
console.log('\nStyles:');
console.log(brighten.bold('Bold text'));
console.log(brighten.italic('Italic text'));
console.log(brighten.underline('Underlined text'));

console.log('\nRGB & HSL Colors:');
console.log(brighten.rgb(255, 128, 0)('Custom RGB Color'));
console.log(brighten.bgRgb(128, 0, 255)('Custom RGB Background'));
console.log(brighten.hsl(330, 100, 50)('Custom HSL Color'));
console.log(brighten.bgHsl(150, 100, 50)('Custom HSL Background'));

console.log('\nSpecial Effects:');
console.log(brighten.rainbow('Enhanced Rainbow Text Effect'));
console.log(brighten.multiGradient('Multi-gradient Text Effect', [
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 255, b: 0 },
  { r: 0, g: 0, b: 255 }
]));
console.log(brighten.neon('Neon Effect', 'blue'));

console.log('\nBox Styles:');
['single', 'double', 'round', 'bold'].forEach(style => {
  console.log(brighten.box(`Box with ${style} style`, style as BoxStyle));
});

console.log('\nComplex Combinations:');
console.log(brighten.chain('bold', 'underline', 'brightBlue')('Multiple styles combined'));
console.log(brighten.box(brighten.rainbow('Rainbow in a box'), 'double'));
console.log(brighten.neon(brighten.box('Neon box with glitch', 'round'), 'blue'));