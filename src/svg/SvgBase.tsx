import { FILE_BG } from "./const";

const Defs = () => {
  return (
    <defs>
      <linearGradient id="FileBg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="70%" stop-color={FILE_BG}></stop>
        <stop offset="100%" stop-color="#f1f5f9"></stop>
      </linearGradient>
      <filter id="dropshadow">
        <feDropShadow
          dx="2"
          dy="2"
          stdDeviation="1"
          flood-color="#64748b"
          flood-opacity="0.5"
        />
      </filter>
    </defs>
  );
};

export function SvgBase(props: { children?: any }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0,0,128,128"
    >
      <Defs />
      {props.children}
    </svg>
  );
}
