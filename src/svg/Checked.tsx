import { LINE_CAP } from "./const";

export function Checked() {
  const boxX = 90;
  const boxY = 90;
  return (
    <>
      <rect
        x={boxX}
        y={boxY}
        width="25"
        height="25"
        fill="#16a34a"
        stroke="#14532d"
        stroke-width="3"
        stroke-linejoin={LINE_CAP}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 5}
        y1={boxY + 12}
        x2={boxX + 10}
        y2={boxY + 18}
        stroke="#dcfce7"
        stroke-width="3"
      />
      <line
        stroke-linecap={LINE_CAP}
        x1={boxX + 10}
        y1={boxY + 18}
        x2={boxX + 20}
        y2={boxY + 6}
        stroke="#dcfce7"
        stroke-width="3"
      />
    </>
  );
}
