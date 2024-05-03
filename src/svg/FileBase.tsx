import { LINE_COLOR, LINE_WIDTH, LINE_CAP } from "./const";

export function FileBase() {
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
    </>
  );
}
