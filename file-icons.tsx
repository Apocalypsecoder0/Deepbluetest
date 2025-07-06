import {
  FileText,
  Folder,
  FolderOpen,
  Code,
  FileCode,
  Image,
  Settings,
  Database,
  Globe,
} from "lucide-react";

export function getFileIcon(fileName: string, isDirectory: boolean, isOpen?: boolean) {
  if (isDirectory) {
    if (isOpen) {
      return <FolderOpen className="h-4 w-4 text-[var(--ide-accent)] mr-2" />;
    }
    return <Folder className="h-4 w-4 text-[var(--ide-accent)] mr-2" />;
  }

  const extension = fileName.split(".").pop()?.toLowerCase();
  const iconProps = "h-4 w-4 mr-2";

  switch (extension) {
    case "js":
    case "jsx":
      return <div className={`${iconProps} text-yellow-400`}>JS</div>;
    case "ts":
    case "tsx":
      return <div className={`${iconProps} text-blue-400`}>TS</div>;
    case "py":
      return <div className={`${iconProps} text-green-400`}>PY</div>;
    case "html":
    case "htm":
      return <Globe className={`${iconProps} text-orange-400`} />;
    case "css":
    case "scss":
    case "sass":
      return <div className={`${iconProps} text-blue-400`}>CSS</div>;
    case "json":
      return <FileCode className={`${iconProps} text-green-400`} />;
    case "md":
    case "markdown":
      return <FileText className={`${iconProps} text-[var(--ide-text-secondary)]`} />;
    case "xml":
    case "svg":
      return <Code className={`${iconProps} text-orange-300`} />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "webp":
      return <Image className={`${iconProps} text-purple-400`} />;
    case "sql":
      return <Database className={`${iconProps} text-blue-300`} />;
    case "config":
    case "conf":
    case "ini":
      return <Settings className={`${iconProps} text-gray-400`} />;
    default:
      return <FileText className={`${iconProps} text-[var(--ide-text-secondary)]`} />;
  }
}
