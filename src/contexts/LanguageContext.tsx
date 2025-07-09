
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'am' | 'or';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.roi': 'ROI Calculator',
    'nav.modules': 'Modules',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.demo': 'Request Demo',
    
    // Homepage
    'hero.title': 'School Management Made Simple',
    'hero.subtitle': 'Mela360° - Built in Ethiopia. Built for Ethiopian Schools.',
    'hero.description': 'Complete school management software supporting Amharic, Afaan Oromo, and English. Works offline and online with MoE compliance.',
    'hero.cta': 'Start Free Trial',
    'hero.secondary_cta': 'Watch Demo',
    
    // Benefits
    'benefits.admin': 'Reduce Admin Time by 75+ Hours/Month',
    'benefits.collection': 'Boost Fee Collection from 65% to 98%',
    'benefits.reports': 'MoE-Ready Reports in 1 Click',
    'benefits.offline': 'Works Offline - No Internet Needed',
    'benefits.local': 'Supports Local Languages & Payment Tools',
    
    // Pricing
    'pricing.title': 'Choose Your Plan',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.contact': 'Contact for Pricing',
    'pricing.etb': 'ETB',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.get_started': 'Get Started',
    'common.contact_us': 'Contact Us',
  },
  am: {
    // Navigation
    'nav.home': 'ቤት',
    'nav.solutions': 'መፍትሄዎች',
    'nav.pricing': 'ዋጋ',
    'nav.roi': 'ትርፍ ዲሞ',
    'nav.modules': 'ሞጁሎች',
    'nav.testimonials': 'ምስክርነቶች',
    'nav.contact': 'ኮንታክት',
    'nav.demo': 'ዴሞ ይጠይቁ',
    
    // Homepage
    'hero.title': 'የት/ቤት አስተዳደር ቀላል ሆነ',
    'hero.subtitle': 'ሜላ360° - በኢትዮጵያ የተሰራ። ለኢትዮጵያ ት/ቤቶች የተሰራ።',
    'hero.description': 'ሙሉ የት/ቤት አስተዳደር ሶፍትዌር አማርኛ፣ አፋን ኦሮሞ እና እንግሊዝኛን ይደግፋል። ካለ እና ከሌለ ኢንተርኔት ይሰራል።',
    'hero.cta': 'ነፃ ሙከራ ይጀምሩ',
    'hero.secondary_cta': 'ዴሞ ይመልከቱ',
    
    // Benefits
    'benefits.admin': 'የአስተዳደር ጊዜን በ75+ ሰዓት/ወር ይቀንሱ',
    'benefits.collection': 'የክፍያ መሰብሰብን ከ65% ወደ 98% ያሳድጉ',
    'benefits.reports': 'የትምህርት ሚኒስቴር ሪፖርቶች በ1 ጠቅታ',
    'benefits.offline': 'ካለ ኢንተርኔት ይሰራል',
    'benefits.local': 'የአከባቢ ቋንቋዎችን እና የክፍያ መሳሪያዎችን ይደግፋል',
    
    // Pricing
    'pricing.title': 'እቅድዎን ይምረጡ',
    'pricing.starter': 'መጀመሪያ',
    'pricing.pro': 'ፕሮ',
    'pricing.enterprise': 'ኢንተርፕራይዝ',
    'pricing.contact': 'ለዋጋ ያግኙን',
    'pricing.etb': 'ብር',
    
    // Common
    'common.learn_more': 'ተጨማሪ ይወቁ',
    'common.get_started': 'ይጀምሩ',
    'common.contact_us': 'ያግኙን',
  },
  or: {
    // Navigation
    'nav.home': 'Mana',
    'nav.solutions': 'Furmaatota',
    'nav.pricing': 'Gatii',
    'nav.roi': 'Shallaggii',
    'nav.modules': 'Kutaalee',
    'nav.testimonials': 'Dhugaa-baatota',
    'nav.contact': 'Qunnamtii',
    'nav.demo': 'Demo gaafadhu',
    
    // Homepage
    'hero.title': 'Bulchiinsa Mana-Barnoota Salphaa',
    'hero.subtitle': 'Mela360° - Itoophiyaa keessatti hojjetame. Mana-barnootota Itoophiyaatiif hojjetame.',
    'hero.description': 'Sagantaan bulchiinsaa mana-barnoota guutuu Afaan Amaaraa, Afaan Oromoo fi Afaan Ingilizii deeggartu. Interneetii fi otuu hin jiraatin hojjeta.',
    'hero.cta': 'Qormaata bilisaa jalqabi',
    'hero.secondary_cta': 'Demo ilaali',
    
    // Benefits
    'benefits.admin': 'Yeroo Bulchiinsaa sa\'aatii 75+ ji\'aa keessaa hir\'isi',
    'benefits.collection': 'Walitti-qabinsa kaffaltii %65 irraa gara %98tti dabali',
    'benefits.reports': 'Gabaasota MoE qopheessoo ta\'e kutaa 1 tiin',
    'benefits.offline': 'Interneetii malee hojjeta',
    'benefits.local': 'Afaanota naannoo fi meeshaalee kaffaltii deeggarti',
    
    // Pricing
    'pricing.title': 'Karoorri kee filadhu',
    'pricing.starter': 'Jalqaba',
    'pricing.pro': 'Ogummaa',
    'pricing.enterprise': 'Daldala',
    'pricing.contact': 'Gatiidhaf nu quunnamaa',
    'pricing.etb': 'Birr',
    
    // Common
    'common.learn_more': 'Dabalataan baradhu',
    'common.get_started': 'Jalqabi',
    'common.contact_us': 'Nu quunnamaa',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
