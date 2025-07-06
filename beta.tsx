import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Shield,
  Key,
  CheckCircle,
  AlertCircle,
  Crown,
  Zap,
  Code,
  Users,
  Star,
  Send,
  FileText,
  Bug,
  Lightbulb,
  Settings
} from 'lucide-react';

interface BetaTokenData {
  token: string;
  tokenType: string;
  accessLevel: string;
  maxUses: number;
  usedCount: number;
  isActive: boolean;
  expiresAt: string | null;
  description: string;
}

interface VerificationResponse {
  success: boolean;
  message: string;
  tokenData?: BetaTokenData;
  userStatus?: {
    isBetaUser: boolean;
    betaAccessLevel: string;
    verificationStatus: string;
  };
}

const AccessLevelBadge = ({ level }: { level: string }) => {
  const configs = {
    basic: { icon: Shield, color: "bg-blue-500", label: "Basic Access" },
    premium: { icon: Crown, color: "bg-purple-500", label: "Premium Access" },
    developer: { icon: Code, color: "bg-green-500", label: "Developer Access" },
    admin: { icon: Zap, color: "bg-red-500", label: "Admin Access" }
  };
  
  const config = configs[level as keyof typeof configs] || configs.basic;
  const Icon = config.icon;
  
  return (
    <Badge className={`${config.color} text-white`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
};

export default function BetaAccess() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("access");
  const [betaToken, setBetaToken] = useState("");
  const [verificationData, setVerificationData] = useState<BetaTokenData | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    category: '',
    title: '',
    description: '',
    priority: 'medium',
    rating: 5,
    reproductionSteps: '',
    expectedBehavior: '',
    actualBehavior: ''
  });

  // Check current beta status
  const { data: betaStatus, isLoading: statusLoading } = useQuery({
    queryKey: ['/api/beta/status'],
    retry: false,
  });

  // Verify beta token
  const verifyTokenMutation = useMutation({
    mutationFn: async (token: string) => {
      const response = await apiRequest('POST', '/api/beta/verify-token', { token });
      return response.json();
    },
    onSuccess: (data: VerificationResponse) => {
      if (data.success) {
        setVerificationData(data.tokenData || null);
        toast({
          title: "Token Verified",
          description: data.message,
        });
        queryClient.invalidateQueries({ queryKey: ['/api/beta/status'] });
      } else {
        toast({
          title: "Verification Failed",
          description: data.message,
          variant: "destructive",
        });
      }
    },
  });

  // Activate beta access
  const activateAccessMutation = useMutation({
    mutationFn: async (token: string) => {
      const response = await apiRequest('POST', '/api/beta/activate', { token });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Beta Access Activated",
          description: "Welcome to the DeepBlue IDE Beta program!",
        });
        queryClient.invalidateQueries({ queryKey: ['/api/beta/status'] });
        setLocation('/ide');
      } else {
        toast({
          title: "Activation Failed",
          description: data.message,
          variant: "destructive",
        });
      }
    },
  });

  // Submit feedback
  const submitFeedbackMutation = useMutation({
    mutationFn: async (feedback: any) => {
      const response = await apiRequest('POST', '/api/beta/feedback', feedback);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for helping improve DeepBlue IDE!",
      });
      setFeedbackForm({
        category: '',
        title: '',
        description: '',
        priority: 'medium',
        rating: 5,
        reproductionSteps: '',
        expectedBehavior: '',
        actualBehavior: ''
      });
    },
  });

  const handleVerifyToken = () => {
    if (!betaToken.trim()) {
      toast({
        title: "Token Required",
        description: "Please enter a beta access token",
        variant: "destructive",
      });
      return;
    }
    verifyTokenMutation.mutate(betaToken);
  };

  const handleActivateAccess = () => {
    if (verificationData) {
      activateAccessMutation.mutate(verificationData.token);
    }
  };

  const handleSubmitFeedback = () => {
    if (!feedbackForm.title || !feedbackForm.description) {
      toast({
        title: "Required Fields",
        description: "Please fill in title and description",
        variant: "destructive",
      });
      return;
    }

    const deviceInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
    };

    submitFeedbackMutation.mutate({
      ...feedbackForm,
      browserInfo: navigator.userAgent,
      deviceInfo: JSON.stringify(deviceInfo),
    });
  };

  if (statusLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              DeepBlue IDE Beta Program
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Join the exclusive beta testing program for the next-generation IDE
            </p>
          </div>

          {/* Current Status Card */}
          {betaStatus && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Beta Access Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      You currently have beta access
                    </p>
                    <AccessLevelBadge level={betaStatus.betaAccessLevel} />
                  </div>
                  <Button onClick={() => setLocation('/ide')}>
                    Launch IDE
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Main Content */}
          <Card>
            <CardHeader>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="access">
                    <Key className="w-4 h-4 mr-2" />
                    Beta Access
                  </TabsTrigger>
                  <TabsTrigger value="features">
                    <Star className="w-4 h-4 mr-2" />
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="feedback">
                    <Send className="w-4 h-4 mr-2" />
                    Feedback
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                {/* Beta Access Tab */}
                <TabsContent value="access" className="space-y-6">
                  {!betaStatus ? (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="betaToken">Beta Access Token</Label>
                        <div className="flex space-x-2 mt-2">
                          <Input
                            id="betaToken"
                            type="text"
                            placeholder="Enter your beta access token"
                            value={betaToken}
                            onChange={(e) => setBetaToken(e.target.value)}
                            className="flex-1"
                          />
                          <Button 
                            onClick={handleVerifyToken}
                            disabled={verifyTokenMutation.isPending}
                          >
                            {verifyTokenMutation.isPending ? "Verifying..." : "Verify"}
                          </Button>
                        </div>
                      </div>

                      {verificationData && (
                        <Alert>
                          <CheckCircle className="h-4 w-4" />
                          <AlertDescription>
                            <div className="space-y-2">
                              <p><strong>Token verified successfully!</strong></p>
                              <div className="flex items-center space-x-4">
                                <AccessLevelBadge level={verificationData.accessLevel} />
                                <span className="text-sm text-slate-600">
                                  Uses: {verificationData.usedCount}/{verificationData.maxUses}
                                </span>
                              </div>
                              {verificationData.description && (
                                <p className="text-sm">{verificationData.description}</p>
                              )}
                              <Button 
                                onClick={handleActivateAccess}
                                disabled={activateAccessMutation.isPending}
                                className="mt-4"
                              >
                                {activateAccessMutation.isPending ? "Activating..." : "Activate Beta Access"}
                              </Button>
                            </div>
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="font-semibold mb-3">How to get a beta token:</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          <li>• Contact our development team at stephend8846@gmail.com</li>
                          <li>• Follow us on GitHub @apocalypsecode0 for token giveaways</li>
                          <li>• Join our Discord community for exclusive access</li>
                          <li>• Participate in our developer surveys and feedback programs</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">You're already in the beta!</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        You have {betaStatus.betaAccessLevel} access to DeepBlue IDE Beta
                      </p>
                      <Button onClick={() => setLocation('/ide')}>
                        Launch IDE
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-600">
                          <Shield className="w-5 h-5 mr-2" />
                          Basic Access
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Core IDE functionality</li>
                          <li>• 5 projects maximum</li>
                          <li>• Basic code editor features</li>
                          <li>• Standard themes</li>
                          <li>• Community support</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-purple-600">
                          <Crown className="w-5 h-5 mr-2" />
                          Premium Access
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• All Basic features</li>
                          <li>• Unlimited projects</li>
                          <li>• Advanced debugging tools</li>
                          <li>• AI-powered assistance</li>
                          <li>• Priority support</li>
                          <li>• Beta feature previews</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <Code className="w-5 h-5 mr-2" />
                          Developer Access
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• All Premium features</li>
                          <li>• API access and SDK</li>
                          <li>• Plugin development tools</li>
                          <li>• Direct developer feedback</li>
                          <li>• Early feature access</li>
                          <li>• Technical documentation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <Zap className="w-5 h-5 mr-2" />
                          Admin Access
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• All Developer features</li>
                          <li>• System administration</li>
                          <li>• User management</li>
                          <li>• Analytics dashboard</li>
                          <li>• Beta program management</li>
                          <li>• Direct contact with team</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Feedback Tab */}
                <TabsContent value="feedback" className="space-y-6">
                  {betaStatus ? (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={feedbackForm.category} onValueChange={(value) => 
                            setFeedbackForm(prev => ({ ...prev, category: value }))
                          }>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bug">
                                <div className="flex items-center">
                                  <Bug className="w-4 h-4 mr-2" />
                                  Bug Report
                                </div>
                              </SelectItem>
                              <SelectItem value="feature">
                                <div className="flex items-center">
                                  <Lightbulb className="w-4 h-4 mr-2" />
                                  Feature Request
                                </div>
                              </SelectItem>
                              <SelectItem value="improvement">
                                <div className="flex items-center">
                                  <Settings className="w-4 h-4 mr-2" />
                                  Improvement
                                </div>
                              </SelectItem>
                              <SelectItem value="general">
                                <div className="flex items-center">
                                  <FileText className="w-4 h-4 mr-2" />
                                  General Feedback
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="priority">Priority</Label>
                          <Select value={feedbackForm.priority} onValueChange={(value) => 
                            setFeedbackForm(prev => ({ ...prev, priority: value }))
                          }>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={feedbackForm.title}
                          onChange={(e) => setFeedbackForm(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Brief description of the issue or suggestion"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={feedbackForm.description}
                          onChange={(e) => setFeedbackForm(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Detailed description..."
                          rows={4}
                        />
                      </div>

                      {feedbackForm.category === 'bug' && (
                        <>
                          <div>
                            <Label htmlFor="reproductionSteps">Reproduction Steps</Label>
                            <Textarea
                              id="reproductionSteps"
                              value={feedbackForm.reproductionSteps}
                              onChange={(e) => setFeedbackForm(prev => ({ ...prev, reproductionSteps: e.target.value }))}
                              placeholder="Step-by-step instructions to reproduce the issue"
                              rows={3}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expectedBehavior">Expected Behavior</Label>
                              <Textarea
                                id="expectedBehavior"
                                value={feedbackForm.expectedBehavior}
                                onChange={(e) => setFeedbackForm(prev => ({ ...prev, expectedBehavior: e.target.value }))}
                                placeholder="What should have happened?"
                                rows={2}
                              />
                            </div>

                            <div>
                              <Label htmlFor="actualBehavior">Actual Behavior</Label>
                              <Textarea
                                id="actualBehavior"
                                value={feedbackForm.actualBehavior}
                                onChange={(e) => setFeedbackForm(prev => ({ ...prev, actualBehavior: e.target.value }))}
                                placeholder="What actually happened?"
                                rows={2}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div>
                        <Label>Overall Rating</Label>
                        <div className="flex space-x-1 mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Button
                              key={star}
                              variant="ghost"
                              size="sm"
                              onClick={() => setFeedbackForm(prev => ({ ...prev, rating: star }))}
                              className="p-1"
                            >
                              <Star 
                                className={`w-6 h-6 ${star <= feedbackForm.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={handleSubmitFeedback}
                        disabled={submitFeedbackMutation.isPending}
                        className="w-full"
                      >
                        {submitFeedbackMutation.isPending ? "Submitting..." : "Submit Feedback"}
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Beta Access Required</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        You need beta access to submit feedback. Please enter your beta token first.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}