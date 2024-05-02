import { Hono } from "hono";
import {
  ArrowDown,
  ArrowUp,
  Checked,
  CrossMark,
  FileTypeBadge,
  SvgBase,
  TextFileIcon,
} from "./svg";

const app = new Hono();

type BadgeType = "none" | "checked" | "crossmark" | "arrowup" | "arrowdown";

const getBadge = (badgeType: BadgeType) => {
  switch (badgeType) {
    case "checked":
      return <Checked />;
    case "crossmark":
      return <CrossMark />;
    case "arrowup":
      return <ArrowUp />;
    case "arrowdown":
      return <ArrowDown />;
    default:
      return;
  }
};

app.get("/api", async (c) => {
  const {
    text = "File",
    color = "2563eb",
    font = "Menlo,Consolas",
    badge = "none",
  } = c.req.query();
  c.status(200);
  c.header("Content-Type", "image/svg+xml");
  const body = (
    <SvgBase>
      <TextFileIcon />
      <FileTypeBadge text={text} badgeColor={`#${color}`} font={font} />
      {getBadge(badge.toLowerCase() as BadgeType)}
    </SvgBase>
  ).toString();

  return c.body(body);
});

export default app;
