import { LINE_CAP, LINE_COLOR, LINE_WIDTH } from "./const";

export function TextFileIcon() {
  return (
    <>
      <path
        d="M 35,10 v 100 h 70 v -85 l -15 -15 h -55"
        fill="url(#FileBg)"
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
        stroke-linecap={LINE_CAP}
        stroke-linejoin={LINE_CAP}
        filter="url(#dropshadow)"
      />

      <path
        d="M 90,10 v 15 h 15"
        fill={LINE_COLOR}
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
        stroke-linecap={LINE_CAP}
        stroke-linejoin={LINE_CAP}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1="50"
        y1="40"
        x2="80"
        y2="40"
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1="50"
        y1="60"
        x2="90"
        y2="60"
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />

      <line
        stroke-linecap={LINE_CAP}
        x1="50"
        y1="80"
        x2="90"
        y2="80"
        stroke={LINE_COLOR}
        stroke-width={LINE_WIDTH}
      />
    </>
  );
}
