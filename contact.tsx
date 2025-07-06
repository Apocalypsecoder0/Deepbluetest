import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Send,
  HelpCircle,
  Users,
  Building,
  Zap,
  Shield,
  Heart
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help with technical issues and general inquiries",
      contact: "stephend8846@gmail.com",
      availability: "24/7 response within 24 hours",
      color: "text-blue-500"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Real-time support for urgent issues",
      contact: "Available in IDE",
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "text-green-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub Issues",
      description: "Report bugs and request features",
      contact: "github.com/apocalypsecode0",
      availability: "Community-driven support",
      color: "text-purple-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Enterprise Support",
      description: "Priority support for Platinum customers",
      contact: "+1 (555) 123-4567",
      availability: "24/7 for enterprise customers",
      color: "text-orange-500"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 400",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "sf@deepblueide.dev"
    },
    {
      city: "Remote First",
      address: "Distributed Team Worldwide",
      country: "Global",
      phone: "Available via Email",
      email: "remote@deepblueide.dev"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "#", color: "hover:text-purple-400" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#", color: "hover:text-blue-600" }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: <HelpCircle className="h-4 w-4" /> },
    { value: "technical", label: "Technical Support", icon: <Code className="h-4 w-4" /> },
    { value: "sales", label: "Sales & Pricing", icon: <Building className="h-4 w-4" /> },
    { value: "partnership", label: "Partnership", icon: <Users className="h-4 w-4" /> },
    { value: "security", label: "Security Issue", icon: <Shield className="h-4 w-4" /> },
    { value: "feature", label: "Feature Request", icon: <Zap className="h-4 w-4" /> }
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
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-white font-semibold">Contact</Link>
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
            Get in Touch
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We're Here to
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Help
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Have questions about DeepBlue:Octopus? Need technical support? Want to discuss partnerships? 
            We'd love to hear from you.
          </p>

          <div className="flex items-center justify-center space-x-8 text-blue-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Live Chat</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-400" />
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-blue-200">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center ${method.color}`}>
                      {method.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{method.title}</CardTitle>
                      <CardDescription className="text-blue-200">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Contact:</span>
                      <span className="text-white font-medium">{method.contact}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200">Availability:</span>
                      <span className="text-white font-medium">{method.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
            <p className="text-xl text-blue-200">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Inquiry Type</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {inquiryTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors cursor-pointer">
                        <input 
                          type="radio" 
                          id={type.value} 
                          name="inquiryType" 
                          value={type.value}
                          className="text-blue-500"
                        />
                        <label htmlFor={type.value} className="flex items-center space-x-2 text-white cursor-pointer">
                          {type.icon}
                          <span className="text-sm">{type.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={6}
                    placeholder="Please provide details about your inquiry..." 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="text-blue-500" />
                  <Label htmlFor="newsletter" className="text-blue-200 text-sm">
                    Subscribe to our newsletter for updates and tips
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-xl text-blue-200">
              Find us around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <div>
                      <CardTitle className="text-white text-xl">{location.city}</CardTitle>
                      <CardDescription className="text-blue-200">{location.country}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-blue-200">{location.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-blue-200">{location.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-blue-200">{location.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Community */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-200 mb-8">
            Connect with us on social media and be part of the developer community
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 text-slate-400 transition-colors ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Community Guidelines</h3>
            <p className="text-blue-200 mb-6">
              We're committed to creating a welcoming and inclusive environment for all developers. 
              Join our community to share knowledge, get help, and collaborate on amazing projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Be Respectful</h4>
                <p className="text-blue-200 text-sm">Treat everyone with respect and kindness</p>
              </div>
              <div>
                <Heart className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Help Others</h4>
                <p className="text-blue-200 text-sm">Share your knowledge and help fellow developers</p>
              </div>
              <div>
                <Code className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Share Code</h4>
                <p className="text-blue-200 text-sm">Contribute examples and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Quick Answers</h2>
          <p className="text-xl text-blue-200 mb-8">
            Looking for immediate help? Check out our frequently asked questions
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-slate-700 text-left">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-2">How do I get started?</h3>
                <p className="text-blue-200 text-sm">Simply click "Launch IDE" to start using DeepBlue:Octopus. No installation required!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 text-left">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-2">Is there a free plan?</h3>
                <p className="text-blue-200 text-sm">Yes! Our free plan includes 5 projects, 100MB storage, and basic language support.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 text-left">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-2">Can I collaborate with my team?</h3>
                <p className="text-blue-200 text-sm">Absolutely! Real-time collaboration is available on Gold and Platinum plans.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 text-left">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-2">What about data security?</h3>
                <p className="text-blue-200 text-sm">We use enterprise-grade security with encryption, access controls, and compliance reporting.</p>
              </CardContent>
            </Card>
          </div>

          <Link href="/faq">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              View All FAQs
            </Button>
          </Link>
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