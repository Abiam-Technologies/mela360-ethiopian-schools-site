
import { ArrowRight, Clock, DollarSign, FileText, Wifi, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Solutions = () => {
  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-ethiopian-red" />,
      title: "Administrative Overload",
      problem: "School staff spend 75+ hours monthly on manual paperwork, attendance tracking, and report generation.",
      solution: "Mela360° automates attendance, grading, and generates MoE-compliant reports with one click. Reduce admin time by 75%.",
      impact: "Save 75+ hours monthly"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-ethiopian-red" />,
      title: "Poor Fee Collection",
      problem: "Many schools collect only 65-70% of fees due to manual tracking and limited payment options.",
      solution: "Integrated payment system with Telebirr, Chapa, and CBE Birr. Automated reminders and parent notifications.",
      impact: "Boost collection to 98%"
    },
    {
      icon: <FileText className="w-12 h-12 text-ethiopian-red" />,
      title: "MoE Compliance Challenges",
      problem: "Creating reports for Ministry of Education takes weeks and often contains errors.",
      solution: "Built-in ESDP V compliance with automated report generation that meets all MoE requirements.",
      impact: "Generate reports in 1 click"
    },
    {
      icon: <Wifi className="w-12 h-12 text-ethiopian-red" />,
      title: "Internet Dependency",
      problem: "Rural schools struggle with unreliable internet, making cloud-only solutions unusable.",
      solution: "Fully functional offline mode that syncs when internet is available. No connectivity required for daily operations.",
      impact: "100% uptime guarantee"
    },
    {
      icon: <Globe className="w-12 h-12 text-ethiopian-red" />,
      title: "Language Barriers",
      problem: "Most software only supports English, creating barriers for local teachers and staff.",
      solution: "Native support for Amharic, Afaan Oromo, and English with proper right-to-left text rendering.",
      impact: "Zero language barriers"
    },
    {
      icon: <Users className="w-12 h-12 text-ethiopian-red" />,
      title: "Poor Parent Engagement",
      problem: "Parents are often unaware of their children's progress, leading to poor academic outcomes.",
      solution: "Automated SMS notifications, grade sharing, and fee alerts keep parents informed and engaged.",
      impact: "3x better parent engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ethiopian-green/5 to-ethiopian-yellow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Mela360° Solves Ethiopian School Challenges
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature in Mela360° is designed to address the specific pain points faced by Ethiopian educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Problems and Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {problems.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="border-2 border-ethiopian-red/20 hover:border-ethiopian-red/40 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        {item.icon}
                        <CardTitle className="text-2xl text-ethiopian-red">The Problem</CardTitle>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">{item.problem}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="border-2 border-ethiopian-green/20 hover:border-ethiopian-green/40 transition-all duration-300 bg-ethiopian-green/5">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <ArrowRight className="w-12 h-12 text-ethiopian-green" />
                        <CardTitle className="text-2xl text-ethiopian-green">Mela360° Solution</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-lg mb-4">{item.solution}</p>
                      <div className="inline-flex items-center px-4 py-2 bg-ethiopian-green text-white rounded-full font-semibold">
                        Impact: {item.impact}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measurable Results for Ethiopian Schools
            </h2>
            <p className="text-xl text-gray-600">
              See the real impact Mela360° has on school operations and student outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ethiopian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-ethiopian-green mb-2">75+</h3>
              <p className="text-gray-600">Hours saved monthly per school</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ethiopian-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-ethiopian-yellow mb-2">98%</h3>
              <p className="text-gray-600">Fee collection rate achieved</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ethiopian-red rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-ethiopian-red mb-2">1 Click</h3>
              <p className="text-gray-600">To generate MoE reports</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ethiopian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-ethiopian-blue mb-2">3x</h3>
              <p className="text-gray-600">Better parent engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ethiopian-green to-ethiopian-yellow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Solve Your School's Challenges?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how Mela360° can transform your school's operations with a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-ethiopian-green hover:bg-gray-100 px-8">
              <Link to="/contact">
                Schedule Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              <Link to="/roi-calculator">
                Calculate Your ROI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
