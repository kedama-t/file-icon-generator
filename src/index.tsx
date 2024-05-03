import { Hono } from "hono";
import {
  ArrowDown,
  ArrowUp,
  AudioFileIcon,
  Checked,
  CrossMark,
  FileTypeBadge,
  ImageFileIcon,
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

type FileType = "text" | "image" | "audio";
const getFileImage = (fileType: FileType) => {
  switch (fileType) {
    case "text":
      return <TextFileIcon />;
    case "image":
      return <ImageFileIcon />;
    case "audio":
      return <AudioFileIcon />;
    default:
      return <TextFileIcon />;
  }
};
app.get("/api", async (c) => {
  const {
    text = "File",
    color = "2563eb",
    font = "Menlo,Consolas",
    badge = "none",
    type = "text",
  } = c.req.query();
  c.status(200);
  c.header("Content-Type", "image/svg+xml");
  const body = (
    <SvgBase>
      {getFileImage(type as FileType)}
      <FileTypeBadge text={text} badgeColor={`#${color}`} font={font} />
      {getBadge(badge.toLowerCase() as BadgeType)}
    </SvgBase>
  ).toString();

  return c.body(body);
});

export default app;
