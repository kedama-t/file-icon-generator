import { LINE_CAP } from "./const";

export function CrossMark() {
  const boxX = 90;
  const boxY = 90;
  return (
    <>
      <rect
        x={boxX}
        y={boxY}
        width="25"
        height="25"
        fill="#dc2626"
        stroke="#7f1d1d"
        stroke-width="3"
        stroke-linejoin={LINE_CAP}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 8}
        y1={boxY + 8}
        x2={boxX + 18}
        y2={boxY + 18}
        stroke="#dcfce7"
        stroke-width="3"
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 8}
        y1={boxY + 18}
        x2={boxX + 18}
        y2={boxY + 8}
        stroke="#dcfce7"
        stroke-width="3"
      />
    </>
  );
}
