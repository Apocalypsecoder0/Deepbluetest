import { 
  IPlugin, 
  PluginManifest, 
  PluginContext, 
  PluginStorage, 
  CommandRegistry, 
  LanguageRegistry, 
  WindowRegistry,
  LanguageConfiguration,
  BUILTIN_LANGUAGES,
  CompilerConfiguration
} from "@shared/plugin-schema";

// Plugin Engine - Core system for managing plugins
export class PluginEngine {
  private plugins: Map<string, IPlugin> = new Map();
  private contexts: Map<string, PluginContext> = new Map();
  private languages: Map<string, LanguageConfiguration> = new Map();
  private commands: Map<string, (...args: any[]) => any> = new Map();
  private isInitialized = false;

  constructor() {
    this.initializeBuiltinLanguages();
  }

  private initializeBuiltinLanguages() {
    BUILTIN_LANGUAGES.forEach(lang => {
      this.languages.set(lang.id, lang);
    });
  }

  async initialize() {
    if (this.isInitialized) return;
    
    // Load installed plugins from storage
    await this.loadInstalledPlugins();
    
    this.isInitialized = true;
    console.log('Plugin Engine initialized with', this.plugins.size, 'plugins');
  }

  private async loadInstalledPlugins() {
    try {
      // Load some default plugins for better user experience
      await this.loadDefaultPlugins();
      
      const response = await fetch('/api/plugins/installed');
      const installedPlugins = await response.json();
      
      for (const pluginData of installedPlugins) {
        await this.loadPlugin(pluginData.manifest, pluginData.code);
      }
    } catch (error) {
      console.warn('Failed to load installed plugins:', error);
    }
  }

  private async loadDefaultPlugins() {
    // Default Language Support Plugin
    const languageSupportPlugin: IPlugin = {
      id: 'core-language-support',
      manifest: {
        id: 'core-language-support',
        name: 'Core Language Support',
        version: '1.0.0',
        description: 'Built-in language support for common programming languages',
        author: 'DeepBlue IDE',
        category: 'language',
        keywords: ['language', 'syntax', 'highlighting'],
        engines: { ide: '^2.0.0' },
        main: 'main.js'
      },
      activate: (context) => {
        console.log('Core language support plugin activated');
      }
    };

    // Theme Plugin
    const themePlugin: IPlugin = {
      id: 'core-themes',
      manifest: {
        id: 'core-themes',
        name: 'Core Themes',
        version: '1.0.0',
        description: 'Built-in themes for the IDE',
        author: 'DeepBlue IDE',
        category: 'theme',
        keywords: ['theme', 'appearance', 'colors'],
        engines: { ide: '^2.0.0' },
        main: 'main.js'
      },
      activate: (context) => {
        console.log('Core themes plugin activated');
      }
    };

    // File Manager Plugin
    const fileManagerPlugin: IPlugin = {
      id: 'core-file-manager',
      manifest: {
        id: 'core-file-manager',
        name: 'File Manager',
        version: '1.0.0',
        description: 'Enhanced file management capabilities',
        author: 'DeepBlue IDE',
        category: 'utility',
        keywords: ['files', 'explorer', 'management'],
        engines: { ide: '^2.0.0' },
        main: 'main.js'
      },
      activate: (context) => {
        console.log('File manager plugin activated');
      }
    };

    // Load the default plugins
    this.plugins.set(languageSupportPlugin.id, languageSupportPlugin);
    this.plugins.set(themePlugin.id, themePlugin);
    this.plugins.set(fileManagerPlugin.id, fileManagerPlugin);

    // Activate them
    [languageSupportPlugin, themePlugin, fileManagerPlugin].forEach(plugin => {
      const context = this.createPluginContext(plugin.id);
      this.contexts.set(plugin.id, context);
      plugin.activate(context);
    });
  }

