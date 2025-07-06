import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Brain, 
  Users, 
  Database,
  Cloud,
  Shield,
  Zap,
  Terminal,
  GitBranch,
  Paintbrush,
  Play,
  Smartphone,
  Globe,
  FileText,
  Search,
  Layers,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  Camera,
  Mic
} from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Multi-Language IDE",
      description: "Support for 25+ programming languages with intelligent syntax highlighting, auto-completion, and real-time error detection.",
      features: ["JavaScript/TypeScript", "Python", "Java", "C++", "Rust", "Go", "And 20+ more"],
      color: "from-blue-500 to-blue-600",
      completion: 100
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Development",
      description: "Advanced AI assistance for code generation, debugging, optimization, and documentation with GPT-4 integration.",
      features: ["Code generation", "Smart debugging", "Auto-optimization", "Documentation generation"],
      color: "from-purple-500 to-purple-600",
      completion: 95
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Real-Time Collaboration",
      description: "Work together with your team in real-time with live editing, video calls, screen sharing, and team chat.",
      features: ["Live code editing", "Video conferencing", "Screen sharing", "Team messaging"],
      color: "from-green-500 to-green-600",
      completion: 90
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Integration",
      description: "Direct connections to PostgreSQL, MySQL, MongoDB with visual query builder and schema designer.",
      features: ["Visual query builder", "Schema designer", "Migration tools", "Data visualization"],
      color: "from-indigo-500 to-indigo-600",
      completion: 85
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Deployment",
      description: "One-click deployment to AWS, Vercel, Netlify, and other platforms with automated CI/CD pipelines.",
      features: ["One-click deploy", "CI/CD automation", "Multi-platform support", "Environment management"],
      color: "from-orange-500 to-orange-600",
      completion: 80
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Advanced security features with vulnerability scanning, access controls, and compliance reporting.",
      features: ["Vulnerability scanning", "Access controls", "Audit logging", "Compliance reports"],
      color: "from-red-500 to-red-600",
      completion: 88
    }
  ];

  const advancedFeatures = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Advanced Terminal",
      description: "Multi-session terminal with command history, tab completion, and integrated package management.",
      category: "Development Tools"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Version Control",
      description: "Integrated Git support with visual diff, merge conflict resolution, and branch management.",
      category: "Version Control"
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "Theme Customization",
      description: "Beautiful themes including DeepBlue Ocean with customizable syntax highlighting and UI elements.",
      category: "Customization"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Live Preview",
      description: "Real-time preview for web applications with hot reloading and device simulation.",
      category: "Development Tools"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Framework",
      description: "Support for React Native, Flutter, Ionic with device testing and app store deployment.",
      category: "Mobile Development"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Framework",
      description: "Templates and tools for React, Vue, Angular, Next.js, and other modern web frameworks.",
      category: "Web Development"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation Generator",
      description: "Automatic generation of API documentation, code comments, and project wikis.",
      category: "Documentation"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Global Search",
      description: "Powerful search across all files, code, and project resources with regex support.",
      category: "Navigation"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Project Templates",
      description: "Pre-built templates for React, Express, FastAPI, Unity games, and enterprise applications.",
      category: "Project Management"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Performance Monitor",
      description: "Real-time monitoring of application performance, memory usage, and system resources.",
      category: "Monitoring"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Game Engine",
      description: "Built-in 2D/3D game development tools with physics, audio, and cross-platform deployment.",
      category: "Game Development"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "API Testing",
      description: "Integrated REST client for API testing with collection management and environment variables.",
      category: "Testing"
    }
  ];

  const planFeatures = {
    free: [
      "5 projects",
      "100MB storage",
      "Basic language support (10 languages)",
      "Community support",
      "Basic terminal",
      "File management"
    ],
    gold: [
      "50 projects",
      "5GB storage",
      "Advanced debugging",
      "Priority support",
      "AI assistance (50 requests/day)",
      "Real-time collaboration",
      "Version control",
      "Advanced terminal",
      "Database integration",
      "Performance monitoring"
    ],
    platinum: [
      "Unlimited projects",
      "50GB storage",
      "All professional tools",
      "24/7 premium support",
      "Unlimited AI assistance",
      "Enterprise integrations",
      "Custom deployment",
      "Advanced security",
      "Game engine access",
      "Mobile development tools",
      "API testing suite",
      "Custom themes"
    ]
  };

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
              <Link href="/features" className="text-white font-semibold">Features</Link>
              <Link href="/pricing" className="text-blue-200 hover:text-white transition-colors">Pricing</Link>
              <Link href="/developers" className="text-blue-200 hover:text-white transition-colors">Developers</Link>
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
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
            Comprehensive Feature Set
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Build Anything
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From simple scripts to complex applications, DeepBlue:Octopus provides all the tools 
            and features you need for modern software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Try All Features
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-xl text-blue-200">
              The foundation of your development workflow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{feature.completion}%</div>
                      <div className="text-sm text-blue-200">Complete</div>
                    </div>
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-blue-200 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Progress value={feature.completion} className="h-2" />
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-blue-200">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
            <p className="text-xl text-blue-200">
              Professional tools for serious developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="ml-auto text-xs bg-blue-500/20 text-blue-300">
                      {feature.category}
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Feature Comparison</h2>
            <p className="text-xl text-blue-200">
              Choose the plan that fits your development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white text-2xl">Free</CardTitle>
                <div className="text-3xl font-bold text-white">$0<span className="text-base text-blue-200">/month</span></div>
                <CardDescription className="text-blue-200">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {planFeatures.free.map((feature, index) => (
                    <li key={index} className="flex items-center text-blue-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Gold Plan */}
            <Card className="bg-slate-800/50 border-yellow-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white text-2xl">Gold</CardTitle>
                <div className="text-3xl font-bold text-white">$19.99<span className="text-base text-blue-200">/month</span></div>
                <CardDescription className="text-blue-200">Best for individual developers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {planFeatures.gold.map((feature, index) => (
                    <li key={index} className="flex items-center text-blue-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Platinum Plan */}
            <Card className="bg-slate-800/50 border-purple-400/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-2xl">Platinum</CardTitle>
                <div className="text-3xl font-bold text-white">$49.99<span className="text-base text-blue-200">/month</span></div>
                <CardDescription className="text-blue-200">Ultimate development experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {planFeatures.platinum.map((feature, index) => (
                    <li key={index} className="flex items-center text-blue-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-xl text-blue-200">
              Exciting features we're working on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/30 border-slate-600 opacity-75">
              <CardContent className="pt-6 text-center">
                <Eye className="h-8 w-8 text-slate-400 mx-auto mb-4" />
                <h3 className="text-slate-300 font-semibold mb-2">VR Development</h3>
                <p className="text-slate-400 text-sm">Virtual reality development tools</p>
                <Badge variant="outline" className="mt-3 border-slate-500 text-slate-400">Q2 2025</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/30 border-slate-600 opacity-75">
              <CardContent className="pt-6 text-center">
                <Camera className="h-8 w-8 text-slate-400 mx-auto mb-4" />
                <h3 className="text-slate-300 font-semibold mb-2">AR Integration</h3>
                <p className="text-slate-400 text-sm">Augmented reality development suite</p>
                <Badge variant="outline" className="mt-3 border-slate-500 text-slate-400">Q3 2025</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/30 border-slate-600 opacity-75">
              <CardContent className="pt-6 text-center">
                <Mic className="h-8 w-8 text-slate-400 mx-auto mb-4" />
                <h3 className="text-slate-300 font-semibold mb-2">Voice Coding</h3>
                <p className="text-slate-400 text-sm">Code with voice commands</p>
                <Badge variant="outline" className="mt-3 border-slate-500 text-slate-400">Q4 2025</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/30 border-slate-600 opacity-75">
              <CardContent className="pt-6 text-center">
                <HardDrive className="h-8 w-8 text-slate-400 mx-auto mb-4" />
                <h3 className="text-slate-300 font-semibold mb-2">Blockchain Tools</h3>
                <p className="text-slate-400 text-sm">Web3 and blockchain development</p>
                <Badge variant="outline" className="mt-3 border-slate-500 text-slate-400">2026</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Full Feature Set
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Try all features free for 14 days, no credit card required
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                View Pricing Plans
              </Button>
            </Link>
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