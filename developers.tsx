import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Book, 
  Download, 
  ExternalLink, 
  Terminal,
  Database,
  Cloud,
  Zap,
  Shield,
  Cpu,
  FileText,
  Globe,
  Layers,
  Play,
  CheckCircle,
  ArrowRight,
  Copy,
  Eye
} from "lucide-react";

export default function Developers() {
  const languages = [
    { name: "JavaScript", logo: "🟡", popularity: 95 },
    { name: "TypeScript", logo: "🔵", popularity: 90 },
    { name: "Python", logo: "🐍", popularity: 88 },
    { name: "Java", logo: "☕", popularity: 85 },
    { name: "C++", logo: "⚡", popularity: 80 },
    { name: "Rust", logo: "🦀", popularity: 75 },
    { name: "Go", logo: "🐹", popularity: 78 },
    { name: "C#", logo: "💜", popularity: 82 },
    { name: "PHP", logo: "🐘", popularity: 70 },
    { name: "Ruby", logo: "💎", popularity: 68 },
    { name: "Swift", logo: "🍎", popularity: 72 },
    { name: "Kotlin", logo: "📱", popularity: 74 }
  ];

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Intelligent Code Completion",
      description: "Advanced IntelliSense with context-aware suggestions and documentation",
      color: "text-blue-500"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Integrated Terminal",
      description: "Full-featured terminal with multi-session support and command history",
      color: "text-green-500"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Integration",
      description: "Direct connections to PostgreSQL, MySQL, MongoDB with visual query builder",
      color: "text-purple-500"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Deployment",
      description: "One-click deployment to AWS, Vercel, Netlify, and other platforms",
      color: "text-orange-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Live Collaboration",
      description: "Real-time editing, video calls, and screen sharing with your team",
      color: "text-yellow-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Built-in security scanning, vulnerability detection, and compliance tools",
      color: "text-red-500"
    }
  ];

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/projects",
      description: "List all user projects",
      response: "Array of project objects"
    },
    {
      method: "POST",
      endpoint: "/api/projects",
      description: "Create a new project",
      response: "Created project object"
    },
    {
      method: "GET",
      endpoint: "/api/projects/:id/files",
      description: "Get project files",
      response: "File tree structure"
    },
    {
      method: "POST",
      endpoint: "/api/ai/analyze-code",
      description: "AI code analysis",
      response: "Analysis results and suggestions"
    },
    {
      method: "POST",
      endpoint: "/api/ai/generate-code",
      description: "AI code generation",
      response: "Generated code snippet"
    }
  ];

  const codeExample = `// Initialize DeepBlue IDE Client
import { DeepBlueClient } from '@deepblue/sdk';

const client = new DeepBlueClient({
  apiKey: 'your-api-key',
  endpoint: 'https://api.deepblueide.dev'
});

// Create a new project
const project = await client.projects.create({
  name: 'My Awesome App',
  template: 'react-typescript',
  description: 'A modern web application'
});

// Upload files to project
await client.files.upload(project.id, {
  path: 'src/App.tsx',
  content: '// Your React component here'
});

// Deploy to production
const deployment = await client.deploy(project.id, {
  platform: 'vercel',
  environment: 'production'
});

console.log('Deployed to:', deployment.url);`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-blue-800/30 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DeepBlue:Octopus</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-blue-200 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-blue-200 hover:text-white transition-colors">Pricing</Link>
              <Link href="/developers" className="text-white font-semibold">Developers</Link>
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/ide">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Launch IDE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
              For Developers, By Developers
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Developer
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Resources
              </span>
            </h1>
            
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, integrate, and extend DeepBlue:Octopus. 
              From comprehensive APIs to detailed documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Book className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Language Support</h2>
            <p className="text-xl text-blue-200">
              Write code in your favorite language with full IDE support
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{lang.logo}</div>
                  <h3 className="text-white font-semibold mb-2">{lang.name}</h3>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.popularity}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-blue-200">{lang.popularity}% popularity</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Developer Features</h2>
            <p className="text-xl text-blue-200">
              Powerful tools designed to accelerate your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">API Documentation</h2>
            <p className="text-xl text-blue-200">
              Integrate DeepBlue:Octopus into your workflow with our RESTful API
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="sdk">SDK</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Getting Started</CardTitle>
                  <CardDescription className="text-blue-200">
                    Authentication and basic usage of the DeepBlue API
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Base URL</h4>
                    <code className="bg-slate-900 text-green-400 px-3 py-2 rounded block">
                      https://api.deepblueide.dev/v1
                    </code>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Authentication</h4>
                    <p className="text-blue-200 mb-2">Include your API key in the Authorization header:</p>
                    <code className="bg-slate-900 text-green-400 px-3 py-2 rounded block">
                      Authorization: Bearer your-api-key
                    </code>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Rate Limits</h4>
                    <ul className="text-blue-200 space-y-1">
                      <li>• Free: 100 requests/hour</li>
                      <li>• Gold: 1,000 requests/hour</li>
                      <li>• Platinum: 10,000 requests/hour</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="endpoints" className="space-y-6">
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'} className="font-mono">
                            {endpoint.method}
                          </Badge>
                          <code className="text-blue-300">{endpoint.endpoint}</code>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Test
                        </Button>
                      </div>
                      <p className="text-blue-200 mb-2">{endpoint.description}</p>
                      <p className="text-sm text-slate-400">Returns: {endpoint.response}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sdk" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Official SDKs</CardTitle>
                  <CardDescription className="text-blue-200">
                    Use our official SDKs for seamless integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">JavaScript/TypeScript</h4>
                      <code className="bg-slate-900 text-green-400 px-3 py-2 rounded block">
                        npm install @deepblue/sdk
                      </code>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download SDK
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Python</h4>
                      <code className="bg-slate-900 text-green-400 px-3 py-2 rounded block">
                        pip install deepblue-sdk
                      </code>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download SDK
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Code Example</CardTitle>
                      <CardDescription className="text-blue-200">
                        Creating a project and deploying with the SDK
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Developer Resources</h2>
            <p className="text-xl text-blue-200">
              Everything you need to get started and succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Book className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Documentation</h3>
                <p className="text-blue-200 text-sm mb-4">Comprehensive guides and tutorials</p>
                <ExternalLink className="h-4 w-4 text-blue-400" />
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Code className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-blue-200 text-sm mb-4">Open source projects and examples</p>
                <ExternalLink className="h-4 w-4 text-green-400" />
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Globe className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Community</h3>
                <p className="text-blue-200 text-sm mb-4">Connect with other developers</p>
                <ExternalLink className="h-4 w-4 text-purple-400" />
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Cpu className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Status</h3>
                <p className="text-blue-200 text-sm mb-4">Real-time system status</p>
                <CheckCircle className="h-4 w-4 text-green-400" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building Today
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of developers using DeepBlue:Octopus to build amazing software
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Try It Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
              <Book className="mr-2 h-5 w-5" />
              Read Docs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DeepBlue:Octopus</span>
              </div>
              <p className="text-blue-200">
                The most advanced cloud-based IDE for modern development teams.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/updates" className="hover:text-white transition-colors">Updates</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 DeepBlue:Octopus IDE. All rights reserved. | <a href="https://deepblueide.dev" className="hover:text-white transition-colors">deepblueide.dev</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}