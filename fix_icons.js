const fs = require('fs');
const path = require('path');

const iconPath = path.join(__dirname, 'src/components/Icons.tsx');
let content = fs.readFileSync(iconPath, 'utf8');

// Replace IconProps
content = content.replace(
  /type IconProps = React\.SVGProps<SVGSVGElement> & \{ gradient\?: "emerald" \| "cyan" \| "blue" \| "rose" \};/g,
  `export interface IconProps extends React.SVGProps<SVGSVGElement> {\n  gradient?: "emerald" | "cyan" | "blue" | "rose";\n  size?: number | string;\n}`
);

// Replace component definitions
content = content.replace(
  /export const (\w+) = \(\{ gradient, className, \.\.\.props \}: IconProps\) => \(\s*<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" width="24" height="24"/g,
  `export const $1 = ({ gradient, className, size, width, height, ...props }: IconProps) => (\n  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24}`
);

fs.writeFileSync(iconPath, content, 'utf8');
console.log('Icons.tsx updated successfully');
