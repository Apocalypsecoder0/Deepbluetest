import React, { useState, useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminDashboard } from '@/components/admin/admin-dashboard';
import { BillingSystem } from '@/components/admin/billing-system';
import { SupportSystem } from '@/components/admin/support-system';
import { BetaManagement } from '@/components/admin/beta-management';
import { SystemsStatus } from '@/components/admin/systems-status';
import { AdminLogin } from '@/components/admin/admin-login';
import { DirectoryAuth } from '@/components/admin/directory-auth';
import { AdminConfiguration } from '@/components/admin/admin-configuration';
import DomainConfig from '@/components/admin/domain-config';
import PatchManager from '@/components/admin/patch-manager';
import DevPanel from '@/components/admin/dev-panel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  CreditCard,
  HeadphonesIcon,
  Settings,
  Users,
  Shield,
  Bell,
  Activity,
  BarChart3,
  Database,
  Monitor,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Ticket,
  Star,
  TrendingUp,
  Server,
  Globe,
  Lock,
  Key,
  UserCheck,
  FileText,
  Mail,
  Phone,
  LogOut,
  Code
} from 'lucide-react';

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [isDirectoryAuthenticated, setIsDirectoryAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing sessions on component mount
  useEffect(() => {
    const checkSessions = async () => {
      try {
        // Check directory authentication first
        const dirResponse = await apiRequest('GET', '/api/admin/directory-status');
        const dirData = await dirResponse.json();
        
        if (dirData.authenticated) {
          setIsDirectoryAuthenticated(true);
          
          // Then check admin session
          const adminToken = localStorage.getItem('adminToken');
          const storedAdminData = localStorage.getItem('adminData');
          
          if (adminToken && storedAdminData) {
            try {
              const parsedAdminData = JSON.parse(storedAdminData);
              setAdminData(parsedAdminData);
              setIsAuthenticated(true);
            } catch (error) {
              console.error('Error parsing stored admin data:', error);
              localStorage.removeItem('adminToken');
              localStorage.removeItem('adminData');
            }
          }
        }
      } catch (error) {
        console.log('No existing directory session');
      } finally {
        setIsLoading(false);
      }
    };

    checkSessions();
  }, []);

  const handleLoginSuccess = (data: any) => {
    setIsAuthenticated(true);
    setAdminData(data.admin);
  };

  const handleLogout = async () => {
    try {
      // Call backend logout APIs for both layers
      await apiRequest("POST", "/api/admin/logout", {});
      await apiRequest("POST", "/api/admin/directory-logout", {});
      
      // Clear local session data
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminData');
      
      // Reset local state
      setIsAuthenticated(false);
      setIsDirectoryAuthenticated(false);
      setAdminData(null);
      setSelectedTab('dashboard');
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local data even if API call fails
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminData');
      setIsAuthenticated(false);
      setIsDirectoryAuthenticated(false);
      setAdminData(null);
      window.location.href = '/';
    }
  };

  const handleDirectoryAuthSuccess = () => {
    setIsDirectoryAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Admin Portal...</p>
        </div>
      </div>
    );
  }

  if (!isDirectoryAuthenticated) {
    return <DirectoryAuth onAuthSuccess={handleDirectoryAuthSuccess} />;
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-slate-300">DeepBlue:Octopus IDE Management Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-medium">{adminData?.email || 'Administrator'}</p>
                <p className="text-sm text-slate-300">Admin Portal Access</p>
              </div>
              <Button variant="outline" onClick={handleLogout} className="border-slate-600 text-slate-300">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Bar */}
      <div className="bg-slate-800/30 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-slate-300 text-sm">System Status: Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-500" />
                <span className="text-slate-300 text-sm">Active Users: 2,847</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-purple-500" />
                <span className="text-slate-300 text-sm">Server Load: 23%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-green-600 text-sm font-medium">All Systems Operational</p>
                <p className="text-lg font-semibold text-green-600">Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Admin Interface */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-9">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center space-x-2">
              <HeadphonesIcon className="h-4 w-4" />
              <span>Support</span>
            </TabsTrigger>
            <TabsTrigger value="beta" className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4" />
              <span>Beta</span>
            </TabsTrigger>
            <TabsTrigger value="status" className="flex items-center space-x-2">
              <Monitor className="h-4 w-4" />
              <span>Status</span>
            </TabsTrigger>
            <TabsTrigger value="domains" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Domains</span>
            </TabsTrigger>
            <TabsTrigger value="patches" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Patches</span>
            </TabsTrigger>
            <TabsTrigger value="configuration" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Configuration</span>
            </TabsTrigger>
            <TabsTrigger value="development" className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Development</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing">
            <BillingSystem />
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <SupportSystem />
          </TabsContent>

          {/* Beta Tab */}
          <TabsContent value="beta">
            <BetaManagement />
          </TabsContent>

          {/* Systems Status Tab */}
          <TabsContent value="status">
            <SystemsStatus />
          </TabsContent>

          {/* Domain Configuration Tab */}
          <TabsContent value="domains">
            <DomainConfig />
          </TabsContent>

          {/* Patch Manager Tab */}
          <TabsContent value="patches">
            <PatchManager />
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="configuration">
            <AdminConfiguration />
          </TabsContent>

          {/* Development Panel Tab */}
          <TabsContent value="development">
            <DevPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}