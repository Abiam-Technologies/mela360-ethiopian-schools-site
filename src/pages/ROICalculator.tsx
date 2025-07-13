
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    students: 500,
    teachers: 15,
    adminStaff: 3,
    avgSalary: 6000,
    printingCost: 40000,
    currentCollectionRate: 65,
    communicationCost: 15000,
    avgAnnualFeesPerStudent: 1000,
    selectedPackage: 'starter'
  });

  const [showResults, setShowResults] = useState(false);

  const packagePrices = {
    starter: 82500,
    pro: 227500,
    enterprise: 420000
  };

  const calculateROI = () => {
    const annualFeeTotal = inputs.students * inputs.avgAnnualFeesPerStudent; // Use actual input
    const newCollectionRate = 98; // Mela360° target
    
    // Fee Collection Gain
    const feeCollectionGain = (newCollectionRate - inputs.currentCollectionRate) / 100 * annualFeeTotal;
    
    // Current losses calculation
    const currentLosses = inputs.printingCost + ((inputs.currentCollectionRate < 98) ? (98 - inputs.currentCollectionRate) / 100 * annualFeeTotal : 0);
    
    // Admin Time Savings (75 hours/month saved per admin staff)
    const hoursPerMonth = 75;
    const hourlyWage = inputs.avgSalary / (22 * 8); // Monthly salary / working hours
    const adminTimeSavings = inputs.adminStaff * hoursPerMonth * 12 * hourlyWage;
    
    // Paper/Printing Savings (90% reduction)
    const paperSavings = inputs.printingCost * 0.9;
    
    // Communication Savings (80% reduction through SMS automation)
    const communicationSavings = inputs.communicationCost * 0.8;
    
    // Exam Processing Savings
    const examSavings = inputs.teachers * 2000; // ETB 2000 per teacher annually
    
    const totalSavings = feeCollectionGain + adminTimeSavings + paperSavings + communicationSavings + examSavings;
    const systemCost = packagePrices[inputs.selectedPackage as keyof typeof packagePrices];
    const netSavings = totalSavings - systemCost;
    const roiPercentage = (netSavings / systemCost) * 100;
    const paybackMonths = systemCost / (totalSavings / 12);

    return {
      feeCollectionGain,
      adminTimeSavings,
      paperSavings,
      communicationSavings,
      examSavings,
      totalSavings,
      systemCost,
      netSavings,
      roiPercentage,
      paybackMonths,
      hoursPerMonth: inputs.adminStaff * hoursPerMonth,
      currentLosses
    };
  };

  const results = calculateROI();

  const pieData = [
    { name: 'Fee Collection Gain', value: results.feeCollectionGain, color: '#059669' },
    { name: 'Admin Time Savings', value: results.adminTimeSavings, color: '#dc2626' },
    { name: 'Paper Savings', value: results.paperSavings, color: '#d97706' },
    { name: 'Communication Savings', value: results.communicationSavings, color: '#7c3aed' },
    { name: 'Exam Processing', value: results.examSavings, color: '#0891b2' }
  ];

  const barData = [
    { category: 'System Cost', amount: -results.systemCost },
    { category: 'Total Savings', amount: results.totalSavings },
    { category: 'Net Benefit', amount: results.netSavings }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Mela360° ROI Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how much your school can save with Mela360°. Calculate your return on investment and see why Ethiopian schools choose our solution.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-ethiopian-green" />
                  School Information
                </CardTitle>
                <CardDescription>
                  Enter your school's details to calculate potential savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="students">Total Students</Label>
                    <Input
                      id="students"
                      type="number"
                      value={inputs.students}
                      onChange={(e) => setInputs({...inputs, students: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teachers">Number of Teachers</Label>
                    <Input
                      id="teachers"
                      type="number"
                      value={inputs.teachers}
                      onChange={(e) => setInputs({...inputs, teachers: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adminStaff">Admin Staff</Label>
                    <Input
                      id="adminStaff"
                      type="number"
                      value={inputs.adminStaff}
                      onChange={(e) => setInputs({...inputs, adminStaff: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avgSalary">Average Monthly Salary (ETB)</Label>
                    <Input
                      id="avgSalary"
                      type="number"
                      value={inputs.avgSalary}
                      onChange={(e) => setInputs({...inputs, avgSalary: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="printingCost">Annual Printing & Paper Cost (ETB)</Label>
                  <Input
                    id="printingCost"
                    type="number"
                    value={inputs.printingCost}
                    onChange={(e) => setInputs({...inputs, printingCost: parseInt(e.target.value) || 0})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="communicationCost">Annual Communication Cost (ETB)</Label>
                  <Input
                    id="communicationCost"
                    type="number"
                    value={inputs.communicationCost}
                    onChange={(e) => setInputs({...inputs, communicationCost: parseInt(e.target.value) || 0})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avgAnnualFeesPerStudent">Average Annual Fees per Student (ETB)</Label>
                  <Input
                    id="avgAnnualFeesPerStudent"
                    type="number"
                    value={inputs.avgAnnualFeesPerStudent}
                    onChange={(e) => setInputs({...inputs, avgAnnualFeesPerStudent: parseInt(e.target.value) || 0})}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Current Fee Collection Rate: {inputs.currentCollectionRate}%</Label>
                  <Slider
                    value={[inputs.currentCollectionRate]}
                    onValueChange={(value) => setInputs({...inputs, currentCollectionRate: value[0]})}
                    max={95}
                    min={30}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>30%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Mela360° Package</Label>
                  <Select value={inputs.selectedPackage} onValueChange={(value) => setInputs({...inputs, selectedPackage: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - ETB 82,500 (45% off ETB 150,000)</SelectItem>
                      <SelectItem value="pro">Pro - ETB 227,500 (35% off ETB 350,000)</SelectItem>
                      <SelectItem value="enterprise">Enterprise - ETB 420,000 (30% off ETB 600,000)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={() => setShowResults(true)} 
                  className="w-full bg-ethiopian-green hover:bg-ethiopian-green/90"
                  size="lg"
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {showResults && (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-ethiopian-green">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-ethiopian-green">ETB {results.totalSavings.toLocaleString()}</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-ethiopian-green" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-ethiopian-yellow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">ROI</p>
                          <p className="text-2xl font-bold text-ethiopian-yellow">{results.roiPercentage.toFixed(0)}%</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-ethiopian-yellow" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-ethiopian-red">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Payback Period</p>
                          <p className="text-2xl font-bold text-ethiopian-red">{results.paybackMonths.toFixed(1)} months</p>
                        </div>
                        <Clock className="w-8 h-8 text-ethiopian-red" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Time Saved</p>
                          <p className="text-2xl font-bold">{results.hoursPerMonth} hrs/month</p>
                        </div>
                        <Clock className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Savings Breakdown Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Savings Breakdown</CardTitle>
                    <CardDescription>Where your savings come from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `ETB ${Number(value).toLocaleString()}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Financial Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                    <CardDescription>Cost vs Benefits Analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis tickFormatter={(value) => `${value/1000}K`} />
                        <Tooltip formatter={(value) => `ETB ${Number(value).toLocaleString()}`} />
                        <Bar dataKey="amount">
                          {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#ef4444' : '#059669'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Analysis Message */}
                <Card className="bg-muted border-ethiopian-yellow">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground italic">
                        NOTE: These calculations are estimates based on average results from Mela360° pilot schools. Your actual savings may vary.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-ethiopian-green text-white">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold mb-2">
                      You can save ETB {results.netSavings.toLocaleString()} in your first year!
                    </h3>
                    <p className="mb-4 opacity-90">
                      Start your digital transformation journey with Mela360°
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild variant="secondary" size="lg" className="bg-white text-ethiopian-green hover:bg-gray-100">
                        <Link to="/contact">Book Your Free Demo</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white hover:text-ethiopian-green"
                        onClick={() => {
                          const reportData = {
                            totalStudents: inputs.students,
                            adminStaff: inputs.adminStaff,
                            teacherCount: inputs.teachers,
                            avgSalary: inputs.avgSalary,
                            currentPrintingCost: inputs.printingCost,
                            currentCollectionRate: inputs.currentCollectionRate,
                            avgAnnualFees: inputs.avgAnnualFeesPerStudent,
                            selectedPackage: inputs.selectedPackage,
                            packageCost: packagePrices[inputs.selectedPackage as keyof typeof packagePrices],
                            totalSavings: results.totalSavings,
                            paybackMonths: results.paybackMonths,
                            roi: results.roiPercentage,
                            calculatedDate: new Date().toLocaleDateString()
                          };
                          
                          const reportContent = `Mela360° ROI Calculation Report
Generated on: ${reportData.calculatedDate}

School Information:
- Total Students: ${reportData.totalStudents}
- Admin Staff: ${reportData.adminStaff}
- Teachers: ${reportData.teacherCount}
- Average Monthly Salary: ETB ${reportData.avgSalary.toLocaleString()}
- Annual Printing Costs: ETB ${reportData.currentPrintingCost.toLocaleString()}
- Current Fee Collection Rate: ${reportData.currentCollectionRate}%
- Average Annual Fees per Student: ETB ${reportData.avgAnnualFees.toLocaleString()}

Mela360° Package:
- Selected Package: ${reportData.selectedPackage}
- Package Cost: ETB ${reportData.packageCost.toLocaleString()}

Financial Benefits:
- Total Annual Savings: ETB ${reportData.totalSavings.toLocaleString()}
- Return on Investment: ${reportData.roi.toFixed(1)}%
- Payback Period: ${reportData.paybackMonths.toFixed(1)} months

This report shows the estimated financial benefits of implementing Mela360° for your school.
These calculations are estimates based on average results from Mela360° pilot schools.

For a personalized demo and detailed consultation, contact us at:
Phone: +251 941 91 9514 | +251 932 99 4194
Email: info@abiam.net`;
                          
                          const blob = new Blob([reportContent], { type: 'text/plain' });
                          const url = window.URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `Mela360-ROI-Report-${new Date().toISOString().split('T')[0]}.txt`;
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          window.URL.revokeObjectURL(url);
                        }}
                      >
                        Download Detailed ROI Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ROICalculator;
