import { FileBase } from "./FileBase";
import { LINE_CAP, LINE_COLOR, LINE_WIDTH } from "./const";

export function ImageFileIcon() {
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
        x1={boxX}
        y1={boxY + size}
        x2={boxX + 12}
        y2={boxY + size - 25}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 12}
        y1={boxY + size - 25}
        x2={boxX + 17}
        y2={boxY + size - 15}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 17}
        y1={boxY + size - 15}
        x2={boxX + 22}
        y2={boxY + size - 20}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 22}
        y1={boxY + size - 20}
        x2={boxX + size}
        y2={boxY + size}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
      <circle cx={boxX + size - 10} cy={boxY + 10} r={4} fill={LINE_COLOR} />
    </>
  );
}
