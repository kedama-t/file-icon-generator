import { FileBase } from "./FileBase";
import { LINE_CAP, LINE_COLOR, LINE_WIDTH } from "./const";

export function TextFileIcon() {
  return (
    <>
      <FileBase />

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
