import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  Database,
  Brain,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  PlayCircle
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Write code in 25+ programming languages with intelligent syntax highlighting and real-time compilation.",
      color: "text-blue-500"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Development",
      description: "Get intelligent code suggestions, debugging assistance, and optimization recommendations.",
      color: "text-purple-500"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Cloud Integration",
      description: "Seamlessly connect to databases, APIs, and cloud services with built-in management tools.",
      color: "text-green-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Real-Time Collaboration",
      description: "Work together with your team in real-time with live editing, chat, and video calls.",
      color: "text-orange-500"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "One-Click Deployment",
      description: "Deploy your applications instantly to multiple platforms with automated CI/CD pipelines.",
      color: "text-red-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Advanced security features with encryption, access controls, and compliance reporting.",
      color: "text-indigo-500"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5 projects",
        "100MB storage",
        "Basic language support",
        "Community support"
      ],
      color: "border-blue-200",
      buttonVariant: "outline" as const
    },
    {
      name: "Gold",
      price: "$19.99",
      period: "month",
      description: "Best for individual developers",
      features: [
        "50 projects",
        "5GB storage",
        "Advanced debugging",
        "Priority support",
        "AI assistance",
        "Real-time collaboration"
      ],
      color: "border-yellow-300",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Platinum",
      price: "$49.99",
      period: "month",
      description: "Ultimate development experience",
      features: [
        "Unlimited projects",
        "50GB storage",
        "All professional tools",
        "24/7 premium support",
        "Advanced AI features",
        "Enterprise integrations",
        "Custom deployment"
      ],
      color: "border-purple-300",
      buttonVariant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-blue-800/30 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DeepBlue:Octopus</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-blue-200 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-blue-200 hover:text-white transition-colors">Pricing</Link>
              <Link href="/developers" className="text-blue-200 hover:text-white transition-colors">Developers</Link>
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                  Admin Portal
                </Button>
              </Link>
              <Link href="/ide">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Launch IDE
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
            Now Available - Version 2.1.0 Alpha
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Web Development
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build, collaborate, and deploy with the most advanced cloud-based IDE. 
            Featuring AI assistance, real-time collaboration, and support for 25+ programming languages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/trial">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Try Guest Mode - No Signup
              </Button>
            </Link>
            <Link href="/setup">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-4">
                <Zap className="mr-2 h-5 w-5" />
                One-Click Setup Wizard
              </Button>
            </Link>
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Code className="mr-2 h-5 w-5" />
                Full IDE Access
              </Button>
            </Link>
            <Link href="/admin">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-lg px-8 py-4">
                <Shield className="mr-2 h-5 w-5" />
                Admin Portal
              </Button>
            </Link>
            <Link href="/beta">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                Beta Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-300">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>50K+ Developers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Build Amazing Software
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Powerful tools and features designed to accelerate your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Development Journey
            </h2>
            <p className="text-xl text-blue-200">
              Start free, upgrade when you're ready to unlock more power
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-slate-800/50 border-2 ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-white">
                    {plan.price}
                    <span className="text-base text-blue-200">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-blue-200">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-blue-200">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full ${plan.name === 'Free' 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    }`}
                  >
                    {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Portal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Administrative Control Center
          </h2>
          <p className="text-xl text-red-200 mb-8">
            Complete platform management with advanced tools for billing, support, patches, and system monitoring
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">System Management</h3>
              <p className="text-red-200 text-sm">Monitor performance, manage domains, apply patches, and configure system settings</p>
            </div>
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">User & Billing</h3>
              <p className="text-red-200 text-sm">Manage subscriptions, process payments, handle support tickets, and beta access</p>
            </div>
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Security & Analytics</h3>
              <p className="text-red-200 text-sm">Real-time monitoring, security audits, error tracking, and performance analytics</p>
            </div>
          </div>
          
          <Link href="/admin">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-lg px-8 py-4">
              <Shield className="mr-2 h-5 w-5" />
              Access Admin Portal
            </Button>
          </Link>
        </div>
      </section>

      {/* Database Setup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Database Support
            </h2>
            <p className="text-xl text-blue-200">
              Choose between PostgreSQL or MySQL for your deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">PostgreSQL (Default)</CardTitle>
                <CardDescription className="text-blue-200">
                  Recommended for most deployments with advanced features and JSON support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Advanced data types and JSON support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Built-in full-text search
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Excellent performance and scalability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Ready to use with existing configuration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">MySQL Alternative</CardTitle>
                <CardDescription className="text-blue-200">
                  Traditional choice with widespread hosting support and familiar syntax
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Wide hosting provider support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Familiar SQL syntax and tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Excellent documentation and community
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Complete setup guide included
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-200 mb-6">
              Both database systems are fully supported with comprehensive setup guides and automated deployment scripts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                View PostgreSQL Setup
              </Button>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                View MySQL Setup Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of developers who are building the future with DeepBlue:Octopus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                Start Building Today
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                Contact Sales
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