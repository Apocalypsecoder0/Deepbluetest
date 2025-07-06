import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  Code, 
  CheckCircle, 
  X, 
  Star, 
  Crown, 
  Shield,
  Zap,
  Users,
  Database,
  Cloud,
  Brain,
  Rocket,
  HelpCircle,
  Calculator,
  ArrowRight
} from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: "free",
      name: "Free",
      icon: <Shield className="h-6 w-6" />,
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with development",
      popular: false,
      features: [
        { name: "5 Projects", included: true },
        { name: "100MB Storage", included: true },
        { name: "Basic Language Support (10 languages)", included: true },
        { name: "File Management", included: true },
        { name: "Basic Terminal", included: true },
        { name: "Community Support", included: true },
        { name: "AI Assistant (10 requests/day)", included: false },
        { name: "Real-time Collaboration", included: false },
        { name: "Version Control", included: false },
        { name: "Database Integration", included: false },
        { name: "Cloud Deployment", included: false },
        { name: "Advanced Debugging", included: false }
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      color: "border-blue-200"
    },
    {
      id: "gold",
      name: "Gold",
      icon: <Star className="h-6 w-6" />,
      price: { monthly: 19.99, yearly: 199.99 },
      description: "Best for individual developers and small teams",
      popular: true,
      features: [
        { name: "50 Projects", included: true },
        { name: "5GB Storage", included: true },
        { name: "Advanced Language Support (20 languages)", included: true },
        { name: "Advanced File Management", included: true },
        { name: "Multi-Terminal System", included: true },
        { name: "Priority Support", included: true },
        { name: "AI Assistant (100 requests/day)", included: true },
        { name: "Real-time Collaboration", included: true },
        { name: "Version Control", included: true },
        { name: "Database Integration", included: true },
        { name: "Cloud Deployment", included: false },
        { name: "Advanced Debugging", included: true }
      ],
      buttonText: "Upgrade to Gold",
      buttonVariant: "default" as const,
      color: "border-yellow-300"
    },
    {
      id: "platinum",
      name: "Platinum",
      icon: <Crown className="h-6 w-6" />,
      price: { monthly: 49.99, yearly: 499.99 },
      description: "Ultimate development experience for professionals",
      popular: false,
      features: [
        { name: "Unlimited Projects", included: true },
        { name: "50GB Storage", included: true },
        { name: "All Language Support (25+ languages)", included: true },
        { name: "Comprehensive File System", included: true },
        { name: "Advanced Terminal & Shell", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Unlimited AI Assistant", included: true },
        { name: "Advanced Collaboration Tools", included: true },
        { name: "Enterprise Version Control", included: true },
        { name: "Advanced Database Tools", included: true },
        { name: "Multi-Platform Deployment", included: true },
        { name: "Professional Debugging Suite", included: true }
      ],
      buttonText: "Upgrade to Platinum",
      buttonVariant: "default" as const,
      color: "border-purple-300"
    }
  ];

  const enterpriseFeatures = [
    { icon: <Users className="h-5 w-5" />, title: "Team Management", description: "Advanced user roles and permissions" },
    { icon: <Shield className="h-5 w-5" />, title: "Enterprise Security", description: "SSO, audit logs, compliance reporting" },
    { icon: <Database className="h-5 w-5" />, title: "Custom Integrations", description: "Connect to your existing tools and workflows" },
    { icon: <Cloud className="h-5 w-5" />, title: "Private Cloud", description: "Dedicated infrastructure for your organization" }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your projects remain safe. If you exceed the new plan's limits, some features may be restricted until you upgrade or reduce usage."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students get 50% off Gold and Platinum plans with a valid .edu email address. Contact us for verification."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Absolutely! All paid plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Can I use DeepBlue:Octopus offline?",
      answer: "DeepBlue:Octopus is cloud-based, but we're working on offline capabilities for Platinum users in 2025."
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return "$0";
    const price = isYearly ? plan.price.yearly : plan.price.monthly;
    return `$${price}`;
  };

  const getPeriod = () => {
    return isYearly ? "year" : "month";
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return percentage;
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
              <Link href="/features" className="text-blue-200 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-white font-semibold">Pricing</Link>
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
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
            Simple, Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Development Journey
            </span>
          </h1>
          
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Start free, upgrade when you're ready. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-white font-semibold' : 'text-blue-200'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-500"
            />
            <span className={`text-lg ${isYearly ? 'text-white font-semibold' : 'text-blue-200'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-500/20 text-green-300 border-green-400/30 ml-2">
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={plan.id} className={`relative bg-slate-800/50 border-2 ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 text-blue-400">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-white">
                      {getPrice(plan)}
                      <span className="text-lg text-blue-200">/{getPeriod()}</span>
                    </div>
                    {isYearly && getSavings(plan) && (
                      <div className="text-sm text-green-400">
                        Save {getSavings(plan)}% yearly
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-blue-200 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-slate-500 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-blue-200' : 'text-slate-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full ${plan.id === 'free' 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  {plan.id !== 'free' && (
                    <p className="text-xs text-center text-slate-400">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Detailed Comparison</h2>
            <p className="text-xl text-blue-200">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-lg border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-white font-semibold">Features</th>
                  <th className="text-center p-4 text-white font-semibold">Free</th>
                  <th className="text-center p-4 text-white font-semibold">Gold</th>
                  <th className="text-center p-4 text-white font-semibold">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="p-4 text-blue-200">{feature.name}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 text-center">
                        {plan.features[index].included ? (
                          <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-400/30">
                Enterprise Solutions
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">
                Built for Large Organizations
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Need more than our standard plans offer? Our enterprise solutions provide 
                custom features, dedicated support, and scalable infrastructure for large teams.
              </p>
              
              <div className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-purple-400 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{feature.title}</h3>
                      <p className="text-blue-200 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                    Contact Sales
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Enterprise Features</CardTitle>
                <CardDescription className="text-blue-200">
                  Everything in Platinum, plus:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unlimited team members",
                    "Custom branding and white-label options",
                    "Dedicated infrastructure",
                    "SLA guarantees (99.9% uptime)",
                    "Advanced analytics and reporting",
                    "Custom integrations and APIs",
                    "On-premises deployment options",
                    "24/7 dedicated support team"
                  ].map((feature, index) => (
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-blue-200">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                      <p className="text-blue-200">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-200 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of developers who trust DeepBlue:Octopus for their projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ide">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
                Talk to Sales
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