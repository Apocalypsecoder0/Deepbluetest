import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { File, Project } from "@shared/schema";

interface EditorTab {
  id: number;
  name: string;
  content: string;
  language: string;
  path: string;
  isModified: boolean;
}

export function useIDEState() {
  const [openTabs, setOpenTabs] = useState<EditorTab[]>([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Get current project
  const { data: currentProject } = useQuery<Project>({
    queryKey: ["/api/project"],
  });

  // Get files
  const { data: files = [] } = useQuery<File[]>({
    queryKey: ["/api/files", currentProject?.id],
    enabled: !!currentProject?.id,
  });

  const activeTab = openTabs.find(tab => tab.id === activeTabId);

  // Create new file mutation
  const createFileMutation = useMutation({
    mutationFn: async (fileData: any) => {
      const response = await apiRequest("POST", "/api/files", fileData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/files"] });
      toast({
        title: "Success",
        description: "File created successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create file",
        variant: "destructive",
      });
    },
  });

  // Update file mutation
  const updateFileMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: number; updates: any }) => {
      const response = await apiRequest("PUT", `/api/files/${id}`, updates);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/files"] });
    },
  });

  const initializeIDE = useCallback(() => {
    // Initialize with default file if available
    if (files && files.length > 0) {
      const mainFile = files.find((f: File) => f.name === "main.js") || 
                      files.find((f: File) => f.name === "index.html") ||
                      files.find((f: File) => !f.isDirectory);
      if (mainFile && openTabs.length === 0) {
        openFile(mainFile);
      }
    }
  }, [files, openTabs.length]);

  const openFile = useCallback((file: File) => {
    if (file.isDirectory) return;

    // Check if file is already open
    const existingTab = openTabs.find(tab => tab.id === file.id);
    if (existingTab) {
      setActiveTabId(file.id);
      return;
    }

    // Create new tab
    const newTab: EditorTab = {
      id: file.id,
      name: file.name,
      content: file.content,
      language: file.language,
      path: file.path,
      isModified: false,
    };

    setOpenTabs(prev => [...prev, newTab]);
    setActiveTabId(file.id);
  }, [openTabs]);

  const closeTab = useCallback((tabId: number) => {
    const tab = openTabs.find(t => t.id === tabId);
    if (tab?.isModified) {
      // In a real app, we'd show a confirmation dialog
      toast({
        title: "Unsaved changes",
        description: "File has unsaved changes",
        variant: "destructive",
      });
      return;
    }

    setOpenTabs(prev => prev.filter(tab => tab.id !== tabId));
    
    if (activeTabId === tabId) {
      const remainingTabs = openTabs.filter(tab => tab.id !== tabId);
      setActiveTabId(remainingTabs.length > 0 ? remainingTabs[remainingTabs.length - 1].id : null);
    }
  }, [openTabs, activeTabId, toast]);

  const setActiveTab = useCallback((tabId: number) => {
    setActiveTabId(tabId);
  }, []);

  const updateFileContent = useCallback((tabId: number, newContent: string) => {
    setOpenTabs(prev => prev.map(tab => 
      tab.id === tabId 
        ? { ...tab, content: newContent, isModified: tab.content !== newContent }
        : tab
    ));
  }, []);

  const saveCurrentFile = useCallback(() => {
    if (!activeTab) return;

    updateFileMutation.mutate({
      id: activeTab.id,
      updates: { content: activeTab.content }
    });

    setOpenTabs(prev => prev.map(tab => 
      tab.id === activeTab.id 
        ? { ...tab, isModified: false }
        : tab
    ));

    toast({
      title: "File saved",
      description: `${activeTab.name} has been saved`,
    });
  }, [activeTab, updateFileMutation, toast]);

  const createNewFile = useCallback(() => {
    if (!currentProject) return;

    const fileName = prompt("Enter file name:");
    if (!fileName) return;

    const extension = fileName.split(".").pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      js: "javascript",
      ts: "typescript",
      py: "python",
      html: "html",
      css: "css",
      json: "json",
      md: "markdown",
    };

    createFileMutation.mutate({
      name: fileName,
      path: `/${fileName}`,
      content: "",
      language: languageMap[extension || ""] || "plaintext",
      projectId: currentProject.id,
      isDirectory: false,
      parentId: null,
    });
  }, [currentProject, createFileMutation]);

  const runCurrentFile = useCallback(() => {
    if (!activeTab) {
      toast({
        title: "No file selected",
        description: "Please select a file to run",
        variant: "destructive",
      });
      return;
    }

    if (!["javascript", "python"].includes(activeTab.language)) {
      toast({
        title: "Unsupported language",
        description: "Only JavaScript and Python files can be executed",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Running code",
      description: `Executing ${activeTab.name}...`,
    });
  }, [activeTab, toast]);

  const createProject = useCallback(async (name: string, description: string): Promise<number> => {
    try {
      const response = await apiRequest("POST", "/api/projects", {
        name,
        description,
        userId: 1 // Default user
      });
      const project = await response.json();
      queryClient.invalidateQueries({ queryKey: ["/api/project"] });
      
      toast({
        title: "Project created",
        description: `${name} project has been created`,
      });
      
      return project.id;
    } catch (error) {
      toast({
        title: "Failed to create project",
        description: "An error occurred while creating the project",
        variant: "destructive",
      });
      throw error;
    }
  }, [queryClient, toast]);

  const addFile = useCallback(async (fileData: {
    name: string;
    path: string;
    content: string;
    language: string;
    isDirectory: boolean;
    projectId: number;
  }) => {
    try {
      const response = await apiRequest("POST", "/api/files", fileData);
      const file = await response.json();
      queryClient.invalidateQueries({ queryKey: ["/api/files"] });
      return file;
    } catch (error) {
      toast({
        title: "Failed to add file",
        description: "An error occurred while adding the file",
        variant: "destructive",
      });
      throw error;
    }
  }, [queryClient, toast]);

  return {
    // State
    openTabs,
    activeTabId,
    activeTab,
    selectedFileId,
    currentProject,
    files,

    // Actions
    initializeIDE,
    openFile,
    closeTab,
    setActiveTab,
    updateFileContent,
    saveCurrentFile,
    createNewFile,
    runCurrentFile,
    createProject,
    addFile,
    setSelectedFileId,
  };
}
