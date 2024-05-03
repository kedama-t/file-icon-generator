import { FileBase } from "./FileBase";
import { LINE_CAP, LINE_COLOR, LINE_WIDTH } from "./const";

export function AudioFileIcon() {
  const boxX = 50;
  const boxY = 40;
  const size = 40;
  return (
    <>
      <FileBase />

      <rect
        x={boxX}
        y={boxY}
        width={size}
        height={size}
        stroke={LINE_COLOR}
        fill="none"
        stroke-width={LINE_WIDTH}
        stroke-linecap={LINE_CAP}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 12}
        y1={boxY + 12}
        x2={boxX + 12}
        y2={boxY + size - 10}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 12}
        y1={boxY + 12}
        x2={boxX + size - 10}
        y2={boxY + 10}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 12}
        y1={boxY + 17}
        x2={boxX + size - 10}
        y2={boxY + 15}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 12}
        y1={boxY + 12}
        x2={boxX + 12}
        y2={boxY + size - 10}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />

      <ellipse
        cx={boxX + 9}
        cy={boxY + size - 10}
        rx={5}
        ry={4}
        fill={LINE_COLOR}
        transform={`rotate(-20, ${boxX + 10}, ${boxY + size - 10})`}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + size - 10}
        y1={boxY + 10}
        x2={boxX + size - 10}
        y2={boxY + size - 15}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <ellipse
        cx={boxX + size - 13}
        cy={boxY + size - 13}
        rx={5}
        ry={4}
        fill={LINE_COLOR}
        transform={`rotate(-20, ${boxX + size - 10}, ${boxY + size - 12})`}
      />
    </>
  );
}
