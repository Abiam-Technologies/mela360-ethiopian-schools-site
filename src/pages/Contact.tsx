import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin, Clock, Users, HelpCircle, Star } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    helpType: "demo",
    fullName: "",
    role: "",
    schoolName: "",
    phoneNumber: "",
    email: "",
    message: "",
    numberOfStudents: "",
    packageInterest: ""
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleHelpTypeChange = (value: string) => {
    setFormData({ ...formData, helpType: value });
    setShowAdditionalFields(value === "quote");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within one business day.");
  };

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day full-access pilot program for qualifying schools. Please select 'Request a Free Demo' in the form to get started."
    },
    {
      question: "Does Mela360° work without internet?",
      answer: "Absolutely. Our system is designed with an 'offline-first' capability, allowing key functions to work in low-connectivity areas and sync later."
    },
    {
      question: "Is the pricing per student?",
      answer: "No, we offer a one-time lifetime license per school, not per student, making it highly affordable and predictable."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Let's Talk About Your School's Future
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fill out the form to request a demo, get a quote, or ask a question. Our team will get back to you within one business day.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Tell us about your school and how we can help you succeed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="helpType">How can we help you?</Label>
                    <Select value={formData.helpType} onValueChange={handleHelpTypeChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Free Demo</SelectItem>
                        <SelectItem value="quote">Get a Quote for a Package Plan</SelectItem>
                        <SelectItem value="question">Ask a General Question</SelectItem>
                        <SelectItem value="feedback">Provide Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role (e.g., Principal) *</Label>
                      <Input
                        id="role"
                        required
                        placeholder="Principal, Director, IT Manager..."
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Name *</Label>
                    <Input
                      id="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number *</Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="+251 9XX XXX XXX"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Additional fields for quote requests */}
                  {showAdditionalFields && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="numberOfStudents">Approximate Number of Students</Label>
                        <Input
                          id="numberOfStudents"
                          type="number"
                          placeholder="e.g., 500"
                          value={formData.numberOfStudents}
                          onChange={(e) => setFormData({ ...formData, numberOfStudents: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="packageInterest">Package of Interest</Label>
                        <Select value={formData.packageInterest} onValueChange={(value) => setFormData({ ...formData, packageInterest: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="starter">Starter</SelectItem>
                            <SelectItem value="pro">Pro</SelectItem>
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us more about your needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-ethiopian-green hover:bg-ethiopian-green/90"
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right Column - Direct Contact */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-ethiopian-green" />
                    Other Ways to Reach Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </h4>
                    <div className="space-y-2 ml-6">
                      <a href="tel:+251941919514" className="text-ethiopian-green hover:underline block">
                        +251 941 91 9514
                      </a>
                      <a href="tel:+251932994194" className="text-ethiopian-green hover:underline block">
                        +251 932 99 4194
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </h4>
                    <div className="space-y-2 ml-6">
                      <a href="mailto:info@abiam.net" className="text-ethiopian-green hover:underline block">
                        info@abiam.net (Sales)
                      </a>
                      <a href="mailto:support@abiam.net" className="text-ethiopian-green hover:underline block">
                        support@abiam.net (Support)
                      </a>
                    </div>
                  </div>

                  {/* Instant Messaging */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Instant Messaging</h4>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/251941919514" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      </a>
                      <a 
                        href="https://t.me/mela360support" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message us on Telegram
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Office Address
                    </h4>
                    <a 
                      href="https://maps.google.com/?q=Hayahulet,+3rd+Floor,+24+Building,+Addis+Ababa,+Ethiopia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ethiopian-green hover:underline ml-6 block"
                    >
                      Hayahulet, 3rd Floor, 24 Building<br />
                      Addis Ababa, Ethiopia
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Business Hours
                    </h4>
                    <div className="ml-6 text-sm text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-ethiopian-green" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-semibold text-foreground mb-2">
                        Q: {faq.question}
                      </h4>
                      <p className="text-muted-foreground">
                        A: {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;