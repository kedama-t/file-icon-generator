import { TEXT_COLOR } from "./const";

export function FileTypeBadge(props: {
  text: string;
  badgeColor: string;
  font: string;
}) {
  return (
    <>
      <rect
        x="20"
        y="70"
        rx="5"
        ry="5"
        width="80"
        height="25"
        fill={props.badgeColor}
        filter="url(#dropshadow)"
      />

      <text
        x="47.5%"
        y={88 - (props.text.length > 7 ? 1 : 0)}
        font-family={props.font}
        font-size={props.text.length < 7 ? 16 : 16 - (props.text.length - 6)}
        fill={TEXT_COLOR}
        style="text-anchor: middle;"
      >
        {props.text}
      </text>
    </>
  );
}
