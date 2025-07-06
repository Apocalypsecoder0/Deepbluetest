import { useEffect, useState } from "react";
import { useIDEState } from "@/hooks/use-ide-state";
import TopMenuBar from "@/components/ide/top-menu-bar";
import Toolbar from "@/components/ide/toolbar";
import Sidebar from "@/components/ide/sidebar";
import EditorTabs from "@/components/ide/editor-tabs";
import CodeEditor from "@/components/ide/code-editor";
import TerminalPanel from "@/components/ide/terminal-panel";
import AIPromptPanel from "@/components/ide/ai-prompt-panel";
import StatusBar from "@/components/ide/status-bar";
import SettingsPanel from "@/components/ide/settings-panel";
import CommandPalette from "@/components/ide/command-palette";
import DebugPanel from "@/components/ide/debug-panel";
import ExtensionsPanel from "@/components/ide/extensions-panel";
import SourceControlPanel from "@/components/ide/source-control-panel";
import PluginManager from "@/components/ide/plugin-manager";
import ServerManager from "@/components/ide/server-management";
import { AutoFileLoader } from "@/components/ide/auto-file-loader";

export default function IDE() {
  const { initializeIDE } = useIDEState();
  const [sidebarView, setSidebarView] = useState<"explorer" | "search" | "source-control" | "debug" | "extensions" | "ai-assistant">("explorer");
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPluginManager, setShowPluginManager] = useState(false);
  const [showServerManager, setShowServerManager] = useState(false);

  useEffect(() => {
    initializeIDE();
    
    // Initialize the plugin engine
    import("@/lib/plugin-engine").then(({ pluginEngine }) => {
      pluginEngine.initialize();
    });
  }, [initializeIDE]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command Palette: Ctrl+Shift+P
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
      // Settings: Ctrl+,
      if (e.ctrlKey && e.key === ',') {
        e.preventDefault();
        setShowSettings(true);
      }
      // Explorer: Ctrl+Shift+E
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setSidebarView("explorer");
      }
      // Source Control: Ctrl+Shift+G
      if (e.ctrlKey && e.shiftKey && e.key === 'G') {
        e.preventDefault();
        setSidebarView("source-control");
      }
      // Debug: Ctrl+Shift+D
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        setSidebarView("debug");
      }
      // Extensions: Ctrl+Shift+X
      if (e.ctrlKey && e.shiftKey && e.key === 'X') {
        e.preventDefault();
        setSidebarView("extensions");
      }
      // AI Assistant: Ctrl+Shift+A
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setSidebarView("ai-assistant");
      }
      // Plugin Manager: Ctrl+Shift+M
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        setShowPluginManager(true);
      }
      // Server Manager: Ctrl+Shift+S
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        setShowServerManager(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderSidebarContent = () => {
    switch (sidebarView) {
      case "explorer":
        return <Sidebar />;
      case "source-control":
        return <SourceControlPanel />;
      case "debug":
        return <DebugPanel />;
      case "extensions":
        return <ExtensionsPanel />;
      case "ai-assistant":
        return <AIPromptPanel />;
      default:
        return <Sidebar />;
    }
  };

  return (
    <div className="h-screen flex flex-col ide-container">
      <TopMenuBar />
      <Toolbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="ide-sidebar w-12 border-r ide-border flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => setSidebarView("explorer")}
            className={`p-2 rounded transition-colors ${
              sidebarView === "explorer" ? "bg-[var(--ide-accent)] text-white" : "text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)]"
            }`}
            title="Explorer (Ctrl+Shift+E)"
          >
            📁
          </button>
          <button
            onClick={() => setSidebarView("source-control")}
            className={`p-2 rounded transition-colors ${
              sidebarView === "source-control" ? "bg-[var(--ide-accent)] text-white" : "text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)]"
            }`}
            title="Source Control (Ctrl+Shift+G)"
          >
            🌿
          </button>
          <button
            onClick={() => setSidebarView("debug")}
            className={`p-2 rounded transition-colors ${
              sidebarView === "debug" ? "bg-[var(--ide-accent)] text-white" : "text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)]"
            }`}
            title="Debug (Ctrl+Shift+D)"
          >
            🐛
          </button>
          <button
            onClick={() => setSidebarView("extensions")}
            className={`p-2 rounded transition-colors ${
              sidebarView === "extensions" ? "bg-[var(--ide-accent)] text-white" : "text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)]"
            }`}
            title="Extensions (Ctrl+Shift+X)"
          >
            📦
          </button>
          <button
            onClick={() => setSidebarView("ai-assistant")}
            className={`p-2 rounded transition-colors ${
              sidebarView === "ai-assistant" ? "bg-[var(--ide-accent)] text-white" : "text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)]"
            }`}
            title="AI Assistant (Ctrl+Shift+A)"
          >
            🤖
          </button>
          
          {/* Settings at bottom */}
          <div className="flex-1" />
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded text-[var(--ide-text-secondary)] hover:text-[var(--ide-text)] transition-colors"
            title="Settings (Ctrl+,)"
          >
            ⚙️
          </button>
        </div>

        {/* Sidebar Content */}
        {renderSidebarContent()}
        
        {/* Resize Handle */}
        <div className="w-1 resize-handle"></div>
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col ide-container">
          <EditorTabs />
          <CodeEditor />
        </div>
      </div>
      
      {/* Bottom Terminal Panel */}
      <div className="h-64 border-t border-[var(--ide-border)]">
        <TerminalPanel />
      </div>
      
      <StatusBar />

      {/* Overlays */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        onOpenSettings={() => setShowSettings(true)}
      />
      
      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      <PluginManager
        isOpen={showPluginManager}
        onClose={() => setShowPluginManager(false)}
      />

      <ServerManager
        isOpen={showServerManager}
        onClose={() => setShowServerManager(false)}
      />

      {/* Auto file loader */}
      <AutoFileLoader />
    </div>
  );
}
