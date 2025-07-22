import React, { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const SummerDiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  // Target date: September 11, 2025
  const targetDate = new Date('2025-09-11T00:00:00').getTime();

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleContactUs = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
        <div className="text-xs text-white/80 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl w-full mx-4 p-0 overflow-hidden bg-gradient-to-br from-ethiopian-green via-ethiopian-green to-ethiopian-yellow rounded-2xl border-0 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Slide Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
          >
            {/* Slide 1 - Summer Discount */}
            <div className="w-full flex-shrink-0 p-8 md:p-12 text-center text-white">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Summer Discount
                </h2>
                
                <div className="py-4">
                  <div className="text-6xl md:text-7xl font-black text-white drop-shadow-lg">
                    70% OFF
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                  <div className="text-sm text-white/80 mb-1">Promo Code:</div>
                  <div className="text-2xl font-mono font-bold text-white tracking-wider">
                    SUMMER70
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-medium">Offer ends in:</span>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Min" />
                    <TimeUnit value={timeLeft.seconds} label="Sec" />
                  </div>
                </div>

                <Button
                  onClick={() => setCurrentSlide(2)}
                  size="lg"
                  className="bg-white text-ethiopian-green hover:bg-white/90 font-semibold px-8 py-3 text-lg rounded-full shadow-lg"
                >
                  See Details
                </Button>
              </div>
            </div>

            {/* Slide 2 - Detailed Offer */}
            <div className="w-full flex-shrink-0 p-6 md:p-8 text-white max-h-[80vh] overflow-y-auto">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Are you ready to transform your school's administration, communication, and learning experience before the new academic year begins?
                </h2>

                <div className="space-y-4 text-white/95 text-sm md:text-base leading-relaxed">
                  <p>
                    <strong>Abiam Technology</strong> is thrilled to introduce an unparalleled offer for visionary schools in Ethiopia!
                  </p>

                  <p>
                    <strong>Limited-Time Offer:</strong> Sign up for our comprehensive School Management System within the next 45 days (during the summer period before back-to-school) and become one of our exclusive Early Adopter clients.
                  </p>

                  <div>
                    <h3 className="text-lg font-bold mb-2">What You Get:</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Massive 70% Discount:</strong> Get an incredible 70% off the total implementation and first-year subscription cost of our powerful School Management System. This is our largest discount ever, designed to reward institutions ready to embrace digital transformation.</li>
                      <li>• <strong>Tailored for Ethiopian Schools:</strong> Designed with local needs and contexts in mind, ensuring seamless integration into your operations.</li>
                      <li>• <strong>Dedicated Support:</strong> Benefit from Abiam Technology's commitment to customer service, with responsive communication, timely setup, and proactive support.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Why This Offer Matters for Your School:</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Save Big:</strong> Unlock significant cost savings on a premium digital solution.</li>
                      <li>• <strong>Future-Proof Your Operations:</strong> Get a head start on streamlining your school's administration and enhancing efficiency before the academic rush.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">How to Claim Your 70% Discount:</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Contact Us Immediately:</strong> Reach out to us through our website or phone to schedule a free, no-obligation consultation and demo.</li>
                      <li>• <strong>Sign Up Within the 45 days Summer Window:</strong> Secure your place as an Early Adopter by finalizing your agreement within the specified summer period before schools reopen.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={handleContactUs}
                    size="lg"
                    className="bg-white text-ethiopian-green hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg flex-1"
                  >
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => setCurrentSlide(1)}
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <button
            onClick={() => setCurrentSlide(1)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === 1 ? 'bg-white' : 'bg-white/40'
            }`}
          />
          <button
            onClick={() => setCurrentSlide(2)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === 2 ? 'bg-white' : 'bg-white/40'
            }`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};