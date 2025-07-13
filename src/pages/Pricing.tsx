
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter'),
      price: '82,500',
      originalPrice: '150,000',
      discount: '45%',
      period: 'One-time setup',
      description: 'Perfect for small schools with basic needs',
      features: [
        'Student Limit: Up to 500 students',
        'MelaStudent+',
        'MelaAcademics',
        'MelaFinance Basic',
        'MelaDash',
        'MelaReception',
        'MelaCertify',
        'MelaSecure',
        'Support (6 months)',
        'On-site Training',
        '1 year Hosting',
        'Maintenance (Year 2+)',
        'Offline Mode Support',
        'Multi-language (Amharic, Afaan Oromo, Tigirigna)'
      ],
      notIncluded: [
        'Mela360 mobile-app',
        'MelaLibrary',
        'MelaBus',
        'MelaExams',
        'MelaHR+',
        'MelaInventory',
        'Parent Communication (MelaConnect)',
        'MelaAdmin',
        'Payment Gateway Integration (Telebirr, Chapa)',
        'SMS Integration (Ethio Telecom)',
        'Add-Ons (Biometric, LMS, API)',
        'Custom Integrations (API, ERP sync)',
        'Bulk Automation Tools',
        'Advanced Analytics & Custom Reports',
        'Multi-campus Support',
        'Dedicated Account Manager',
        'Custom Development Option'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: t('pricing.pro'),
      price: '227,500',
      originalPrice: '350,000',
      discount: '35%',
      period: 'One-time setup',
      description: 'Most popular choice for growing schools',
      features: [
        'Student Limit: Up to 500 students',
        'MelaStudent+',
        'MelaAcademics',
        'MelaFinance Basic',
        'MelaDash',
        'MelaReception',
        'MelaCertify',
        'MelaHR+',
        'MelaLibrary',
        'MelaExams',
        'MelaInventory',
        'MelaConnect',
        'Payment Gateway Integration (Chapa)',
        'Advanced Analytics & Custom Reports',
        'Support (Year 1)',
        'On-site Training',
        '1 year Hosting',
        '1 Year Maintenance',
        'Offline Mode Support',
        'Multi-language (Amharic, Afaan Oromo, Tigirigna)'
      ],
      notIncluded: [
        'Mela360 mobile-app',
        'MelaBus',
        'SMS Integration (Ethio Telecom)',
        'Add-Ons (Biometric, LMS, API)',
        'Custom Integrations (API, ERP sync)',
        'Bulk Automation Tools',
        'Multi-campus Support',
        'Dedicated Account Manager',
        'Custom Development Option'
      ],
      popular: true,
      color: 'border-ethiopian-green'
    },
    {
      name: t('pricing.enterprise'),
      price: '420,000',
      originalPrice: '600,000',
      discount: '30%',
      period: 'One-time setup',
      description: 'Complete solution for large institutions',
      features: [
        'Student Limit: Up to 500 students',
        'MelaStudent+',
        'MelaAcademics',
        'MelaFinance Basic',
        'MelaDash',
        'MelaReception',
        'MelaCertify',
        'MelaHR+',
        'MelaLibrary',
        'MelaExams',
        'MelaInventory',
        'MelaConnect',
        'Mela360 mobile-app',
        'MelaBus',
        'Payment Gateway Integration (Chapa)',
        'Advanced Analytics & Custom Reports',
        'Support (Year 2)',
        'On-site Training',
        '1 year Hosting',
        '2 Year Maintenance',
        'Offline Mode Support',
        'Multi-language (Amharic, Afaan Oromo, Tigirigna)',
        'SMS Integration (Ethio Telecom)',
        'Add-Ons (Biometric, LMS, API)',
        'Custom Integrations (API, ERP sync)',
        'Bulk Automation Tools',
        'Multi-campus Support',
        'Dedicated Account Manager',
        'Custom Development Option'
      ],
      notIncluded: [],
      popular: false,
      color: 'border-ethiopian-yellow'
    }
  ];

  const modules = [
    { name: 'MelaStudent+', starter: true, pro: true, enterprise: true },
    { name: 'MelaAcademics', starter: true, pro: true, enterprise: true },
    { name: 'MelaFinance (Basic)', starter: true, pro: false, enterprise: false },
    { name: 'MelaFinance (Advanced)', starter: false, pro: true, enterprise: true },
    { name: 'MelaHR+', starter: false, pro: true, enterprise: true },
    { name: 'MelaCertify', starter: false, pro: true, enterprise: true },
    { name: 'MelaBus', starter: false, pro: false, enterprise: true },
    { name: 'MelaConnect', starter: false, pro: false, enterprise: true },
    { name: 'MelaExams', starter: false, pro: true, enterprise: true },
    { name: 'SMS Notifications', starter: false, pro: true, enterprise: true },
    { name: 'Payment Integration', starter: false, pro: true, enterprise: true },
    { name: 'Multi-campus Support', starter: false, pro: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ethiopian-green/5 to-ethiopian-yellow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing designed for Ethiopian schools. No hidden fees, no monthly subscriptions.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-ethiopian-green/10 rounded-full text-ethiopian-green font-medium">
            💡 One-time payment • Lifetime updates • Local support
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'border-2 border-ethiopian-green shadow-xl scale-105' : 'border'} transition-all duration-300 hover:shadow-lg`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ethiopian-green text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">{t('pricing.etb')} {plan.price}</span>
                      {plan.originalPrice && (
                        <div className="flex flex-col items-start">
                          <span className="text-lg text-gray-500 line-through">{t('pricing.etb')} {plan.originalPrice}</span>
                          <span className="text-sm bg-ethiopian-green text-white px-2 py-1 rounded-full font-medium">
                            {plan.discount} OFF
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{plan.period}</p>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-ethiopian-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="pt-6">
                    <Button 
                      asChild 
                      className={`w-full ${plan.popular ? 'bg-ethiopian-green hover:bg-ethiopian-green/90' : 'bg-gray-800 hover:bg-gray-700'}`}
                      size="lg"
                    >
                      <Link to="/contact">
                        {plan.name === 'Enterprise' ? t('pricing.contact') : 'Get Started'}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Module Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Module Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See exactly which modules are included in each plan
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Module</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-ethiopian-green/10">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {modules.map((module, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {module.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {module.starter ? (
                          <Check className="w-5 h-5 text-ethiopian-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-ethiopian-green/5">
                        {module.pro ? (
                          <Check className="w-5 h-5 text-ethiopian-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {module.enterprise ? (
                          <Check className="w-5 h-5 text-ethiopian-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why one-time payment instead of monthly subscription?
              </h3>
              <p className="text-gray-600">
                We understand that Ethiopian schools prefer predictable costs. Our one-time payment model means no surprise bills and you own the software forever with free updates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the setup and training?
              </h3>
              <p className="text-gray-600">
                All plans include initial setup, data migration, staff training, and 90 days of implementation support to ensure smooth transition.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can we upgrade our plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade at any time by paying the difference. All your data and settings are preserved during the upgrade.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee. If Mela360° doesn't meet your needs, we'll provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ethiopian-green to-ethiopian-yellow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose your plan and transform your school management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-ethiopian-green hover:bg-gray-100 px-8">
              <Link to="/contact">
                Get Demo & Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10 px-8">
              <Link to="/roi-calculator">
                Calculate ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
