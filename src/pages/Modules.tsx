import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  Award, 
  GraduationCap, 
  UserCheck, 
  CreditCard,
  Calculator,
  BookOpen,
  Bus,
  FileText,
  Shield,
  Package,
  MessageSquare,
  Settings,
  Smartphone,
  Video,
  Scan,
  MessageCircle,
  FileCheck,
  Monitor,
  UserPlus
} from "lucide-react";

const Modules = () => {
  const coreModules = [
    {
      name: "MelaDash",
      icon: BarChart3,
      description: "Central command center providing a quick, high-level overview of your entire school's operations with essential insights and shortcuts to key features.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "MelaReception",
      icon: Users,
      description: "Centralizes all front-office tasks including admission queries, visitor management, complaints, and communication logging for smooth information flow.",
      color: "bg-green-50 text-green-600"
    },
    {
      name: "MelaCertify",
      icon: Award,
      description: "Specializes in creation, management, and bulk printing of official school credentials, streamlining ID cards and certificate issuance for students and staff.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      name: "MelaAcademics",
      icon: GraduationCap,
      description: "The heart of educational delivery, covering academic structure, class organization, timetables, and digital teaching resources with lesson planning tools.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "MelaStudent+",
      icon: UserCheck,
      description: "Comprehensive student lifecycle management including admissions, profiles, attendance tracking, behavior records, and progression with holistic student views.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      name: "MelaFinance",
      icon: CreditCard,
      description: "Streamlines the entire fee management process from setting fee structures and generating invoices to tracking payments and carrying forward balances.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      name: "MelaAccountant",
      icon: Calculator,
      description: "Centralizes core accounting functions with detailed financial tracking, essential reports, income/expense management, and bank transactions.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      name: "MelaLearn",
      icon: BookOpen,
      description: "Focuses on direct learning support with homework assignment and tracking, plus comprehensive library management for physical resources and member activities.",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      name: "MelaBUS",
      icon: Bus,
      description: "Handles logistical aspects of student transportation, streamlining complex management of routes, vehicles, and student transport assignments.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      name: "MelaExams",
      icon: FileText,
      description: "Comprehensively manages the entire examination process from setup and scheduling to mark recording, result generation, and online assessments.",
      color: "bg-red-50 text-red-600"
    },
    {
      name: "MelaHR+",
      icon: Users,
      description: "Centralizes human resource management including staff records, attendance, payroll processing, performance evaluations, and comprehensive leave management.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      name: "MelaSecure",
      icon: Shield,
      description: "Maintains system security and integrity through robust access control, ensuring users only access information relevant to their roles while protecting sensitive data.",
      color: "bg-gray-50 text-gray-600"
    },
    {
      name: "MelaInventory",
      icon: Package,
      description: "Provides tools for tracking and managing all physical assets and consumable items, optimizing resource utilization and controlling item flow.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      name: "MelaConnect",
      icon: MessageSquare,
      description: "Comprehensive communication hub facilitating internal and external communication, from school-wide announcements to direct messaging and custom forms.",
      color: "bg-violet-50 text-violet-600"
    },
    {
      name: "MelaSettings",
      icon: Settings,
      description: "Central configuration module housing all global system settings, allowing administrators to customize payment gateways, languages, security, and integrations.",
      color: "bg-slate-50 text-slate-600"
    },
    {
      name: "MelaMobile-App",
      icon: Smartphone,
      description: "Provides anytime, anywhere access via native mobile applications, enhancing convenience for administrators, teachers, parents, and students with real-time updates.",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  const addOnModules = [
    {
      name: "MelaVirtual",
      icon: Video,
      description: "Virtual classroom integration with Google Meet and Big Blue Button for seamless online learning experiences.",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "MelaBio",
      icon: Scan,
      description: "Advanced biometric and QR code-based attendance system for enhanced security and automated tracking.",
      color: "bg-green-100 text-green-700"
    },
    {
      name: "MelaChat+",
      icon: MessageCircle,
      description: "Advanced communication suite with WhatsApp Business API, Tawk.to chat, and Messenger integration.",
      color: "bg-purple-100 text-purple-700"
    },
    {
      name: "MelaCertify Pro",
      icon: FileCheck,
      description: "Advanced certificate engine with custom templates, digital signatures, and blockchain verification capabilities.",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      name: "MelaLearn Pro",
      icon: Monitor,
      description: "Full-featured Learning Management System with course enrollment, assessments, and progress tracking for comprehensive online education.",
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      name: "MelaRegi",
      icon: UserPlus,
      description: "Advanced online student registration portal with workflow automation, document upload, and approval processes.",
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The All-in-One Platform to Run Your Entire School
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              From student admissions to financial reporting, Mela360° integrates every aspect of your school's operations into one seamless system. Explore our powerful modules below to see how.
            </p>
          </div>
        </div>

        {/* Core Modules Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete school management functionality out of the box
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-ethiopian-green/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {module.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-On Modules Section */}
          <div className="bg-gradient-to-br from-gray-50/50 to-gray-100/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Power Up with Advanced Add-Ons
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailor Mela360° to your school's specific needs with our powerful add-on modules, available for Pro and Enterprise plans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOnModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-2 hover:border-ethiopian-yellow/30">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {module.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-ethiopian-green to-ethiopian-yellow rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to See These Modules in Action?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Our all-in-one platform is ready to transform your school. Schedule a free, personalized demo to see exactly how Mela360° can meet your specific needs.
              </p>
              <Button asChild size="lg" className="bg-white text-ethiopian-green hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                <Link to="/contact">
                  Request a Free Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modules;