  async installPlugin(manifest: PluginManifest, code: string): Promise<boolean> {
    try {
      // Validate manifest
      if (!this.validateManifest(manifest)) {
        throw new Error('Invalid plugin manifest');
      }

      // Check if plugin already exists
      if (this.plugins.has(manifest.id)) {
        throw new Error(`Plugin ${manifest.id} is already installed`);
      }

      // Load and activate plugin
      await this.loadPlugin(manifest, code);

      // Save to storage
      await fetch('/api/plugins/install', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ manifest, code })
      });

      console.log(`Plugin ${manifest.id} installed successfully`);
      return true;
    } catch (error) {
      console.error('Failed to install plugin:', error);
      return false;
    }
  }

  async uninstallPlugin(pluginId: string): Promise<boolean> {
    try {
      const plugin = this.plugins.get(pluginId);
      if (!plugin) {
        throw new Error(`Plugin ${pluginId} is not installed`);
      }

      // Deactivate plugin
      if (plugin.deactivate) {
        await plugin.deactivate();
      }

      // Clean up context
      const context = this.contexts.get(pluginId);
      if (context) {
        context.subscriptions.forEach(sub => sub.dispose());
        this.contexts.delete(pluginId);
      }

      // Remove from storage
      await fetch(`/api/plugins/${pluginId}`, { method: 'DELETE' });

      this.plugins.delete(pluginId);
      console.log(`Plugin ${pluginId} uninstalled successfully`);
      return true;
    } catch (error) {
      console.error('Failed to uninstall plugin:', error);
      return false;
    }
  }

  private async loadPlugin(manifest: PluginManifest, code: string) {
    try {
      // Create plugin context
      const context = this.createPluginContext(manifest.id);
      
      // Execute plugin code in isolated scope
      const plugin = this.executePluginCode(code, manifest);
      
      // Store plugin and context
      this.plugins.set(manifest.id, plugin);
      this.contexts.set(manifest.id, context);

      // Register plugin contributions
      this.registerPluginContributions(manifest, context);

      // Activate plugin
      if (plugin.activate) {
        await plugin.activate(context);
      }

    } catch (error) {
      console.error(`Failed to load plugin ${manifest.id}:`, error);
      throw error;
    }
  }

  private executePluginCode(code: string, manifest: PluginManifest): IPlugin {
    // Create isolated execution context
    const pluginGlobals = {
      console,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      fetch,
      exports: {} as any,
      module: { exports: {} as any },
      require: (module: string) => {
        // Simple require implementation for common modules
        switch (module) {
          case 'path':
            return {
              join: (...args: string[]) => args.join('/'),
              dirname: (path: string) => path.split('/').slice(0, -1).join('/'),
              basename: (path: string) => path.split('/').pop() || '',
              extname: (path: string) => {
                const name = path.split('/').pop() || '';
                const dot = name.lastIndexOf('.');
                return dot > 0 ? name.substring(dot) : '';
              }
            };
          default:
            throw new Error(`Module ${module} is not available`);
        }
      }
    };

    // Execute plugin code
    const func = new Function(...Object.keys(pluginGlobals), code);
    func(...Object.values(pluginGlobals));

    const plugin = pluginGlobals.module.exports || pluginGlobals.exports;
    
    if (!plugin || typeof plugin.activate !== 'function') {
      throw new Error('Plugin must export an activate function');
    }

    return {
      id: manifest.id,
      manifest,
      activate: plugin.activate,
      deactivate: plugin.deactivate
    };
  }

  private createPluginContext(pluginId: string): PluginContext {
    const subscriptions: { dispose: () => void }[] = [];

    return {
      subscriptions,
      globalState: this.createPluginStorage(`global:${pluginId}`),
      workspaceState: this.createPluginStorage(`workspace:${pluginId}`),
      extensionPath: `/plugins/${pluginId}`,
      commands: this.createCommandRegistry(pluginId, subscriptions),
      languages: this.createLanguageRegistry(pluginId, subscriptions),
      window: this.createWindowRegistry()
    };
  }

  private createPluginStorage(namespace: string): PluginStorage {
    return {
      get<T>(key: string, defaultValue?: T): T | undefined {
        const item = localStorage.getItem(`plugin:${namespace}:${key}`);
        if (item === null) return defaultValue;
        try {
          return JSON.parse(item);
        } catch {
          return defaultValue;
        }
      },
      async update(key: string, value: any): Promise<void> {
        localStorage.setItem(`plugin:${namespace}:${key}`, JSON.stringify(value));
      }
    };
  }

  private createCommandRegistry(pluginId: string, subscriptions: { dispose: () => void }[]): CommandRegistry {
    return {
      registerCommand: (command: string, callback: (...args: any[]) => any) => {
        const fullCommand = `${pluginId}.${command}`;
        this.commands.set(fullCommand, callback);
        
        const disposable = {
          dispose: () => this.commands.delete(fullCommand)
        };
        subscriptions.push(disposable);
        return disposable;
      },
      executeCommand: async (command: string, ...args: any[]) => {
        const handler = this.commands.get(command);
        if (!handler) {
          throw new Error(`Command ${command} not found`);
        }
        return await handler(...args);
      }
    };
  }

  private createLanguageRegistry(pluginId: string, subscriptions: { dispose: () => void }[]): LanguageRegistry {
    return {
      registerLanguage: (languageConfig: LanguageConfiguration) => {
        this.languages.set(languageConfig.id, languageConfig);
        
        const disposable = {
          dispose: () => this.languages.delete(languageConfig.id)
        };
        subscriptions.push(disposable);
        return disposable;
      },
      setLanguageConfiguration: (languageId: string, configuration: LanguageConfiguration) => {
        const existing = this.languages.get(languageId);
        if (existing) {
          this.languages.set(languageId, { ...existing, ...configuration });
        } else {
          this.languages.set(languageId, configuration);
        }
        
        const disposable = {
          dispose: () => {
            if (existing) {
              this.languages.set(languageId, existing);
            } else {
              this.languages.delete(languageId);
            }
          }
        };
        subscriptions.push(disposable);
        return disposable;
      }
    };
  }

  private createWindowRegistry(): WindowRegistry {
    return {
      showInformationMessage: async (message: string, ...items: string[]) => {
        // TODO: Integrate with toast system
        console.log('Info:', message);
        return undefined;
      },
      showWarningMessage: async (message: string, ...items: string[]) => {
        // TODO: Integrate with toast system
        console.warn('Warning:', message);
        return undefined;
      },
      showErrorMessage: async (message: string, ...items: string[]) => {
        // TODO: Integrate with toast system
        console.error('Error:', message);
        return undefined;
      },
      showInputBox: async (options) => {
        // TODO: Integrate with modal system
        return prompt(options?.prompt || 'Enter value:', options?.value || '') || undefined;
      }
    };
  }

  private registerPluginContributions(manifest: PluginManifest, context: PluginContext) {
    const { contributes } = manifest;
    if (!contributes) return;

    // Register languages
    if (contributes.languages) {
      contributes.languages.forEach(lang => {
        const languageConfig: LanguageConfiguration = {
          id: lang.id,
          aliases: lang.aliases,
          extensions: lang.extensions
        };
        context.languages.registerLanguage(languageConfig);
      });
    }

    // Register commands
    if (contributes.commands) {
      contributes.commands.forEach(cmd => {
        // Commands will be registered by the plugin's activate function
      });
    }
  }

  private validateManifest(manifest: PluginManifest): boolean {
    return !!(
      manifest.id &&
      manifest.name &&
      manifest.version &&
      manifest.engines?.deepblue
    );
  }

  // Public API methods
  getInstalledPlugins(): IPlugin[] {
    return Array.from(this.plugins.values());
  }

  getLanguages(): LanguageConfiguration[] {
    return Array.from(this.languages.values());
  }

  getLanguage(id: string): LanguageConfiguration | undefined {
    return this.languages.get(id);
  }

  executeCommand(command: string, ...args: any[]): Promise<any> {
    const handler = this.commands.get(command);
    if (!handler) {
      throw new Error(`Command ${command} not found`);
    }
    return Promise.resolve(handler(...args));
  }

  async compileAndRun(language: string, code: string, fileName: string): Promise<string> {
    const lang = this.getLanguage(language);
    if (!lang?.compiler) {
      throw new Error(`No compiler configuration for language: ${language}`);
    }

    return this.executeCompiler(lang.compiler, code, fileName);
  }

  private async executeCompiler(compiler: CompilerConfiguration, code: string, fileName: string): Promise<string> {
    // Replace placeholders in compiler arguments
    const fileBasenameNoExtension = fileName.replace(/\.[^/.]+$/, "");
    const args = compiler.args.map(arg => 
      arg
        .replace('${file}', fileName)
        .replace('${fileBasenameNoExtension}', fileBasenameNoExtension)
    );

    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: compiler.command,
          args,
          code,
          fileName,
          workingDirectory: compiler.workingDirectory || '/tmp',
          environment: compiler.environment || {}
        })
      });

      if (!response.ok) {
        throw new Error(`Compilation failed: ${response.statusText}`);
      }

      const result = await response.json();
      return result.output;
    } catch (error) {
      throw new Error(`Compilation error: ${error.message}`);
    }
  }
}

// Global plugin engine instance
export const pluginEngine = new PluginEngine();