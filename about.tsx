import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Heart, 
  Users, 
  Target, 
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Trophy
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Stephen Deline Jr.",
      role: "Lead Developer & Architect",
      image: "/api/placeholder/300/300",
      bio: "Passionate full-stack developer with expertise in modern web technologies and cloud platforms.",
      email: "stephend8846@gmail.com",
      github: "apocalypsecode0",
      linkedin: "#",
      specialties: ["TypeScript", "React", "Node.js", "PostgreSQL", "AI Integration"]
    }
  ];

  const milestones = [
    {
      date: "July 2025",
      title: "DeepBlue:Octopus v2.1.0 Alpha Launch",
      description: "Released comprehensive IDE with 25+ programming languages, AI assistance, and real-time collaboration.",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      date: "June 2025",
      title: "Core Foundation",
      description: "Built foundational architecture with React, TypeScript, and PostgreSQL integration.",
      icon: <Code className="h-5 w-5" />
    },
    {
      date: "May 2025",
      title: "Project Inception",
      description: "Conceived the vision for a next-generation web-based development environment.",
      icon: <Lightbulb className="h-5 w-5" />
    }
  ];

  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in web-based development tools.",
      color: "text-blue-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Developer-Centric",
      description: "Every feature is designed with the developer experience as our top priority.",
      color: "text-green-500"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Open & Accessible",
      description: "We believe powerful development tools should be accessible to everyone, everywhere.",
      color: "text-red-500"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quality Driven",
      description: "We maintain the highest standards in code quality, security, and performance.",
      color: "text-purple-500"
    }
  ];

  const stats = [
    { label: "Lines of Code", value: "500K+", icon: <Code className="h-5 w-5" /> },
    { label: "Features Implemented", value: "200+", icon: <Award className="h-5 w-5" /> },
    { label: "Languages Supported", value: "25+", icon: <Globe className="h-5 w-5" /> },
    { label: "Development Hours", value: "2000+", icon: <Calendar className="h-5 w-5" /> }
  ];

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
              <Link href="/developers" className="text-blue-200 hover:text-white transition-colors">Developers</Link>
              <Link href="/about" className="text-white font-semibold">About</Link>
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
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
            About Our Mission
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building the Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Development
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            We're on a mission to democratize software development by creating the most powerful, 
            accessible, and collaborative development environment ever built.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-blue-200 text-lg leading-relaxed">
                <p>
                  DeepBlue:Octopus was born from a simple observation: developers spend too much time 
                  fighting with their tools instead of building amazing software. We envisioned a world 
                  where the development environment adapts to you, not the other way around.
                </p>
                <p>
                  Starting in 2025, our team began crafting an IDE that combines the power of desktop 
                  environments with the accessibility of the web. Every feature, from our AI assistant 
                  to our real-time collaboration tools, is designed to eliminate friction and amplify creativity.
                </p>
                <p>
                  Today, DeepBlue:Octopus supports 25+ programming languages, integrates with major cloud 
                  platforms, and helps thousands of developers build the future, one line of code at a time.
                </p>
              </div>
            </div>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-blue-300 text-sm font-medium">{milestone.date}</div>
                        <h4 className="text-white font-semibold">{milestone.title}</h4>
                        <p className="text-blue-200 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-blue-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-blue-200">
              The talented individuals making DeepBlue:Octopus possible
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Code className="h-16 w-16 text-white" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                      <p className="text-blue-200 mb-4">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                        {member.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="secondary" className="bg-blue-500/20 text-blue-300">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4 justify-center md:justify-start">
                        <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-600 text-slate-400 hover:bg-slate-600 hover:text-white">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            We envision a future where every developer, regardless of their location or resources, 
            has access to world-class development tools. Where collaboration is seamless, 
            deployment is instant, and creativity is the only limitation.
          </p>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Democratizing Development, One Developer at a Time
            </h3>
            <p className="text-blue-200 text-lg">
              Join us in building a world where powerful development tools are accessible to everyone, 
              everywhere, and every great idea has the tools it needs to become reality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Whether you're a developer, contributor, or supporter, there's a place for you in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                Try DeepBlue:Octopus
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                Get in Touch
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