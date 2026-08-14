import { ShieldCheck, UserCheck, Leaf, Clock, Activity, Brain } from '@/components/Icons';

export type TreatmentType = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: { icon: any; title: string }[];
  imageSrc: string;
  whatIsIt: {
    title: string;
    description: string;
    statText: string;
    statHighlight: string;
  };
  typesTitle?: string;
  types: { icon: any; title: string; desc: string }[];
  symptoms: string[];
  symptomsImage: string;
  causes: {
    psychological?: string[];
    physical?: string[];
    general?: string[];
  };
};

export const treatmentsData: Record<string, TreatmentType> = {
  'premature-ejaculation': {
    slug: 'premature-ejaculation',
    category: 'Male Sexual Health',
    title: 'Premature Ejaculation',
    subtitle: 'Treatment & Care',
    description: 'Regain control, build confidence, and enjoy a satisfying sex life with our natural and advanced treatment approach for Premature Ejaculation.',
    highlights: [
      { icon: ShieldCheck, title: '100% Confidential\nConsultation' },
      { icon: ShieldCheck, title: 'Natural & Safe\nTreatments' },
      { icon: UserCheck, title: 'Personalized\nCare' },
      { icon: Leaf, title: 'Long-term\nResults' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'What is Premature Ejaculation?',
      description: 'Premature ejaculation (PE) is a condition where a man ejaculates sooner than he or his partner desires, with little or no control, leading to distress, frustration, or relationship problems.',
      statText: 'Affects ',
      statHighlight: '20–30%',
    },
    typesTitle: 'Types of Premature Ejaculation',
    types: [
      { icon: Clock, title: 'Lifelong (Primary) PE', desc: 'Present from the first sexual experience and happens almost every time.' },
      { icon: UserCheck, title: 'Acquired (Secondary) PE', desc: 'Develops later after previously normal sexual function.' },
      { icon: Activity, title: 'Variable PE', desc: 'Occurs occasionally and not a disorder unless it causes distress.' },
      { icon: Brain, title: 'Subjective PE', desc: 'Feels ejaculation is too quick, but ejaculation time is actually normal.' }
    ],
    symptoms: [
      'Ejaculation before or shortly after penetration',
      'Inability to delay ejaculation',
      'Reduced sexual satisfaction',
      'Anxiety before intercourse',
      'Avoidance of sexual intimacy',
      'Relationship problems'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      psychological: ['Performance anxiety', 'Stress', 'Depression', 'Guilt', 'Relationship conflicts', 'Lack of sexual experience', 'Fear of failure'],
      physical: ['Hormonal imbalance', 'Thyroid disorders', 'Prostatitis', 'Erectile dysfunction', 'Increased penile sensitivity', 'Neurotransmitter abnormalities']
    }
  },
  'erectile-dysfunction': {
    slug: 'erectile-dysfunction',
    category: 'Male Sexual Health',
    title: 'Erectile Dysfunction',
    subtitle: 'Advanced Care',
    description: 'Comprehensive, discrete, and effective treatments to restore your vitality and intimate relationships.',
    highlights: [
      { icon: ShieldCheck, title: 'Expert\nDiagnosis' },
      { icon: ShieldCheck, title: 'Targeted\nTherapies' },
      { icon: UserCheck, title: 'Confidential\nCare' },
      { icon: Leaf, title: 'Holistic\nApproach' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'What is Erectile Dysfunction?',
      description: 'Erectile dysfunction (ED) is the inability to get or keep an erection firm enough to have sexual intercourse. It can be a sign of physical or psychological conditions.',
      statText: 'Common in men over ',
      statHighlight: '40 years old',
    },
    typesTitle: 'Categories of ED',
    types: [
      { icon: Activity, title: 'Organic ED', desc: 'Caused by physical issues like poor blood flow or nerve damage.' },
      { icon: Brain, title: 'Psychogenic ED', desc: 'Rooted in mental health factors such as stress or anxiety.' },
      { icon: Clock, title: 'Mixed ED', desc: 'A combination of both physical and psychological factors.' },
      { icon: UserCheck, title: 'Medication-Induced', desc: 'A side effect of certain prescription drugs.' }
    ],
    symptoms: [
      'Trouble getting an erection',
      'Trouble keeping an erection',
      'Reduced sexual desire',
      'Anxiety regarding sexual performance'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      psychological: ['Stress', 'Anxiety', 'Depression', 'Relationship issues'],
      physical: ['Heart disease', 'Clogged blood vessels', 'High cholesterol', 'High blood pressure', 'Diabetes', 'Obesity']
    }
  },
  'pcos-pcod': {
    slug: 'pcos-pcod',
    category: 'Female Health',
    title: 'PCOS & PCOD',
    subtitle: 'Management & Care',
    description: 'Expert medical guidance and lifestyle interventions to manage PCOS/PCOD and restore hormonal balance.',
    highlights: [
      { icon: ShieldCheck, title: 'Hormonal\nBalance' },
      { icon: ShieldCheck, title: 'Dietary\nGuidance' },
      { icon: UserCheck, title: 'Fertility\nSupport' },
      { icon: Leaf, title: 'Natural\nCare' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'What is PCOS / PCOD?',
      description: 'Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age, characterized by prolonged or infrequent menstrual periods and excess male hormone levels.',
      statText: 'Affects up to ',
      statHighlight: '1 in 10 women',
    },
    typesTitle: 'Main Aspects of PCOS',
    types: [
      { icon: Activity, title: 'Insulin Resistant', desc: 'The most common type, driven by high insulin levels.' },
      { icon: Brain, title: 'Inflammatory', desc: 'Chronic inflammation causing ovaries to produce excess testosterone.' },
      { icon: Clock, title: 'Hidden-Cause', desc: 'Driven by factors like thyroid issues or iodine deficiency.' },
      { icon: UserCheck, title: 'Post-Pill', desc: 'Occurs after stopping oral contraceptives.' }
    ],
    symptoms: [
      'Irregular periods',
      'Heavy bleeding',
      'Hair growth (Hirsutism)',
      'Acne',
      'Weight gain',
      'Male-pattern baldness'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Excess insulin', 'Low-grade inflammation', 'Heredity', 'Excess androgen']
    }
  },
  // Add fallback generic treatment
  'generic': {
    slug: 'generic',
    category: 'Specialized Treatment',
    title: 'Specialized Treatment',
    subtitle: 'Expert Care',
    description: 'Comprehensive, personalized care plans designed to address your specific health needs and restore your wellbeing.',
    highlights: [
      { icon: ShieldCheck, title: 'Expert\nDiagnosis' },
      { icon: ShieldCheck, title: 'Targeted\nTherapies' },
      { icon: UserCheck, title: 'Confidential\nCare' },
      { icon: Leaf, title: 'Holistic\nApproach' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'About This Condition',
      description: 'We provide specialized medical diagnosis and tailored treatment protocols for this condition, ensuring the best possible outcomes for our patients.',
      statText: 'Treated with ',
      statHighlight: 'High Success Rates',
    },
    typesTitle: 'Understanding the Condition',
    types: [
      { icon: Activity, title: 'Clinical Assessment', desc: 'Thorough evaluation of medical history.' },
      { icon: Brain, title: 'Diagnostic Testing', desc: 'Advanced screening to identify the root cause.' },
      { icon: Clock, title: 'Personalized Plan', desc: 'Treatment customized to your specific needs.' },
      { icon: UserCheck, title: 'Ongoing Support', desc: 'Continuous monitoring and care.' }
    ],
    symptoms: [
      'Discomfort or pain',
      'Hormonal imbalances',
      'Fatigue or stress',
      'Impact on daily life'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Genetic factors', 'Lifestyle factors', 'Environmental triggers', 'Underlying medical conditions']
    }
  }
};
