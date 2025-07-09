
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Shield, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-ethiopian-green" />,
      title: t('benefits.admin'),
      description: 'Automate attendance, grading, and administrative tasks'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-ethiopian-green" />,
      title: t('benefits.collection'),
      description: 'Integrated payment systems with Telebirr, Chapa, and CBE Birr'
    },
    {
      icon: <Shield className="w-8 h-8 text-ethiopian-green" />,
      title: t('benefits.reports'),
      description: 'Automated reports that comply with MoE and ESDP V standards'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-ethiopian-green" />,
      title: t('benefits.offline'),
      description: 'Full functionality without internet connection'
    },
    {
      icon: <Globe className="w-8 h-8 text-ethiopian-green" />,
      title: t('benefits.local'),
      description: 'Native support for Amharic, Afaan Oromo, and English'
    }
  ];

  const features = [
    'Complete Student Management',
    'Financial Management & Fee Collection',
    'HR & Staff Management',
    'Academic Management & Grading',
    'Examination Management',
    'Certificate Generation',
    'Transport Management',
    'Parent Communication System'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50 py-20">
        <div className="absolute inset-0 ethiopian-gradient-subtle"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-ethiopian-green/10 rounded-full text-ethiopian-green font-medium text-sm mb-6">
              🇪🇹 {t('hero.subtitle')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-ethiopian-green hover:bg-ethiopian-green/90 text-white px-8">
                <Link to="/contact">
                  {t('hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-ethiopian-green text-ethiopian-green hover:bg-ethiopian-green/10 px-8">
                <Link to="/solutions">
                  {t('hero.secondary_cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Ethiopian Schools Choose Mela360°
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built software that understands the unique challenges of Ethiopian educational institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-ethiopian-green/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything Your School Needs in One Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From student enrollment to certificate generation, Mela360° handles every aspect of school administration with Ethiopian context in mind.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ethiopian-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-ethiopian-green hover:bg-ethiopian-green/90">
                  <Link to="/modules">
                    Explore All Modules <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-ethiopian-green/10 rounded-lg">
                    <span className="font-medium">Active Students</span>
                    <span className="text-2xl font-bold text-ethiopian-green">2,847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-ethiopian-yellow/10 rounded-lg">
                    <span className="font-medium">Fee Collection Rate</span>
                    <span className="text-2xl font-bold text-ethiopian-red">98%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">Time Saved Monthly</span>
                    <span className="text-2xl font-bold text-blue-600">80hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ethiopian-green to-ethiopian-yellow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Ethiopian schools already using Mela360° to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-ethiopian-green hover:bg-gray-100 px-8">
              <Link to="/contact">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              <Link to="/roi-calculator">
                Calculate Your Savings
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
