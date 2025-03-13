# TermStyle Plus 🎨

A powerful and feature-rich terminal styling library for Node.js with TypeScript support, extensive color options, and beautiful effects.

## 📦 Installation

```bash
npm install termstyle-plus
```

## 🚀 Quick Start

```typescript
import style from 'termstyle-plus';

// Basic colors
console.log(style.red('This is red text'));
console.log(style.blue('This is blue text'));
console.log(style.green('This is green text'));

// Background colors
console.log(style.bgRed('Text with red background'));
console.log(style.bgBlue('Text with blue background'));

// Text styles
console.log(style.bold('Bold text'));
console.log(style.italic('Italic text'));
console.log(style.underline('Underlined text'));

// Special effects
console.log(style.rainbow('Rainbow text'));
console.log(style.neon('Neon text', 'blue'));

// Box styles
console.log(style.box('Hello World', 'double'));
```

## 🎨 Available Features

### Basic Colors
```typescript
// Standard colors
style.black('Black text')
style.red('Red text')
style.green('Green text')
style.yellow('Yellow text')
style.blue('Blue text')
style.magenta('Magenta text')
style.cyan('Cyan text')
style.white('White text')

// Bright variants
style.brightRed('Bright red text')
style.brightGreen('Bright green text')
style.brightBlue('Bright blue text')
// ... and more
```

### 🌈 Extended Colors

```typescript
// Nature colors
style.forest('Forest green')
style.ocean('Ocean blue')
style.sunset('Sunset orange')
style.dawn('Dawn pink')
style.earth('Earth brown')
style.sand('Sand colored')

// Precious stones
style.emerald('Emerald')
style.ruby('Ruby')
style.sapphire('Sapphire')
style.amethyst('Amethyst')
style.pearl('Pearl')
style.opal('Opal')
style.garnet('Garnet')

// Neon colors
style.neonPink('Neon pink')
style.neonBlue('Neon blue')
style.neonGreen('Neon green')
style.neonOrange('Neon orange')
style.neonYellow('Neon yellow')
style.neonPurple('Neon purple')

// Pastel colors
style.pastelPink('Pastel pink')
style.pastelBlue('Pastel blue')
style.pastelGreen('Pastel green')
style.pastelYellow('Pastel yellow')
style.pastelPurple('Pastel purple')
style.pastelOrange('Pastel orange')
```

### 🎯 Background Colors
Add `bg` prefix to any color:
```typescript
style.bgRed('Red background')
style.bgBlue('Blue background')
style.bgNeonPink('Neon pink background')
style.bgPastelBlue('Pastel blue background')
```

### ✨ Text Styles
```typescript
style.bold('Bold text')
style.italic('Italic text')
style.dim('Dim text')
style.underline('Underlined text')
style.blink('Blinking text')
style.reverse('Reversed text')
style.hidden('Hidden text')
style.strikethrough('Strikethrough text')
style.doubleUnderline('Double underlined text')
style.overline('Overlined text')
```

### 🎆 Special Effects

#### Rainbow Text
```typescript
style.rainbow('Rainbow colored text');
```

#### Neon Effect
```typescript
type NeonColor = 'blue' | 'pink' | 'green' | 'orange' | 'yellow' | 'purple';
style.neon('Glowing text', 'blue');
```

#### Gradient
```typescript
interface RGB {
  r: number;
  g: number;
  b: number;
}

style.gradient('Gradient text', 
  { r: 255, g: 0, b: 0 },    // Start color (red)
  { r: 0, g: 0, b: 255 }     // End color (blue)
);
```

#### Multi-gradient
```typescript
style.multiGradient('Multi-color gradient', [
  { r: 255, g: 0, b: 0 },    // Red
  { r: 0, g: 255, b: 0 },    // Green
  { r: 0, g: 0, b: 255 }     // Blue
]);
```

### 📦 Box Styles
```typescript
type BoxStyle = 'single' | 'double' | 'round' | 'bold';

style.box('Text in a box', 'single');
style.box('Double bordered box', 'double');
style.box('Round bordered box', 'round');
style.box('Bold bordered box', 'bold');
```

### 🎨 RGB & HSL Colors

#### RGB Colors
```typescript
style.rgb(255, 100, 0)('Custom RGB color');
style.bgRgb(100, 200, 255)('Custom RGB background');
```

#### HSL Colors
```typescript
style.hsl(330, 100, 50)('Custom HSL color');
style.bgHsl(200, 100, 50)('Custom HSL background');
```

### 🔗 Combining Styles
Chain multiple styles together:
```typescript
style.chain('bold', 'underline', 'red')('Bold, underlined, red text');

// Combine with special effects
style.box(style.rainbow('Rainbow in a box'), 'double');
style.neon(style.box('Neon box', 'round'), 'blue');
```

## 🎯 Example

Here's a more complex example showing various features:

```typescript
import style from 'termstyle-plus';

// Create a fancy header
console.log(style.box(
  style.bold(style.neon('Welcome to My App', 'blue')),
  'double'
));

// Show some status information
console.log(style.green('✓ Connected to database'));
console.log(style.yellow('⚠ Cache is outdated'));
console.log(style.red('✗ API endpoint unreachable'));

// Create a gradient title
console.log(style.gradient(
  'System Status',
  { r: 255, g: 100, b: 0 },
  { r: 0, g: 100, b: 255 }
));

// Show some metrics
console.log(style.box(`
${style.bold('Memory Usage:')} ${style.green('45%')}
${style.bold('CPU Load:')} ${style.yellow('78%')}
${style.bold('Disk Space:')} ${style.red('92%')}
`, 'round'));
```

## 📄 License

MIT