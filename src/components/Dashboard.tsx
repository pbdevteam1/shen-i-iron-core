import React from 'react';
import { LayoutDashboard, ClipboardList, Monitor, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

import DashboardTab from '@/components/dashboard/DashboardTab';
import RequestsTab from '@/components/dashboard/RequestsTab';
import ScreenShareTab from '@/components/dashboard/ScreenShareTab';
import SettingsTab from '@/components/dashboard/SettingsTab';

const Dashboard: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="relative min-h-screen" dir={dir}>
      {/* Video background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/jbxokvK39mw?autoplay=1&mute=1&loop=1&playlist=jbxokvK39mw&controls=0&showinfo=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=0&rel=0&playsinline=1"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
          style={{ width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '100%' }}
          allow="autoplay; encrypted-media"
          title="Background video"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <Tabs defaultValue="dashboard" dir={dir} className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4 gap-2 bg-muted/80 backdrop-blur-md p-1">
              <TabsTrigger value="dashboard" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.dashboard')}</span>
              </TabsTrigger>
              <TabsTrigger value="requests" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ClipboardList className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.forms')}</span>
              </TabsTrigger>
              <TabsTrigger value="screenshare" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Monitor className="h-4 w-4" />
                <span className="hidden sm:inline">שיתוף מסך</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.settings')}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-0 animate-in fade-in-50"><DashboardTab /></TabsContent>
            <TabsContent value="requests" className="mt-0 animate-in fade-in-50"><RequestsTab /></TabsContent>
            <TabsContent value="screenshare" className="mt-0 animate-in fade-in-50"><ScreenShareTab /></TabsContent>
            <TabsContent value="settings" className="mt-0 animate-in fade-in-50"><SettingsTab /></TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
