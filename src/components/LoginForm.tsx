import React, { useState } from 'react';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import logo from '@/assets/meiah-logo.png';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const { t, dir } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        toast({ title: t('login.success'), description: t('login.welcome') });
      } else {
        toast({ title: t('login.error'), description: result.error || t('login.invalid'), variant: 'destructive' });
      }
    } catch {
      toast({ title: t('login.error'), description: t('login.invalid'), variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(210,25%,8%)]" dir={dir}>
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl border border-[hsl(210,20%,18%)] bg-[hsl(210,22%,12%)] p-8 shadow-2xl shadow-black/40">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <img src={logo} alt="מי עירון" className="h-24 w-auto object-contain drop-shadow-lg" />
            </div>

            {/* Title */}
            <h1 className="mb-1 text-center text-2xl font-bold text-white">
              {t('login.title')}
            </h1>
            <p className="mb-8 text-center text-sm text-[hsl(210,15%,55%)]">
              {t('app.subtitle')}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[hsl(210,15%,70%)]">
                  {t('login.email')}
                </Label>
                <div className="relative">
                  <Mail className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(210,15%,45%)] ltr:left-3 rtl:right-3" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('login.email')}
                    className="flex h-12 w-full rounded-lg border border-[hsl(210,20%,22%)] bg-[hsl(210,25%,8%)] px-3 py-2 text-sm text-white placeholder:text-[hsl(210,15%,35%)] focus:border-[hsl(207,78%,45%)] focus:outline-none focus:ring-1 focus:ring-[hsl(207,78%,45%)] ltr:pl-10 rtl:pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[hsl(210,15%,70%)]">
                  {t('login.password')}
                </Label>
                <div className="relative">
                  <Lock className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(210,15%,45%)] ltr:left-3 rtl:right-3" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('login.password')}
                    className="flex h-12 w-full rounded-lg border border-[hsl(210,20%,22%)] bg-[hsl(210,25%,8%)] px-3 py-2 text-sm text-white placeholder:text-[hsl(210,15%,35%)] focus:border-[hsl(207,78%,45%)] focus:outline-none focus:ring-1 focus:ring-[hsl(207,78%,45%)] ltr:pl-10 rtl:pr-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-lg bg-[hsl(207,78%,50%)] text-base font-semibold text-white hover:bg-[hsl(207,78%,55%)] transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t('login.loading')}
                  </>
                ) : (
                  t('login.submit')
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
