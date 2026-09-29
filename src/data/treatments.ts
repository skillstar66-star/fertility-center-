import { 
  ShieldCheck, UserCheck, Leaf, Clock, Activity, Brain, 
  Heart, Stethoscope, FlaskConical, Dna, Scale, HeartPulse, 
  Flower2, Users, Dumbbell, Droplets, CheckCircle2 
} from '@/components/Icons';

export type TreatmentFAQ = {
  question: string;
  answer: string;
};

export type TreatmentType = {
  slug: string;
  category: string;
  departmentId: string;
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
    extraParagraphs?: string[];
  };
  typesTitle?: string;
  types?: { icon: any; title: string; desc: string }[];
  symptomsTitle?: string;
  symptoms: string[];
  symptomsImage: string;
  causes: {
    psychological?: string[];
    physical?: string[];
    lifestyle?: string[];
    medical?: string[];
    general?: string[];
  };
  evaluation?: {
    title: string;
    desc: string;
    points?: string[];
  };
  treatmentOptions?: {
    title: string;
    desc: string;
    items?: { title: string; desc: string }[];
  };
  faqs?: TreatmentFAQ[];
  clinicCare?: {
    title: string;
    desc: string;
  };
};

export const treatmentsData: Record<string, TreatmentType> = {
  // 1. Premature Ejaculation
  'premature-ejaculation': {
    slug: 'premature-ejaculation',
    category: 'Sexology & Sexual Wellness',
    departmentId: 'sexology',
    title: 'Premature Ejaculation (PE)',
    subtitle: 'Evidence-Based & Natural Care',
    description: 'Premature ejaculation (PE) is a common male sexual health concern where ejaculation happens sooner than desired and is difficult to control. Our certified doctors offer personalized Ayurvedic and Unani guidance in a 100% confidential environment.',
    highlights: [
      { icon: ShieldCheck, title: '100% Confidential\nConsultation' },
      { icon: Leaf, title: 'Natural Ayurvedic\n& Unani Care' },
      { icon: UserCheck, title: 'Personalized\nTreatment Plans' },
      { icon: Clock, title: '30 Years\nExperience' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'What is Premature Ejaculation?',
      description: 'Premature ejaculation (PE) is a common male sexual health concern where ejaculation happens sooner than desired and is difficult to control. When it happens repeatedly and causes distress, frustration, or affects intimacy, it may be considered premature ejaculation. Occasional early ejaculation is common and does not necessarily mean that a person has PE.',
      statText: 'Affects up to ',
      statHighlight: '20% to 30% of men worldwide',
      extraParagraphs: [
        'The frequency of the problem, level of control, and distress it causes are essential factors when evaluating premature ejaculation.'
      ]
    },
    typesTitle: 'Types of Premature Ejaculation',
    types: [
      { icon: Clock, title: 'Lifelong (Primary) PE', desc: 'Present from the beginning of sexual experiences and usually occurs consistently or frequently. Associated with biological, genetic, or psychological factors.' },
      { icon: Activity, title: 'Acquired (Secondary) PE', desc: 'Develops after a period of previously satisfactory sexual function. May be associated with stress, anxiety, ED, prostate, or thyroid problems.' },
      { icon: UserCheck, title: 'Variable PE', desc: 'Refers to occasional episodes of early ejaculation occurring sooner than desired, not necessarily indicating a persistent medical disorder.' },
      { icon: Brain, title: 'Subjective PE', desc: 'Occurs when a man feels he ejaculates too quickly even though timing is within typical range. Can still cause distress and benefits from guidance.' }
    ],
    symptoms: [
      'Ejaculation sooner than desired',
      'Difficulty delaying ejaculation',
      'Feeling of limited control over ejaculation',
      'Reduced sexual satisfaction',
      'Anxiety or performance frustration',
      'Avoidance of intimacy & relationship difficulties'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      psychological: ['Performance anxiety', 'Stress & depression', 'Relationship difficulties', 'Fear of sexual failure', 'Concerns about performance'],
      physical: ['Erectile dysfunction', 'Prostate-related conditions', 'Thyroid disorders', 'Hormonal conditions', 'Certain medications'],
      lifestyle: ['Poor sleep & ongoing stress', 'Smoking & alcohol consumption', 'Lack of regular physical activity']
    },
    evaluation: {
      title: 'How is Premature Ejaculation Evaluated?',
      desc: 'Evaluation usually begins with a discussion about your sexual and medical history, symptoms, and ability to control ejaculation. A physical examination or additional tests may be recommended when there is a possibility of an underlying medical condition.'
    },
    treatmentOptions: {
      title: 'Treatment and Management',
      desc: 'Treatment depends on the individual\'s symptoms, health history, and contributing factors. There is no single approach suitable for everyone.',
      items: [
        { title: 'Behavioural Techniques', desc: 'Techniques that help improve awareness and control of ejaculation according to individual needs.' },
        { title: 'Counselling & Psychotherapy', desc: 'Support to overcome anxiety, stress, performance concerns, or relationship difficulties.' },
        { title: 'Treatment of Underlying Conditions', desc: 'Addressing contributing conditions such as erectile dysfunction, thyroid, or prostate disorders.' },
        { title: 'Natural Ayurvedic & Unani Herbs', desc: 'Formulations tailored to nourish the reproductive system and strengthen neurological coordination.' },
        { title: 'Combination Approach', desc: 'Combining lifestyle guidance, herbal support, and counselling for lasting wellness.' }
      ]
    },
    faqs: [
      { question: 'What is premature ejaculation?', answer: 'Premature ejaculation is when ejaculation occurs sooner than desired, with limited control, and causes ongoing distress or affects sexual relationships.' },
      { question: 'Is premature ejaculation common?', answer: 'Yes. PE is a common male sexual health concern, although occasional early ejaculation does not necessarily mean a person has PE.' },
      { question: 'Can stress cause premature ejaculation?', answer: 'Yes. Stress and performance anxiety can contribute to PE, although physical, medical, and relationship-related factors may also be involved.' },
      { question: 'Can erectile dysfunction and premature ejaculation occur together?', answer: 'Yes. Erectile dysfunction and premature ejaculation can occur together and may need to be evaluated during the same consultation.' },
      { question: 'Does premature ejaculation always require medication?', answer: 'No. Depending on the individual, management may include behavioural techniques, counselling, treatment of underlying conditions, medication, or a combination of approaches.' },
      { question: 'When should I see a doctor for premature ejaculation?', answer: 'You should consider medical advice if the problem happens repeatedly, is difficult to control, causes distress, or affects sexual intimacy or relationships.' },
      { question: 'Can premature ejaculation be treated?', answer: 'Yes. Several management options are available, depending on the individual\'s symptoms and the factors contributing to the condition.' },
      { question: 'What happens during a premature ejaculation consultation?', answer: 'The doctor will discuss your symptoms, sexual and medical history, and related concerns in total privacy before deciding on an appropriate management approach.' }
    ],
    clinicCare: {
      title: 'Premature Ejaculation Treatment in Coimbatore',
      desc: 'At Kovai Health Center in Coimbatore, patients can discuss their sexual health concerns in a professional and respectful environment, with care based on their individual needs.'
    }
  },

  // 2. Erectile Dysfunction
  'erectile-dysfunction': {
    slug: 'erectile-dysfunction',
    category: 'Sexology & Sexual Wellness',
    departmentId: 'sexology',
    title: 'Erectile Dysfunction (ED)',
    subtitle: 'Comprehensive Assessment & Holistic Recovery',
    description: 'Erectile dysfunction (ED) is the persistent or recurrent inability to achieve or maintain an erection sufficient for satisfactory sexual activity. Identifying root causes helps deliver targeted, effective care.',
    highlights: [
      { icon: ShieldCheck, title: '100% Confidential\nCare' },
      { icon: Activity, title: 'Targeted\nTherapies' },
      { icon: Leaf, title: 'Herbal\nRejuvenation' },
      { icon: UserCheck, title: 'Certified\nSpecialists' }
    ],
    imageSrc: '/image copy 9.png',
    whatIsIt: {
      title: 'What is Erectile Dysfunction?',
      description: 'Erectile dysfunction (ED) is the persistent or recurrent inability to achieve or maintain an erection sufficient for satisfactory sexual activity. Occasional difficulty with erections is common, but when the problem occurs repeatedly, it requires medical evaluation. ED is not simply a sexual problem — it can be associated with conditions such as diabetes, cardiovascular disease, hormonal disorders, neurological problems, psychological factors, or certain medications.',
      statText: 'Frequently associated with ',
      statHighlight: 'Vascular, hormonal & metabolic health',
      extraParagraphs: [
        'Because normal erections depend on healthy blood vessels and nerve function, persistent ED can be an early indicator of underlying metabolic or cardiovascular conditions.'
      ]
    },
    typesTitle: 'Key Contributing Factors',
    types: [
      { icon: Activity, title: 'Vascular & Physical', desc: 'Conditions affecting blood vessels (hypertension, diabetes, cardiovascular disease).' },
      { icon: Brain, title: 'Psychogenic Factors', desc: 'Performance anxiety, stress, depression, and relationship tension.' },
      { icon: Scale, title: 'Hormonal Imbalance', desc: 'Low testosterone, thyroid irregularities, or elevated prolactin levels.' },
      { icon: UserCheck, title: 'Lifestyle & Habits', desc: 'Smoking, alcohol, obesity, poor sleep, and lack of exercise.' }
    ],
    symptoms: [
      'Difficulty achieving an erection',
      'Difficulty maintaining an erection firm enough for intercourse',
      'Reduced sexual confidence or anxiety about performance',
      'Reduced sexual desire or libido',
      'Reduced overall satisfaction and intimate strain'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Diabetes & high blood pressure', 'Cardiovascular & vascular disease', 'Obesity & lipid abnormalities', 'Neurological disorders'],
      psychological: ['Stress & performance anxiety', 'Depression & mental fatigue', 'Relationship friction'],
      lifestyle: ['Smoking & excessive alcohol', 'Physical inactivity & poor sleep patterns']
    },
    evaluation: {
      title: 'How is Erectile Dysfunction Diagnosed?',
      desc: 'Diagnosis is primarily based on a detailed medical and sexual history, evaluating onset, erection quality, morning erections, medications, lifestyle, and existing medical conditions.'
    },
    treatmentOptions: {
      title: 'How is Erectile Dysfunction Treated?',
      desc: 'Treatment is based on the underlying cause, overall health, and individual needs rather than a single standard approach.',
      items: [
        { title: 'Lifestyle & Health Management', desc: 'Managing diabetes, hypertension, weight, and sleep quality to support cardiovascular and erectile health.' },
        { title: 'Ayurvedic & Herbal Formulations', desc: 'Proven natural compounds supporting microvascular blood flow and nervous vitality.' },
        { title: 'Psychological Support & Counselling', desc: 'Guidance to reduce performance anxiety and rebuild sexual confidence.' },
        { title: 'Treatment of Underlying Conditions', desc: 'Targeting endocrine or metabolic disorders contributing to the symptom.' }
      ]
    },
    faqs: [
      { question: 'Is erectile dysfunction a normal part of ageing?', answer: 'No. Although erection difficulties become more common with age, persistent ED should not be considered an inevitable part of ageing. It may have an identifiable and treatable cause.' },
      { question: 'Can stress cause erectile dysfunction?', answer: 'Yes. Stress and anxiety can interfere with sexual arousal and erection, often occurring together with physical factors.' },
      { question: 'Can diabetes cause erectile dysfunction?', answer: 'Yes. Diabetes can affect the blood vessels and nerves involved in erections and is an important medical factor associated with ED.' },
      { question: 'Can erectile dysfunction be treated?', answer: 'Yes. ED can often be managed with appropriate treatment depending on its underlying cause and the individual\'s overall health.' },
      { question: 'Does every man with ED need medication?', answer: 'No. Treatment may involve lifestyle changes, management of underlying conditions, psychological support, herbal care, or other options.' },
      { question: 'When should I see a doctor for erectile dysfunction?', answer: 'You should consider medical evaluation if erection problems are persistent, recurrent, causing distress, or affecting your relationship.' }
    ],
    clinicCare: {
      title: 'Erectile Dysfunction Treatment in Coimbatore',
      desc: 'At Kovai Health Center in Coimbatore, men can discuss erectile and other sexual health concerns in a professional and respectful clinical setting with 30 years of trusted expertise.'
    }
  },

  // 3. Low Sperm Count
  'low-sperm-count': {
    slug: 'low-sperm-count',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Low Sperm Count (Oligospermia)',
    subtitle: 'Comprehensive Semen Health & Fertility Care',
    description: 'Low sperm count means that the concentration of sperm in semen is below expected reference ranges. With proper evaluation and natural Ayurvedic care, sperm parameters can often be improved.',
    highlights: [
      { icon: FlaskConical, title: 'Comprehensive\nSemen Analysis' },
      { icon: Leaf, title: 'Herbal\nSpermatogenesis' },
      { icon: UserCheck, title: 'Fertility\nOptimization' },
      { icon: ShieldCheck, title: 'Confidential\nCare' }
    ],
    imageSrc: '/image copy 10.png',
    whatIsIt: {
      title: 'What is Low Sperm Count?',
      description: 'Low sperm count, medically known as oligospermia, means that the concentration of sperm in semen is below the expected reference range. A low sperm count can reduce the chance of natural conception, but it does not necessarily mean that pregnancy is impossible. Male fertility depends on sperm concentration, motility, morphology, semen quality, and overall reproductive health.',
      statText: 'Evaluated by ',
      statHighlight: 'Concentration, Motility & Morphology',
      extraParagraphs: [
        'A semen analysis and appropriate medical evaluation can assess sperm health and identify factors that may be affecting fertility.'
      ]
    },
    typesTitle: 'Underlying Factors',
    types: [
      { icon: Activity, title: 'Varicocele', desc: 'Enlargement of scrotal veins raising testicular temperature and affecting sperm production.' },
      { icon: Scale, title: 'Hormonal Irregularities', desc: 'Imbalances in testosterone, FSH, LH, or thyroid hormones disrupting spermatogenesis.' },
      { icon: Stethoscope, title: 'Infections & Duct Health', desc: 'Prior reproductive tract infections affecting sperm viability or transport.' },
      { icon: UserCheck, title: 'Lifestyle & Environmental', desc: 'Heat exposure, smoking, alcohol, obesity, and chronic stress.' }
    ],
    symptoms: [
      'Often no noticeable symptoms (asymptomatic)',
      'Difficulty achieving pregnancy with partner',
      'Testicular discomfort or swelling (if varicocele present)',
      'Changes in sexual function or reduced libido in hormonal cases'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Varicocele', 'Reproductive tract infections', 'Undescended testes', 'Previous surgeries'],
      medical: ['Hormonal disorders', 'Anabolic steroid use', 'Chemotherapy or radiation history', 'Chronic illnesses'],
      lifestyle: ['Smoking & excessive alcohol', 'Obesity & poor sleep', 'Chronic stress & lack of physical activity']
    },
    evaluation: {
      title: 'How is Low Sperm Count Diagnosed?',
      desc: 'The main investigation is a semen analysis. Because semen parameters fluctuate, repeat analysis along with physical examination, hormone testing, and scrotal ultrasound may be recommended.'
    },
    treatmentOptions: {
      title: 'Can Low Sperm Count Be Treated?',
      desc: 'Treatment depends on the underlying cause with the goal of supporting natural spermatogenesis.',
      items: [
        { title: 'Treating the Underlying Cause', desc: 'Managing varicocele, hormonal problems, or infections.' },
        { title: 'Ayurvedic & Herbal Spermatogenic Care', desc: 'Authentic herbs (such as Ashwagandha, Safed Musli, Gokshura) supporting sperm count, motility, and vitality.' },
        { title: 'Nutritional & Lifestyle Modification', desc: 'Dietary antioxidants, weight management, avoiding heat and toxins.' },
        { title: 'Assisted Fertility Guidance', desc: 'When natural conception needs additional assistance, coordinating appropriate fertility steps.' }
      ]
    },
    faqs: [
      { question: 'What is a normal sperm count?', answer: 'Sperm concentration is assessed during semen analysis and interpreted together with motility, morphology, and semen volume.' },
      { question: 'Can a man with low sperm count have a child?', answer: 'Yes. A low sperm count can reduce the chances of natural conception, but it does not mean a man cannot father a child.' },
      { question: 'Can lifestyle changes improve sperm count?', answer: 'Yes. Healthy lifestyle modifications, antioxidant nutrition, and stress management support reproductive health and spermatogenesis.' },
      { question: 'Can low sperm count be treated without surgery?', answer: 'In many cases, yes. Management includes lifestyle changes, herbal Ayurvedic treatment, and medical therapy based on the cause.' },
      { question: 'When should I see a doctor for low sperm count?', answer: 'You should consider a fertility evaluation if you have difficulty conceiving after regular unprotected intercourse or have known testicular risk factors.' }
    ],
    clinicCare: {
      title: 'Low Sperm Count Treatment in Coimbatore',
      desc: 'At Kovai Health Center in Coimbatore, men receive expert fertility evaluation and individualized natural care to support sperm parameters and reproductive goals.'
    }
  },

  // 4. Male Hormonal Imbalances
  'male-hormonal-imbalances': {
    slug: 'male-hormonal-imbalances',
    category: 'Male Reproductive Health',
    departmentId: 'male-reproductive',
    title: 'Hormonal Imbalances in Men',
    subtitle: 'Endocrine Health & Vitality Optimization',
    description: 'Hormones play a vital role in male sexual health, fertility, energy, metabolism, and mood. Restoring hormonal balance supports overall male wellbeing.',
    highlights: [
      { icon: Scale, title: 'Hormonal\nAssessment' },
      { icon: HeartPulse, title: 'Vitality &\nEnergy' },
      { icon: Leaf, title: 'Natural\nEndocrine Care' },
      { icon: ShieldCheck, title: 'Confidential\nEvaluation' }
    ],
    imageSrc: '/image copy 14.png',
    whatIsIt: {
      title: 'What Hormonal Imbalance Means in Men',
      description: 'Hormonal imbalance occurs when one or more hormones are outside optimal levels. In men, testosterone is critical, but hormones such as FSH, LH, prolactin, and thyroid hormones also profoundly influence reproductive and general health.',
      statText: 'Affects ',
      statHighlight: 'Libido, sperm production, energy & mood'
    },
    typesTitle: 'Common Hormonal Problems',
    types: [
      { icon: Activity, title: 'Low Testosterone', desc: 'Associated with reduced libido, erectile issues, low energy, muscle reduction, and mood shifts.' },
      { icon: Scale, title: 'FSH & LH Irregularities', desc: 'Pituitary signals regulating sperm production and testicular testosterone synthesis.' },
      { icon: Brain, title: 'Prolactin & Thyroid Changes', desc: 'High prolactin or abnormal thyroid function dampening reproductive and metabolic energy.' },
      { icon: UserCheck, title: 'Metabolic Endocrine Shift', desc: 'Insulin resistance and visceral fat conversion of testosterone to estrogen.' }
    ],
    symptoms: [
      'Reduced sexual desire (libido)',
      'Erectile difficulties',
      'Persistent fatigue or low energy',
      'Reduced sperm count or difficulty conceiving',
      'Mood changes & irritability',
      'Reduced muscle mass & increased body fat',
      'Breast enlargement (gynecomastia)',
      'Reduced body or facial hair'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      medical: ['Testicular or pituitary conditions', 'Thyroid disorders', 'Metabolic syndrome & obesity', 'Certain medications'],
      lifestyle: ['Chronic sleep deprivation', 'Elevated cortisol & ongoing stress', 'Sedentary habits & nutritional deficiencies']
    },
    evaluation: {
      title: 'Evaluation & Diagnosis',
      desc: 'Evaluation begins with detailed medical history, physical assessment, and targeted laboratory hormone profiling (Total & Free Testosterone, LH, FSH, Prolactin, Thyroid panel).'
    },
    treatmentOptions: {
      title: 'Ayurvedic Approach to Hormonal Balance',
      desc: 'At Kovai Health Center, Ayurvedic care is personalized to support natural endocrine balance, nourishment of reproductive tissues (Shukra Dhatu), stress reduction, and lifestyle optimization.'
    },
    faqs: [
      { question: 'What are the common signs of hormonal imbalance in men?', answer: 'Reduced libido, erectile difficulties, fatigue, infertility, changes in muscle or body composition, and mood changes.' },
      { question: 'Can hormonal imbalance affect male fertility?', answer: 'Yes. Hormonal changes directly interfere with healthy sperm production and semen quality.' },
      { question: 'Can Ayurveda help with hormonal imbalance in men?', answer: 'Yes. Ayurvedic herbs and therapies nourish the endocrine system and help restore natural vitality.' },
      { question: 'Can lifestyle affect male hormones?', answer: 'Yes. Sleep, body fat percentage, stress, and exercise significantly influence testosterone and overall endocrine balance.' }
    ],
    clinicCare: {
      title: 'Hormonal Imbalance Treatment in Coimbatore',
      desc: 'Kovai Health Center provides individualized care for men experiencing hormonal, sexual, and reproductive health concerns.'
    }
  },

  // 5. Azoospermia
  'azoospermia': {
    slug: 'azoospermia',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Azoospermia (Zero Sperm Count)',
    subtitle: 'Diagnostic Clarity & Advanced Fertility Guidance',
    description: 'Azoospermia means no sperm are detected in the semen. Understanding whether it is obstructive or non-obstructive is the key to appropriate fertility management.',
    highlights: [
      { icon: Dna, title: 'Detailed Cause\nIdentification' },
      { icon: ShieldCheck, title: 'Obstructive vs\nNon-Obstructive' },
      { icon: Leaf, title: 'Ayurvedic\nTissue Care' },
      { icon: UserCheck, title: 'Fatherhood\nOptions' }
    ],
    imageSrc: '/image copy 13.png',
    whatIsIt: {
      title: 'When There Is No Sperm in the Semen',
      description: 'Azoospermia means that sperm are not detected in the semen. It is an important cause of male infertility, but the finding itself does not explain why sperm are absent. In some men, sperm production is normal but blocked from reaching the semen; in others, production is severely reduced.',
      statText: 'Important distinction: ',
      statHighlight: 'Obstructive vs. Non-Obstructive'
    },
    typesTitle: 'Two Different Forms of Azoospermia',
    types: [
      { icon: Activity, title: 'Obstructive Azoospermia', desc: 'Sperm are produced in testes, but a blockage in the vas deferens or reproductive tract prevents release.' },
      { icon: Dna, title: 'Non-Obstructive Azoospermia', desc: 'Impaired sperm production within the testes or disruption of hormonal signals controlling spermatogenesis.' },
      { icon: UserCheck, title: 'Post-Surgical / Vasectomy', desc: 'Intentional or accidental obstruction following previous pelvic or inguinal surgical procedures.' },
      { icon: Scale, title: 'Hormonal / Hypogonadotropic', desc: 'Insufficient pituitary hormones (LH/FSH) failing to stimulate sperm production.' }
    ],
    symptoms: [
      'No visible change in semen appearance or volume',
      'Normal erections, sexual desire, and ejaculation in most men',
      'Discovered during fertility evaluation for difficulty conceiving',
      'Signs of underlying causes (small testicular volume, varicocele, hormonal signs in some cases)'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Ductal blockage or absence of vas deferens', 'Prior surgeries (hernia, pelvic)', 'Infections causing epididymal scarring'],
      medical: ['Testicular disorders & genetic conditions', 'Hormonal deficiencies', 'Chemotherapy or radiation history']
    },
    evaluation: {
      title: 'What a Doctor Looks For',
      desc: 'Careful evaluation includes medical history, testicular physical examination, repeat centrifugated semen analysis, FSH and testosterone hormone tests, and scrotal ultrasound.'
    },
    treatmentOptions: {
      title: 'Treatment Based on the Root Cause',
      desc: 'There is no single treatment for every man with azoospermia. If hormonal, natural Ayurvedic restoration may be considered. In obstructive cases, surgical correction or sperm retrieval options are evaluated.'
    },
    faqs: [
      { question: 'Does azoospermia mean I cannot have children?', answer: 'Not necessarily. Fatherhood possibilities depend on whether sperm production is preserved, the underlying cause, and available fertility options.' },
      { question: 'Can a man with azoospermia still produce sperm?', answer: 'Yes. In obstructive azoospermia, the testes may produce sperm normally even though it cannot enter the ejaculate.' },
      { question: 'Is azoospermia the same as a low sperm count?', answer: 'No. Low sperm count means sperm are present at reduced concentration; azoospermia means zero sperm are detected.' },
      { question: 'Does azoospermia cause sexual problems?', answer: 'Not necessarily. Many men with azoospermia have completely normal sexual desire, erections, and ejaculation.' }
    ],
    clinicCare: {
      title: 'Azoospermia Treatment in Coimbatore',
      desc: 'Kovai Health Center offers consultation for men with azoospermia, focusing on understanding individual reproductive health and planning care accordingly.'
    }
  },

  // 6. Anejaculation
  'anejaculation': {
    slug: 'anejaculation',
    category: 'Sexology & Sexual Wellness',
    departmentId: 'sexology',
    title: 'Anejaculation (Non-Ejaculation)',
    subtitle: 'Neurological, Hormonal & Intimate Care',
    description: 'Anejaculation is the inability to release semen during ejaculation. Identifying whether it is true anejaculation, anorgasmia, or retrograde ejaculation is essential.',
    highlights: [
      { icon: Activity, title: 'Precise\nDiagnosis' },
      { icon: ShieldCheck, title: '100% Confidential\nConsultation' },
      { icon: Leaf, title: 'Natural Nerve\nSupport' },
      { icon: UserCheck, title: 'Fertility\nGuidance' }
    ],
    imageSrc: '/image copy 15.png',
    whatIsIt: {
      title: 'What is Anejaculation?',
      description: 'Anejaculation is the inability to release semen during ejaculation. A man may have normal erections and sexual desire but be unable to ejaculate semen. It is different from azoospermia (where semen is present without sperm) and retrograde ejaculation (where semen flows into the bladder).',
      statText: 'Requires distinction from ',
      statHighlight: 'Retrograde Ejaculation & Anorgasmia'
    },
    typesTitle: 'Why Ejaculation Can Stop',
    types: [
      { icon: Brain, title: 'Nerve-Related Issues', desc: 'Diabetic neuropathy, spinal cord conditions, multiple sclerosis, or pelvic nerve injury.' },
      { icon: UserCheck, title: 'Medication-Induced', desc: 'Antidepressants, alpha-blockers, blood pressure drugs, or prostate medicines.' },
      { icon: Scale, title: 'Hormonal Imbalance', desc: 'Testosterone deficiencies or thyroid irregularities.' },
      { icon: Clock, title: 'Psychological Factors', desc: 'Situational anxiety, stress, or relationship difficulties.' }
    ],
    symptoms: [
      'Absence of semen during climax or intercourse',
      'Orgasm without visible semen expulsion (dry orgasm)',
      'Difficulty or inability to reach orgasm in some cases',
      'Difficulty with natural conception'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Diabetic neuropathy', 'Pelvic or prostate surgery', 'Spinal cord conditions'],
      medical: ['Certain medications', 'Hormonal deficiencies'],
      psychological: ['Severe performance anxiety', 'Stress & relationship factors']
    },
    evaluation: {
      title: 'How is Anejaculation Evaluated?',
      desc: 'Evaluation looks into whether ejaculation occurs in some situations (like masturbation), medication history, neurological health, and post-ejaculatory urine examination to check for retrograde semen.'
    },
    faqs: [
      { question: 'Can a man have an orgasm without ejaculating?', answer: 'Yes. Some men experience the sensation of orgasm without visible semen being expelled.' },
      { question: 'Is anejaculation the same as azoospermia?', answer: 'No. Anejaculation means no semen is expelled; azoospermia means ejaculation occurs normally but sperm are absent from the semen.' },
      { question: 'Can medicines cause anejaculation?', answer: 'Yes. Certain antidepressants, blood pressure, and prostate medications can interfere with ejaculation.' },
      { question: 'Can anejaculation be treated?', answer: 'Treatment depends on its cause. Addressing underlying medical, medication-related, neurological, or psychological factors may help.' }
    ],
    clinicCare: {
      title: 'Anejaculation Treatment in Coimbatore',
      desc: 'Kovai Health Center provides consultation for men experiencing ejaculation difficulties, sexual concerns, and fertility-related problems.'
    }
  },

  // 7. Varicocele
  'varicocele': {
    slug: 'varicocele',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Varicocele',
    subtitle: 'Scrotal Vein Health & Fertility Protection',
    description: 'A varicocele is an enlargement of the veins within the scrotum that drain blood from the testicle. It is common and can influence testicular temperature and sperm parameters.',
    highlights: [
      { icon: Stethoscope, title: 'Physical & Doppler\nEvaluation' },
      { icon: Leaf, title: 'Ayurvedic Venous\nSupport' },
      { icon: UserCheck, title: 'Semen Quality\nProtection' },
      { icon: ShieldCheck, title: 'Non-Surgical\nOptions' }
    ],
    imageSrc: '/image copy 16.png',
    whatIsIt: {
      title: 'What is Varicocele?',
      description: 'A varicocele is an enlargement of the veins within the scrotum that drain blood from the testicle, similar to varicose veins in the legs. It occurs in around 15% of adult men, predominantly on the left side due to venous anatomy.',
      statText: 'Prevalence in men: ',
      statHighlight: 'Around 15% of adult males'
    },
    typesTitle: 'Grading of Varicocele',
    types: [
      { icon: Activity, title: 'Grade 1 Varicocele', desc: 'Small size, palpable only during the Valsalva maneuver (straining).' },
      { icon: Stethoscope, title: 'Grade 2 Varicocele', desc: 'Medium size, palpable during physical examination without straining, not visibly noticeable.' },
      { icon: UserCheck, title: 'Grade 3 Varicocele', desc: 'Large size, easily visible and palpable through scrotal skin ("bag of worms" appearance).' },
      { icon: Clock, title: 'Bilateral Varicocele', desc: 'Present on both left and right sides of the scrotum.' }
    ],
    symptoms: [
      'Dull or aching discomfort in the scrotum',
      'Feeling of scrotal heaviness or dragging sensation',
      'Enlarged, visibly twisted scrotal veins',
      'Difference in size between testicles (testicular atrophy)',
      'Reduced sperm count, motility, or morphology'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Incompetent or malfunctioning venous valves in the spermatic cord', 'Elevated hydrostatic pressure in left testicular vein', 'Increased scrotal temperature']
    },
    evaluation: {
      title: 'Diagnosis & Clinical Assessment',
      desc: 'Physical examination standing and supine with Valsalva maneuver, paired with high-resolution Scrotal Color Doppler Ultrasound to evaluate reflux and vein diameter.'
    },
    faqs: [
      { question: 'Can varicocele cause infertility?', answer: 'It can affect sperm production and quality in some men, though not every man with varicocele will experience fertility problems.' },
      { question: 'Can varicocele affect testosterone?', answer: 'In some men, varicocele may be associated with reduced testosterone production.' },
      { question: 'Does every varicocele need surgery?', answer: 'No. Small, painless varicoceles without fertility impairment can often be monitored and supported with conservative and Ayurvedic therapies.' },
      { question: 'Can varicocele disappear on its own?', answer: 'A varicocele generally does not disappear on its own. Treatment is determined by symptoms and semen parameters.' }
    ],
    clinicCare: {
      title: 'Varicocele Treatment in Coimbatore',
      desc: 'Kovai Health Center provides specialized consultation for men with varicocele and related fertility concerns.'
    }
  },

  // 8. Hydrocele
  'hydrocele': {
    slug: 'hydrocele',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Hydrocele',
    subtitle: 'Scrotal Swelling Evaluation & Care',
    description: 'A hydrocele is a collection of fluid around the testicle that causes painless scrotal swelling. Proper clinical assessment helps distinguish it from other testicular conditions.',
    highlights: [
      { icon: Droplets, title: 'Painless Swelling\nAssessment' },
      { icon: Stethoscope, title: 'Ultrasound\nVerification' },
      { icon: Leaf, title: 'Natural Fluid\nManagement' },
      { icon: ShieldCheck, title: 'Comfort &\nCare' }
    ],
    imageSrc: '/image copy 17.png',
    whatIsIt: {
      title: 'How Does Hydrocele Occur?',
      description: 'A hydrocele develops when fluid accumulates in the sheath surrounding the testicle (tunica vaginalis). It is usually painless and may develop on one or both sides due to inflammation, injury, or patent peritoneal connection.',
      statText: 'Common feature: ',
      statHighlight: 'Smooth, painless scrotal enlargement'
    },
    typesTitle: 'Types of Hydrocele',
    types: [
      { icon: Droplets, title: 'Communicating Hydrocele', desc: 'Open connection between abdominal cavity and scrotum allowing fluid movement.' },
      { icon: Activity, title: 'Non-Communicating Hydrocele', desc: 'Closed peritoneal connection with fluid trapped in the tunica vaginalis.' },
      { icon: Stethoscope, title: 'Hydrocele of the Cord', desc: 'Fluid collection along the spermatic cord rather than surrounding the testicle.' },
      { icon: UserCheck, title: 'Secondary / Reactive', desc: 'Develops following testicular inflammation, trauma, or infection.' }
    ],
    symptoms: [
      'Painless swelling and enlargement of the scrotum',
      'Sensation of heaviness, fullness, or dragging discomfort',
      'Difficulty or discomfort when sitting, walking, or during activity if large'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Incomplete closure of processus vaginalis', 'Testicular inflammation or infection (epididymitis)', 'Scrotal trauma or injury']
    },
    faqs: [
      { question: 'Is hydrocele dangerous?', answer: 'Most hydroceles are not dangerous, but any new scrotal swelling should be evaluated to rule out other testicular conditions.' },
      { question: 'Does hydrocele cause pain?', answer: 'A hydrocele is usually painless, although large ones can cause heaviness and pressure.' },
      { question: 'Does hydrocele always require surgery?', answer: 'No. Small, painless hydroceles can often be monitored under medical supervision.' }
    ]
  },

  // 9. Sexual Wellness / Sexologist in Coimbatore
  'sexual-wellness': {
    slug: 'sexual-wellness',
    category: 'Sexology & Sexual Wellness',
    departmentId: 'sexology',
    title: 'Sexology & Sexual Wellness',
    subtitle: 'Confidential & Expert Care in Coimbatore',
    description: 'Sexual health is a vital component of overall wellbeing. Our experienced sexologists provide compassionate, judgment-free consultations for individuals and couples in Coimbatore.',
    highlights: [
      { icon: ShieldCheck, title: '100% Confidential\nConsultations' },
      { icon: UserCheck, title: 'Certified\nSexologists' },
      { icon: Leaf, title: 'Ayurvedic & Unani\nTherapies' },
      { icon: Clock, title: '30 Years of\nPatient Trust' }
    ],
    imageSrc: '/image copy 18.png',
    whatIsIt: {
      title: 'Sexology Care in Coimbatore',
      description: 'Sexual health issues such as erectile dysfunction, premature ejaculation, low libido, and performance anxiety are common yet frequently neglected due to hesitation. A qualified sexologist looks beyond immediate symptoms to address underlying vascular, hormonal, nervous, and psychological causes.',
      statText: 'Patients supported: ',
      statHighlight: '10,000+ individuals & couples'
    },
    typesTitle: 'Areas of Evaluation',
    types: [
      { icon: Activity, title: 'Erectile & Ejaculatory Health', desc: 'Comprehensive protocols for ED, PE, delayed ejaculation, and performance confidence.' },
      { icon: Heart, title: 'Libido & Vitality', desc: 'Restoring natural sexual desire, energy levels, and intimate interest.' },
      { icon: Scale, title: 'Hormonal Balance', desc: 'Evaluating testosterone, thyroid, and endocrine balance.' },
      { icon: Users, title: 'Intimacy & Couple Harmony', desc: 'Addressing differences in sexual expectations and performance anxiety.' }
    ],
    symptoms: [
      'Erectile difficulties or premature ejaculation',
      'Reduced sexual desire or lack of satisfaction',
      'Performance anxiety and stress during intimacy',
      'Difficulty reaching climax or painful intercourse',
      'Intimacy concerns affecting married life'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Physical & cardiovascular factors', 'Hormonal imbalances', 'Stress, anxiety & depression', 'Lifestyle habits & medication side effects']
    },
    faqs: [
      { question: 'What does a sexologist treat?', answer: 'A sexologist evaluates and manages concerns involving sexual desire, erections, ejaculation, orgasm, performance anxiety, and related reproductive factors.' },
      { question: 'When should I see a sexologist?', answer: 'Consider consulting when sexual concerns are persistent, recurrent, cause distress, or affect your relationship.' },
      { question: 'Can stress cause sexual problems?', answer: 'Yes. Stress and mental fatigue significantly affect sexual interest, arousal, and performance.' }
    ],
    clinicCare: {
      title: 'Consult a Sexologist in Coimbatore',
      desc: 'Book a private, confidential consultation at Kovai Health Center to discuss your sexual health concerns with 30 years of clinical experience.'
    }
  },

  // 10. PCOS / PCOD
  'pcos-pcod': {
    slug: 'pcos-pcod',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Polycystic Ovary Syndrome (PCOS / PCOD)',
    subtitle: 'Hormonal Balance & Natural Ovulation Care',
    description: 'PCOS is a common hormonal and metabolic condition affecting women of reproductive age. Our natural Ayurvedic treatments focus on regulating cycles, restoring ovulation, and supporting fertility.',
    highlights: [
      { icon: Scale, title: 'Hormonal\nRegulation' },
      { icon: HeartPulse, title: 'Ovulation &\nFertility Support' },
      { icon: Leaf, title: 'Natural Herb-Based\nTherapy' },
      { icon: UserCheck, title: 'Metabolic &\nWeight Balance' }
    ],
    imageSrc: '/image copy 20.png',
    whatIsIt: {
      title: 'What is PCOS / PCOD?',
      description: 'Polycystic Ovary Syndrome (PCOS), commonly called PCOD, is a hormonal and metabolic condition affecting approximately 10–13% of women of reproductive age worldwide. It can influence menstrual cycles, ovulation, androgen levels, fertility, weight, and metabolic health.',
      statText: 'Affects approx. ',
      statHighlight: '10% to 13% of women of reproductive age',
      extraParagraphs: [
        'Importantly, PCOS is manageable through lifestyle, dietary, and natural Ayurvedic therapies, and many women with PCOS conceive naturally with appropriate care.'
      ]
    },
    typesTitle: 'Contributing Factors in PCOS',
    types: [
      { icon: Activity, title: 'Insulin Resistance', desc: 'Elevated insulin stimulating ovarian androgen production and disrupting regular ovulation.' },
      { icon: Scale, title: 'Hormonal Imbalance', desc: 'Elevated LH to FSH ratio and higher androgen activity affecting egg maturation.' },
      { icon: Brain, title: 'Genetic Tendency', desc: 'Familial predisposition to metabolic or ovulatory sensitivities.' },
      { icon: UserCheck, title: 'Metabolic & Lifestyle', desc: 'Weight gain, chronic inflammation, and sleep irregularities aggravating symptoms.' }
    ],
    symptoms: [
      'Irregular, delayed, or absent menstrual periods',
      'Difficulty conceiving or irregular ovulation',
      'Excess facial or body hair growth (hirsutism)',
      'Persistent acne, oily skin, or scalp hair thinning',
      'Weight gain and difficulty losing weight',
      'Velvety darker skin patches (acanthosis nigricans)',
      'Mood swings and fatigue'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Insulin resistance & hyperinsulinemia', 'Elevated androgens', 'Low-grade systemic inflammation'],
      general: ['Genetic predisposition', 'Sedentary lifestyle and dietary patterns']
    },
    evaluation: {
      title: 'How is PCOS Diagnosed?',
      desc: 'Diagnosis is based on a combination of irregular cycles/ovulation, clinical or laboratory signs of elevated androgens, and pelvic ultrasound imaging (after excluding other endocrine disorders).'
    },
    treatmentOptions: {
      title: 'Ayurvedic & Holistic Management of PCOS',
      desc: 'At Kovai Health Center, PCOS care targets the root causes: enhancing metabolic fire (Agni), balancing hormones, clearing ovarian stagnation, and supporting natural ovulation.'
    },
    faqs: [
      { question: 'Is PCOS the same as PCOD?', answer: 'The terms are often used interchangeably in everyday conversation. PCOS (Polycystic Ovary Syndrome) is the medically established term.' },
      { question: 'Can a woman with PCOS become pregnant?', answer: 'Yes. Many women with PCOS achieve healthy natural pregnancies with appropriate lifestyle and natural Ayurvedic care.' },
      { question: 'Does PCOS always cause weight gain?', answer: 'No. PCOS can occur in women of all body types, including lean PCOS.' },
      { question: 'Can PCOS be managed naturally?', answer: 'Yes. Ayurvedic formulations, dietary adjustments, exercise, and stress management are highly effective in regulating cycles and fertility.' }
    ],
    clinicCare: {
      title: 'PCOS Treatment in Coimbatore',
      desc: 'Kovai Health Center offers personalized Ayurvedic protocols for PCOS, addressing menstrual irregularities, hormonal imbalance, and fertility goals.'
    }
  },

  // 11. Ovarian Cyst
  'ovarian-cyst': {
    slug: 'ovarian-cyst',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Ovarian Cysts',
    subtitle: 'Accurate Diagnosis & Natural Resolution',
    description: 'An ovarian cyst is a fluid-filled sac on or within an ovary. Most functional cysts resolve naturally, while pathological cysts require targeted clinical management.',
    highlights: [
      { icon: Stethoscope, title: 'Ultrasound\nMonitoring' },
      { icon: Leaf, title: 'Herbal Anti-\nInflammatory Care' },
      { icon: HeartPulse, title: 'Fertility\nProtection' },
      { icon: ShieldCheck, title: 'Pain Relief &\nComfort' }
    ],
    imageSrc: '/image copy 21.png',
    whatIsIt: {
      title: 'What Are Ovarian Cysts?',
      description: 'The ovaries release eggs and produce hormones. During a menstrual cycle, a follicle may continue to enlarge with fluid instead of releasing an egg, resulting in a cyst. Most functional cysts are benign and harmless.',
      statText: 'Most common type: ',
      statHighlight: 'Benign Functional Cysts'
    },
    typesTitle: 'Types of Ovarian Cysts',
    types: [
      { icon: Activity, title: 'Follicular Cyst', desc: 'Forms when a follicle does not release an egg and continues to enlarge with fluid.' },
      { icon: HeartPulse, title: 'Corpus Luteum Cyst', desc: 'Develops after ovulation if the corpus luteum fills with fluid or blood.' },
      { icon: Stethoscope, title: 'Endometrioma ("Chocolate Cyst")', desc: 'Associated with endometriosis and containing old blood deposits.' },
      { icon: UserCheck, title: 'Dermoid Cyst & Cystadenoma', desc: 'Benign pathological cysts originating from ovarian tissues or surface epithelium.' }
    ],
    symptoms: [
      'Pelvic pain (dull ache or sharp discomfort on one side)',
      'Menstrual irregularities or heavier bleeding',
      'Abdominal bloating or pelvic fullness',
      'Pain during intercourse (deep pelvic discomfort)',
      'Urinary urgency or bowel pressure if cyst is large'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Hormonal changes during cycle', 'Endometriosis', 'Pregnancy', 'Severe pelvic infections']
    },
    faqs: [
      { question: 'Are all ovarian cysts dangerous?', answer: 'No. Most ovarian cysts are benign and functional, resolving on their own over a few cycles.' },
      { question: 'Can ovarian cysts affect fertility?', answer: 'Most simple functional cysts do not affect fertility. However, endometriomas or cysts associated with ovulation disorders may require care.' },
      { question: 'Does every ovarian cyst require surgery?', answer: 'No. Many cysts can be monitored and managed conservatively with Ayurvedic anti-inflammatory care.' }
    ]
  },

  // 12. Uterine Cyst
  'uterine-cyst': {
    slug: 'uterine-cyst',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Uterine & Cervical Cysts',
    subtitle: 'Diagnostic Clarity & Gynecological Care',
    description: 'Cystic changes around the uterus or cervix (such as Nabothian cysts or cystic degeneration in fibroids) are common and usually benign.',
    highlights: [
      { icon: Activity, title: 'Accurate\nLocalization' },
      { icon: Stethoscope, title: 'Gynecological\nAssessment' },
      { icon: Leaf, title: 'Gentle Herbal\nCare' },
      { icon: ShieldCheck, title: 'Privacy &\nGuidance' }
    ],
    imageSrc: '/image copy 22.png',
    whatIsIt: {
      title: 'Types of Cysts Related to the Uterus',
      description: 'The term "uterine cyst" describes various cystic structures around the cervix or uterine wall. Nabothian cysts are small, harmless mucus cysts on the cervix, while cystic fibroids or adenomyotic cysts involve the uterine muscle wall.',
      statText: 'Common finding: ',
      statHighlight: 'Benign Nabothian Cervical Cysts'
    },
    typesTitle: 'Types of Cysts',
    types: [
      { icon: Activity, title: 'Nabothian Cysts', desc: 'Harmless mucus retention cysts on the cervix, often found during routine checks.' },
      { icon: Stethoscope, title: 'Cystic Degeneration in Fibroids', desc: 'Fluid-filled degeneration within a benign uterine fibroid.' },
      { icon: Scale, title: 'Adenomyotic Cysts', desc: 'Cystic spaces within the uterine muscle wall associated with adenomyosis.' },
      { icon: UserCheck, title: 'Inclusion Cysts', desc: 'Small cysts developing following cervical or uterine procedures.' }
    ],
    symptoms: [
      'Often asymptomatic and detected during routine ultrasound',
      'Pelvic pain or heavy menstrual bleeding in fibroid/adenomyosis cases',
      'Discomfort during intercourse in certain cervical conditions'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Blocked cervical mucous glands', 'Uterine fibroids', 'Adenomyosis', 'Previous gynecological procedures']
    },
    faqs: [
      { question: 'Is a uterine cyst dangerous?', answer: 'Most cysts associated with the cervix or uterus are benign and harmless.' },
      { question: 'Does a Nabothian cyst need treatment?', answer: 'Most Nabothian cysts are completely benign and require no treatment.' }
    ]
  },

  // 13. Epididymal Cyst
  'epididymal-cyst': {
    slug: 'epididymal-cyst',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Epididymal Cyst & Spermatocele',
    subtitle: 'Benign Scrotal Lump Assessment & Care',
    description: 'An epididymal cyst is a fluid-filled sac that develops in the epididymis, a coiled tube located behind the testicle that stores and transports sperm. It is a benign (non-cancerous) condition and is quite common in adult men.',
    highlights: [
      { icon: Activity, title: 'Benign Lump\nVerification' },
      { icon: Stethoscope, title: 'Sperm Transport\nProtection' },
      { icon: Leaf, title: 'Natural Herbal\nCare' },
      { icon: ShieldCheck, title: '100% Confidential\nCare' }
    ],
    imageSrc: '/image copy 28.png',
    whatIsIt: {
      title: 'What is an Epididymal Cyst?',
      description: 'An epididymal cyst is a fluid-filled sac that develops in the epididymis, the coiled tube located behind the testicle that stores and transports sperm. It is a benign (non-cancerous) condition and is quite common in adult men.',
      statText: 'Nature: ',
      statHighlight: 'Benign, non-cancerous & manageable'
    },
    typesTitle: 'Types of Epididymal Cysts',
    types: [
      { icon: Activity, title: '1. Simple Epididymal Cyst', desc: 'Contains clear fluid. Usually small and harmless.' },
      { icon: FlaskConical, title: '2. Spermatocele', desc: 'A special type of epididymal cyst that contains sperm and milky fluid. Usually arises from the head of the epididymis.' }
    ],
    symptoms: [
      'Small, smooth, painless lump above or behind the testicle',
      'Feeling of heaviness or dull discomfort in the scrotum if large',
      'Palpable swelling detected during self-examination or routine check'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: [
        'Blockage of small ducts in the epididymis',
        'Previous infection or local inflammation',
        'Trauma or minor injury to the scrotum',
        'Age-related anatomical changes',
        'Most cases occur without any identifiable cause'
      ]
    },
    faqs: [
      { question: 'Is an epididymal cyst dangerous or cancerous?', answer: 'No. Epididymal cysts are completely benign and non-cancerous.' },
      { question: 'Does an epididymal cyst cause male infertility?', answer: 'Most simple cysts do not affect fertility. However, large cysts or surgical removal can impact sperm ducts, which is why conservative Ayurvedic management is often preferred.' }
    ],
    clinicCare: {
      title: 'Epididymal Cyst Evaluation in Coimbatore',
      desc: 'At Kovai Health Center, we provide gentle, non-invasive Ayurvedic care and ultrasound assessment for scrotal and testicular health.'
    }
  },

  // 14. Low Libido Male
  'low-libido-male': {
    slug: 'low-libido-male',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Low Libido in Men (Reduced Sexual Desire)',
    subtitle: 'Hormonal, Psychological & Lifestyle Restoration',
    description: 'Low libido means a decrease in sexual desire, interest, or motivation for sexual activity. It is a common problem among men and can affect relationships, self-confidence, and overall quality of life. A man can have normal erections and fertility but still have low sexual desire.',
    highlights: [
      { icon: Heart, title: 'Desire &\nMotivation' },
      { icon: Scale, title: 'Testosterone &\nHormones' },
      { icon: Brain, title: 'Stress & Mental\nWellness' },
      { icon: Leaf, title: 'Rasayana\nVitality Care' }
    ],
    imageSrc: '/image copy 29.png',
    whatIsIt: {
      title: 'Understanding Low Libido in Men',
      description: 'Low libido means a decrease in sexual desire, interest, or motivation for sexual activity. Low libido is distinct from erectile dysfunction (ED), premature ejaculation, or infertility. A man can have normal erections and fertility but still have low sexual desire.',
      statText: 'Distinct from: ',
      statHighlight: 'Erectile Dysfunction, Premature Ejaculation & Infertility',
      extraParagraphs: [
        'Hormonal imbalances, chronic stress, mental fatigue, relationship conflicts, lifestyle habits, and underlying medical conditions can all contribute to reduced desire.'
      ]
    },
    typesTitle: 'Primary Causes of Male Low Libido',
    types: [
      { icon: Scale, title: '1. Hormonal Imbalances', desc: 'Low Testosterone (Hypogonadism), Elevated Prolactin (Hyperprolactinemia), or Thyroid Disorders affecting desire and energy.' },
      { icon: Brain, title: '2. Psychological Factors', desc: 'Work pressure, financial anxiety, depression, sadness, sleep disturbances, and performance anxiety.' },
      { icon: Users, title: '3. Relationship Issues', desc: 'Frequent arguments, poor communication, lack of emotional intimacy, and trust issues.' },
      { icon: Activity, title: '4. Lifestyle & Medical Conditions', desc: 'Lack of sleep, obesity, alcohol, smoking, sedentary habits, Type 2 Diabetes, hypertension, heart disease, or chronic kidney disease.' },
      { icon: ShieldCheck, title: '5. Medications', desc: 'Antidepressants, anti-anxiety drugs, blood pressure medications, or certain pain medications.' }
    ],
    symptoms: [
      'Reduced interest in sex or sexual activity',
      'Fewer sexual thoughts or fantasies',
      'Decreased desire to initiate intimacy with partner',
      'Less interest in sexual stimulation or responsiveness',
      'Relationship strain or misunderstandings due to lack of sexual interest',
      'Emotional distress, frustration, or fatigue'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: [
        'Low Testosterone (fatigue, loss of muscle mass, weight gain, mood changes)',
        'High Prolactin levels suppressing testosterone synthesis',
        'Thyroid Disorders (Hypothyroidism & Hyperthyroidism)',
        'Type 2 Diabetes, Hypertension & Cardiovascular Conditions',
        'Chronic Kidney Disease & Obstructive Sleep Apnea'
      ],
      psychological: [
        'Work stress, financial issues, and family pressures',
        'Anxiety and persistent worry interfering with arousal',
        'Clinical depression, low mood, and lack of motivation',
        'Relationship friction, lack of communication, and emotional distance'
      ],
      lifestyle: [
        'Lack of quality sleep lowering testosterone production',
        'Obesity and visceral fat increasing estrogen conversion',
        'Excessive alcohol consumption and smoking',
        'Sedentary lifestyle and lack of physical exercise'
      ]
    },
    evaluation: {
      title: 'Comprehensive Male Vitality Evaluation',
      desc: 'Our clinical evaluation identifies underlying hormonal, psychological, and metabolic contributors to restore natural desire:',
      points: [
        'Hormone Panel (Total & Free Testosterone, Prolactin, Thyroid TSH/T3/T4)',
        'Metabolic & Cardiovascular Health Check (Blood Glucose, HbA1c, Blood Pressure)',
        'Confidential Lifestyle, Stress & Relationship Consultation',
        'Medication Review to Identify Libido-Suppressing Drugs'
      ]
    },
    treatmentOptions: {
      title: 'Ayurvedic Rasayana & Vitality Restoration',
      desc: 'At Kovai Health Center, we utilize classical Ayurvedic Rasayana and Vajikarana herbs (such as Ashwagandha, Safed Musli, Gokshura, Shilajit) combined with stress management and lifestyle optimization to naturally restore male libido, stamina, and marital confidence.'
    },
    faqs: [
      { question: 'Is low libido the same as erectile dysfunction?', answer: 'No. Low libido is a reduction in sexual desire, whereas erectile dysfunction is difficulty achieving or maintaining an erection. A man can have normal erections but low desire.' },
      { question: 'Can stress and poor sleep reduce testosterone?', answer: 'Yes. Chronic stress and sleep deprivation significantly suppress testosterone levels and dampen sexual drive.' },
      { question: 'Can Ayurveda help restore male libido naturally?', answer: 'Yes. Ayurvedic Rasayana herbs nourish reproductive tissues (Shukra Dhatu) and help balance hormones naturally without synthetic chemicals.' }
    ],
    clinicCare: {
      title: 'Male Sexual Wellness Consultation in Coimbatore',
      desc: 'Consult our senior doctors in total privacy at Kovai Health Center to restore your vitality and intimate health.'
    }
  },

  // 15. Low Libido Female
  'low-libido-female': {
    slug: 'low-libido-female',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Low Libido in Women (Hypoactive Sexual Desire)',
    subtitle: 'Compassionate, Holistic Female Care',
    description: 'Low libido in women refers to a persistent reduction in sexual desire that causes personal distress. Hormonal, emotional, physical, and relationship factors are gently addressed.',
    highlights: [
      { icon: Heart, title: 'Confidential &\nEmpathetic' },
      { icon: Scale, title: 'Hormonal &\nThyroid Check' },
      { icon: Flower2, title: 'Natural Ayurvedic\nCare' },
      { icon: Users, title: 'Relationship\nHarmony' }
    ],
    imageSrc: '/image copy 24.png',
    whatIsIt: {
      title: 'Understanding Female Sexual Desire',
      description: 'Female sexual desire is influenced by hormones (estrogen, thyroid, prolactin), emotional wellbeing, fatigue, stress, childbirth, breastfeeding, menopause, and relationship connection.',
      statText: 'Focus: ',
      statHighlight: 'Physical, emotional & relationship harmony'
    },
    typesTitle: 'Contributing Factors',
    types: [
      { icon: Scale, title: 'Hormonal Transitions', desc: 'Postpartum, breastfeeding, perimenopause, or thyroid disorders.' },
      { icon: Brain, title: 'Stress & Exhaustion', desc: 'Workload, family caregiving, anxiety, and mental fatigue.' },
      { icon: Flower2, title: 'Physical Discomfort', desc: 'Vaginal dryness, painful intercourse, or pelvic conditions.' },
      { icon: Users, title: 'Relationship Dynamics', desc: 'Communication barriers, unresolved conflict, and emotional distance.' }
    ],
    symptoms: [
      'Reduced interest in sexual intimacy',
      'Fewer sexual thoughts or responsiveness',
      'Discomfort or difficulty becoming aroused',
      'Personal frustration or distress'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Estrogen decrease, thyroid issues, high prolactin', 'Painful intercourse or vaginal dryness'],
      psychological: ['Stress, anxiety, depression, body image concerns'],
      lifestyle: ['Fatigue, poor sleep, medications like antidepressants']
    },
    faqs: [
      { question: 'Is low libido normal in women?', answer: 'Desire fluctuates throughout life. A persistent change is worth evaluating if it causes distress or affects relationships.' },
      { question: 'Can menopause cause low libido?', answer: 'Yes. Hormonal changes and vaginal dryness can reduce desire and comfort.' }
    ]
  },

  // 16. Male Preconception Health Care
  'male-preconception-health-care': {
    slug: 'male-preconception-health-care',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Male Preconceptional Health Care',
    subtitle: 'Preparing Men for Fatherhood & Optimizing Sperm Health',
    description: 'Male preconceptional health care refers to the medical, nutritional, and lifestyle measures taken by a man before trying to conceive a child. The health of the father plays an important role in fertility, pregnancy outcomes, and even the future health of the baby.',
    highlights: [
      { icon: FlaskConical, title: 'Semen Count &\nMotility Boost' },
      { icon: Leaf, title: 'Nutritional &\nHerbal Tonics' },
      { icon: UserCheck, title: 'Lifestyle\nOptimization' },
      { icon: ShieldCheck, title: 'Comprehensive\nAssessment' }
    ],
    imageSrc: '/image copy 30.png',
    whatIsIt: {
      title: 'Why is Male Preconception Health Important?',
      description: 'Male preconceptional health care refers to the medical, nutritional, and lifestyle measures taken by a man before trying to conceive a child. Ideally, men should start preconception care at least 3 months before conception, because sperm production takes approximately 74–90 days.',
      statText: 'Optimal Timing: ',
      statHighlight: 'Start at least 3 months (74–90 days) before conception',
      extraParagraphs: [
        'Good preconception health improves sperm count, motility, and morphology, increases chances of natural conception, reduces infertility delays, decreases the risk of miscarriage, and lowers the risk of genetic abnormalities.'
      ]
    },
    typesTitle: 'Key Benefits of Preconception Care for Men',
    types: [
      { icon: FlaskConical, title: 'Improve Sperm Count & Quality', desc: 'Boosting sperm concentration and cellular vitality.' },
      { icon: HeartPulse, title: 'Improve Motility & Morphology', desc: 'Enhancing swimming velocity and normal sperm structure.' },
      { icon: UserCheck, title: 'Increase Natural Conception Rates', desc: 'Preparing the body for smooth, timely pregnancy.' },
      { icon: ShieldCheck, title: 'Reduce Miscarriage & Genetic Risks', desc: 'Protecting sperm DNA integrity against oxidative stress.' }
    ],
    symptoms: [
      'Planning pregnancy within the next 3–12 months',
      'History of suboptimal semen analysis or fertility delays',
      'Desire to maximize reproductive vitality before conception',
      'Exposure to work stress, heat, smoking, or sedentary lifestyle'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Suboptimal sperm parameters (count, motility, morphology)', 'Varicocele or elevated scrotal temperature', 'Hormonal variations or nutritional deficiencies'],
      lifestyle: ['Smoking, alcohol consumption, sauna/laptop heat exposure', 'Sedentary habits, obesity, poor diet lacking antioxidants', 'Chronic stress and sleep deprivation']
    },
    evaluation: {
      title: 'Preconceptional Screening for Men',
      desc: 'Our preconception assessment evaluates all key determinants of sperm health and paternal wellness:',
      points: [
        'Comprehensive Semen Analysis (Count, Motility, Morphology, DNA Fragmentation)',
        'Hormonal Profile (Total Testosterone, FSH, LH, Prolactin)',
        'Nutritional & Antioxidant Assessment (Zinc, Selenium, Vitamin D, CoQ10)',
        'Personalized Lifestyle & Detoxification Protocol'
      ]
    },
    treatmentOptions: {
      title: 'Ayurvedic Spermatogenic & Rasayana Care',
      desc: 'At Kovai Health Center, prospective fathers receive customized Ayurvedic Rasayana protocols (with Ashwagandha, Kapikacchu, Gokshura, Safed Musli) and dietary antioxidant plans to optimize sperm parameters during the 90-day spermatogenesis window.'
    },
    faqs: [
      { question: 'Why should men start preconception care 3 months in advance?', answer: 'Because the cycle of sperm development (spermatogenesis) takes approximately 74 to 90 days. Actions taken during this window directly shape sperm quality.' },
      { question: 'Can lifestyle changes improve sperm parameters?', answer: 'Yes. Antioxidant-rich nutrition, avoiding heat/smoking/alcohol, and stress reduction significantly improve sperm count and motility.' }
    ],
    clinicCare: {
      title: 'Male Preconception Consultation in Coimbatore',
      desc: 'Book a preconception guidance session at Kovai Health Center to prepare for fatherhood with 30 years of clinical expertise.'
    }
  },

  // 17. Female Preconception Health Care
  'female-preconception-health-care': {
    slug: 'female-preconception-health-care',
    category: 'Female Reproductive Health',
    departmentId: 'female-reproductive',
    title: 'Female Preconception Health Care',
    subtitle: 'Optimizing Health Before Pregnancy',
    description: 'Preconception care helps women optimize ovulatory, hormonal, and nutritional health before pregnancy to support a smooth, healthy journey to motherhood.',
    highlights: [
      { icon: Flower2, title: 'Ovulation &\nCycle Health' },
      { icon: HeartPulse, title: 'Nutritional\nReadiness' },
      { icon: Scale, title: 'Hormonal &\nThyroid Check' },
      { icon: Leaf, title: 'Natural Herbal\nSupport' }
    ],
    imageSrc: '/image copy 26.png',
    whatIsIt: {
      title: 'Benefits of Female Preconception Care',
      description: 'Reviewing menstrual regularities, folic acid supplementation, thyroid levels, blood sugar, weight, and lifestyle before conception ensures the best environment for pregnancy.',
      statText: 'Goal: ',
      statHighlight: 'Healthy conception & safe pregnancy'
    },
    typesTitle: 'Key Recommendations',
    types: [
      { icon: Flower2, title: 'Folic Acid & Nutrition', desc: 'Starting folic acid and balanced nutrition before trying to conceive.' },
      { icon: Scale, title: 'Managing Existing Conditions', desc: 'Optimizing thyroid, diabetes, or PCOS management.' },
      { icon: Activity, title: 'Menstrual Regularity', desc: 'Regulating ovulation and fertile window awareness.' }
    ],
    symptoms: [
      'Planning pregnancy within the coming months',
      'Irregular periods or known conditions (PCOS, thyroid)',
      'Desire for comprehensive pre-pregnancy health optimization'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Nutritional deficiencies', 'Irregular ovulation', 'Unchecked metabolic or thyroid parameters']
    },
    faqs: [
      { question: 'When should a woman start preconception care?', answer: 'Ideally 3 to 6 months before actively trying to conceive.' }
    ]
  },

  // 18. Male Pre-Marital Fitness
  'male-pre-marital-fitness': {
    slug: 'male-pre-marital-fitness',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Male Pre-Marital Fitness & Health Check',
    subtitle: 'Physical Stamina, Reproductive & Sexual Confidence',
    description: 'Premarital fitness evaluates physical fitness, semen parameters, hormonal balance, and sexual health confidence before marriage, establishing a strong and healthy foundation for married life.',
    highlights: [
      { icon: Dumbbell, title: 'Physical &\nSexual Fitness' },
      { icon: FlaskConical, title: 'Semen &\nVitality Check' },
      { icon: Scale, title: 'Testosterone &\nHormone Profile' },
      { icon: ShieldCheck, title: '100% Confidential\nCare' }
    ],
    imageSrc: '/image copy 19.png',
    whatIsIt: {
      title: 'What is Male Pre-Marital Fitness?',
      description: 'Male premarital fitness is a proactive, confidential health evaluation designed to assess reproductive health, physical stamina, hormonal levels, and intimate wellness before marriage. It empowers prospective grooms with medical clarity and confidence.',
      statText: 'Focus: ',
      statHighlight: 'Vitality, Reproductive Health & Sexual Confidence',
      extraParagraphs: [
        'Addressing subtle concerns like performance anxiety, lifestyle stress, or suboptimal sperm parameters early ensures peace of mind and long-term marital happiness.'
      ]
    },
    typesTitle: 'Core Components of Male Premarital Assessment',
    types: [
      { icon: Activity, title: 'Physical Stamina & Fitness', desc: 'Cardiovascular endurance, body composition, and vitality screening.' },
      { icon: FlaskConical, title: 'Semen & Reproductive Vitality', desc: 'Comprehensive semen analysis evaluating count, motility, and morphology.' },
      { icon: Scale, title: 'Testosterone & Hormonal Profile', desc: 'Endocrine screening for testosterone, thyroid, and metabolic balance.' },
      { icon: ShieldCheck, title: 'Confidential Sexual Guidance', desc: 'Clarifying intimate health concerns, performance anxieties, and marital readiness.' }
    ],
    symptoms: [
      'Approaching marriage in the near future',
      'Concerns regarding sexual health, stamina, or erectile confidence',
      'Questions about fertility and reproductive readiness',
      'Desire for confidential medical clarity, reassurance, and guidance'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: ['Undiagnosed hormonal imbalances or low testosterone', 'Suboptimal semen parameters or varicocele', 'Metabolic factors or lifestyle stress'],
      lifestyle: ['High work pressure and lack of physical exercise', 'Poor sleep habits, smoking, or alcohol use', 'Premarital performance anxiety and hesitation']
    },
    evaluation: {
      title: 'Male Premarital Clinical Evaluation',
      desc: 'Our confidential assessment offers complete diagnostic clarity and personalized medical guidance:',
      points: [
        'Comprehensive Semen Analysis (Count, Motility, Morphology & Viability)',
        'Hormonal Profile (Total & Free Testosterone, Prolactin, Thyroid panel)',
        'Cardiovascular & General Health Screening (Blood Pressure, Blood Sugar, BMI)',
        'Confidential Doctor Consultation & Sexual Wellness Education'
      ]
    },
    treatmentOptions: {
      title: 'Ayurvedic Rasayana & Vitality Strengthening',
      desc: 'At Kovai Health Center, we provide personalized Ayurvedic Rasayana tonics, lifestyle guidance, and counseling to enhance stamina, strengthen reproductive tissues (Shukra Dhatu), and ensure supreme confidence.'
    },
    faqs: [
      { question: 'Why is a premarital health check important for men?', answer: 'It provides diagnostic clarity on reproductive vitality, sexual health, and general fitness, resolving doubts and building confidence before marriage.' },
      { question: 'Are premarital consultations confidential?', answer: 'Yes. All discussions, laboratory evaluations, and consultations are 100% private and confidential.' },
      { question: 'Can premarital sexual anxiety be addressed?', answer: 'Yes. Our senior doctors provide empathetic, medical counseling to overcome performance anxiety and misconceptions.' }
    ],
    clinicCare: {
      title: 'Male Premarital Health Check in Coimbatore',
      desc: 'Book a completely private, professional premarital consultation at Kovai Health Center with 30 years of trusted clinical experience.'
    }
  },

  // 18B. Female Pre-Marital Fitness
  'female-pre-marital-fitness': {
    slug: 'female-pre-marital-fitness',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Premarital Fitness in Women',
    subtitle: 'Comprehensive Health, Hormonal & Reproductive Assessment',
    description: 'Premarital fitness in women involves a comprehensive assessment of physical, reproductive, hormonal, mental, and emotional health before marriage or pregnancy planning. It provides an opportunity to identify existing health concerns, address treatable conditions, and support healthy married life and future pregnancy.',
    highlights: [
      { icon: Flower2, title: 'Menstrual &\nHormonal Health' },
      { icon: Stethoscope, title: 'Reproductive &\nGeneral Check' },
      { icon: Heart, title: 'Sexual & Emotional\nWellbeing' },
      { icon: ShieldCheck, title: '100% Confidential\nCare' }
    ],
    imageSrc: '/image copy 25.png',
    whatIsIt: {
      title: 'What is Premarital Fitness in Women?',
      description: 'Premarital fitness is not a pass-or-fail examination. It is a preventive health assessment designed to understand a woman’s individual health needs and provide appropriate guidance before major life changes.',
      statText: 'Core Purpose: ',
      statHighlight: 'Physical, Reproductive, Hormonal & Emotional Health',
      extraParagraphs: [
        'A premarital health assessment is particularly useful when a woman has irregular periods, chronic medical conditions, previous reproductive health problems, a significant family history of inherited disease, or concerns about fertility and married life in a supportive, private clinical environment.'
      ]
    },
    typesTitle: 'Objectives & Key Focus Areas',
    types: [
      { icon: Activity, title: 'Medical & General Health', desc: 'Detailed medical history (diabetes, thyroid, hypertension, previous surgeries) and physical assessment (BMI, blood pressure).' },
      { icon: Flower2, title: 'Menstrual & Hormonal Health', desc: 'Reviewing cycle regularity, flow duration, painful periods, and signs of hormonal imbalance (PCOS, thyroid, endometriosis).' },
      { icon: Stethoscope, title: 'Reproductive Health Assessment', desc: 'Evaluating history of ovarian cysts, fibroids, pelvic health, and preconceptional readiness.' },
      { icon: Heart, title: 'Sexual & Emotional Wellbeing', desc: 'Confidential discussions on intimacy, relationship expectations, contraception, stress, and emotional coping.' },
      { icon: ShieldCheck, title: 'Genetic & Vaccination Review', desc: 'Family history evaluation, genetic risk assessment, and reviewing immunity against infections like rubella.' }
    ],
    symptoms: [
      'Approaching marriage or future pregnancy planning',
      'Irregular, delayed, painful, or heavy menstrual bleeding',
      'History of PCOS, ovarian cysts, thyroid disorders, or endometriosis',
      'Concerns regarding general fitness, weight management, or anemia',
      'Questions regarding sexual health, contraception, and marital expectations',
      'Desire for confidential medical guidance and supportive premarital counselling'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: [
        'Menstrual & Hormonal Conditions (PCOS, Thyroid Disorders, Endometriosis)',
        'Underlying Chronic Health Factors (Diabetes, Hypertension, Autoimmune, Asthma)',
        'Reproductive Tract History (Ovarian Cysts, Uterine Fibroids, Pelvic Infections)',
        'Nutritional Deficiencies (Anemia, Low Ferritin, Vitamin D & B12)'
      ],
      lifestyle: [
        'Nutrition: Balanced diet with whole grains, fruits, vegetables, adequate protein, calcium and iron; limiting sugary drinks and processed foods',
        'Physical Activity: Regular exercise supporting cardiovascular, metabolic, and emotional wellness',
        'Sleep & Rest: Consistent 7–9 hours of quality sleep supporting hormone regulation and daily functioning',
        'Mental Health: Managing premarital stress, anxiety, emotional expectations, and healthy coping mechanisms'
      ],
      general: [
        'Vaccination & Preventive Review: Checking immunity against infections affecting pregnancy (such as Rubella).',
        'Genetic & Family History: Reviewing hereditary health risks and family history with individualized counselling.',
        'Sexual Health Education: Normal sexual function, consent, communication, contraception, and STI prevention.',
        'Individualized Guidance: Testing and advice tailored to personal health needs rather than routine over-testing.'
      ]
    },
    evaluation: {
      title: 'Medical Evaluation & Laboratory Investigations',
      desc: 'Investigations are selected based on age, symptoms, medical history, family history, and pregnancy plans rather than performing every test routinely:',
      points: [
        'Complete Blood Count (CBC) & Iron Studies (when anemia is suspected)',
        'Blood Glucose / HbA1c & Thyroid Function Tests (TSH, T3, T4)',
        'Blood Grouping & Rh Typing, Routine Urine Examination',
        'Vitamin B12 or Vitamin D testing when clinically indicated',
        'Selective Screening for Hepatitis B, Hepatitis C, HIV, or Syphilis with consent',
        'Pelvic Ultrasound Imaging or Examination when medically indicated'
      ]
    },
    treatmentOptions: {
      title: 'Individualized Holistic & Ayurvedic Guidance',
      desc: 'At Kovai Health Center, premarital care combines gentle Ayurvedic cycle-regulating herbal tonics, nutritional guidance, and empathetic counselling to ensure prospective brides step into married life with clarity, health, and peace of mind.'
    },
    faqs: [
      {
        question: 'Is premarital fitness necessary for every woman?',
        answer: 'Not every woman requires the same tests or investigations. The assessment should be based on individual health, symptoms, medical history, and future pregnancy plans.'
      },
      {
        question: 'Does a premarital check-up test fertility?',
        answer: 'A routine premarital assessment does not automatically determine fertility. Further evaluation may be recommended when there are specific symptoms, medical conditions, or fertility concerns.'
      },
      {
        question: 'Are all blood tests required before marriage?',
        answer: 'No. Investigations are generally selected according to individual risk factors, symptoms, medical history, and clinical requirements.'
      },
      {
        question: 'Is a pelvic examination required before marriage?',
        answer: 'Not routinely. A pelvic examination is considered when medically indicated, particularly when symptoms or specific reproductive health concerns are present.'
      },
      {
        question: 'Can irregular periods be evaluated during a premarital check-up?',
        answer: 'Yes. Irregular periods can be assessed to identify possible hormonal, metabolic, or reproductive causes and determine whether further evaluation is needed.'
      },
      {
        question: 'Can premarital counselling include sexual health concerns?',
        answer: 'Yes. Sexual and reproductive health concerns can be discussed confidentially with a qualified healthcare professional as part of appropriate premarital care.'
      }
    ],
    clinicCare: {
      title: 'Female Premarital Health Consultation in Coimbatore',
      desc: 'Schedule a supportive, confidential premarital health check at Kovai Health Center to evaluate your health, clarify questions, and prepare for married life with 30 years of trusted clinical care.'
    }
  },

  // Legacy Pre-Marital Fitness alias
  'pre-marital-fitness': {
    slug: 'pre-marital-fitness',
    category: 'Male Fertility',
    departmentId: 'male-fertility',
    title: 'Male Pre-Marital Fitness & Health Check',
    subtitle: 'Physical Stamina, Reproductive & Sexual Confidence',
    description: 'Premarital fitness evaluates physical fitness, semen parameters, hormonal balance, and sexual health confidence before marriage.',
    highlights: [
      { icon: Dumbbell, title: 'Physical &\nSexual Fitness' },
      { icon: FlaskConical, title: 'Semen &\nVitality Check' },
      { icon: Scale, title: 'Testosterone &\nHormone Profile' },
      { icon: ShieldCheck, title: '100% Confidential\nCare' }
    ],
    imageSrc: '/image copy 19.png',
    whatIsIt: {
      title: 'What is Male Pre-Marital Fitness?',
      description: 'Male premarital fitness is a proactive health evaluation assessing reproductive health, physical stamina, hormonal levels, and intimate wellness before marriage.',
      statText: 'Focus: ',
      statHighlight: 'Vitality, Reproductive Health & Sexual Confidence'
    },
    typesTitle: 'Core Components',
    types: [
      { icon: Activity, title: 'Physical Stamina & Fitness', desc: 'Cardiovascular endurance and vitality screening.' },
      { icon: FlaskConical, title: 'Semen & Reproductive Vitality', desc: 'Semen analysis evaluating count and motility.' }
    ],
    symptoms: [
      'Approaching marriage in the near future',
      'Desire for confidential medical clarity and guidance'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Lack of sexual awareness', 'Unaddressed hormonal or reproductive concerns', 'Premarital anxiety']
    },
    faqs: [
      { question: 'Is premarital check-up necessary?', answer: 'It is a valuable opportunity to understand your health, clear doubts, and enter married life with confidence.' }
    ]
  },

  // 19. Couple Counselling
  'couple-counselling': {
    slug: 'couple-counselling',
    category: 'Pre-Marital & Couple Counselling',
    departmentId: 'counselling',
    title: 'Couple Counselling & Marital Support',
    subtitle: 'Strengthening Communication, Intimacy & Fertility Journeys',
    description: 'Couple counselling is a form of therapy that helps partners improve their relationship, communication, emotional connection, and ability to resolve conflicts. It is especially beneficial for couples facing problems related to marriage, infertility, sexual health, trust, or life stressors.',
    highlights: [
      { icon: Users, title: 'Better Communication\n& Conflict Resolution' },
      { icon: Heart, title: 'Intimacy & Sexual\nWellness' },
      { icon: HeartPulse, title: 'Infertility Emotional\nSupport' },
      { icon: ShieldCheck, title: '100% Confidential\nCare' }
    ],
    imageSrc: '/image copy 27.png',
    whatIsIt: {
      title: 'Why is Couple Counselling Important?',
      description: 'The primary goal of couple counselling is not to determine who is right or wrong, but to help both partners understand each other better and build a healthier relationship.',
      statText: 'Primary Goal: ',
      statHighlight: 'Understand each other better & build a healthier relationship',
      extraParagraphs: [
        'Couple counselling helps improve communication between partners, resolve conflicts constructively, strengthen emotional intimacy, improve sexual relationships, manage stress together, address infertility-related emotional strain, build trust, and prevent marital dissatisfaction.'
      ]
    },
    typesTitle: 'Types of Couple Counselling',
    types: [
      { icon: Users, title: '1. Premarital Counselling', desc: 'Discussing expectations from marriage, financial planning, family planning, sexual health, communication styles, future goals, roles, and responsibilities.' },
      { icon: HeartPulse, title: '2. Infertility Counselling', desc: 'Managing the emotional stress of infertility, treatment options, expectations, coping with failures, and maintaining intimacy during fertility care.' },
      { icon: Heart, title: '3. Sexual Counselling', desc: 'Addressing low libido, erectile dysfunction, premature ejaculation, pain during intercourse, lack of sexual satisfaction, and mismatched expectations.' },
      { icon: Brain, title: '4. Marital Counselling', desc: 'Focusing on communication issues, emotional intimacy, conflict resolution, trust rebuilding, and overall relationship satisfaction.' }
    ],
    symptoms: [
      'Frequent arguments and persistent misunderstandings',
      'Communication problems and difficulty expressing feelings',
      'Lack of emotional connection, feeling disconnected or reduced affection',
      'Sexual difficulties (ED, PE, low libido, pain during intercourse, anxiety)',
      'Infertility issues, stress, and anxiety related to fertility treatment',
      'Premarital concerns, adjustment problems, or family/financial stress',
      'Trust issues, broken promises, or lack of confidence between partners'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      psychological: [
        'Communication Problems: Not listening to each other, frequent misunderstandings, poor expression of feelings (taught active listening & respectful expression)',
        'Conflict Resolution: Learning to understand each other\'s perspectives, avoiding blame and criticism, solving problems collaboratively',
        'Emotional Distance: Rebuilding warmth, affection, intimacy, and meaningful connection',
        'Trust Issues: Rebuilding transparency, honesty, and emotional security'
      ],
      general: [
        'Infertility Support: Managing stress, anxiety, depression, and relationship conflicts during fertility investigations and treatments.',
        'Sexual Wellness Support for Men: Overcoming erectile dysfunction, premature ejaculation, low libido, and performance anxiety.',
        'Sexual Wellness Support for Women: Addressing pain during intercourse (dyspareunia/vaginismus), low sexual desire, and intimacy fears.'
      ]
    },
    evaluation: {
      title: 'Our Couple Counselling Process',
      desc: 'Our empathetic counsellors and doctors provide a judgment-free environment to understand your individual and mutual needs:',
      points: [
        'Initial Joint Consultation to understand shared goals and relationship history',
        'Individual Confidential Sessions when sensitive personal concerns need privacy',
        'Structured Communication & Conflict-Resolution Coaching',
        'Integrated Medical & Psychological Guidance for Infertility or Sexual Health'
      ]
    },
    treatmentOptions: {
      title: 'Compassionate, Medical & Emotional Care',
      desc: 'At Kovai Health Center, couple counselling integrates medical expertise in fertility and sexology with evidence-based relationship coaching to restore harmony, trust, and intimacy.'
    },
    faqs: [
      { question: 'What is the main goal of couple counselling?', answer: 'The primary goal is not to determine who is right or wrong, but to help both partners understand each other better, communicate effectively, and build a stronger, healthier relationship.' },
      { question: 'Can couple counselling help during fertility treatments?', answer: 'Yes. Infertility often causes immense stress and relationship strain. Counselling helps partners support each other emotionally and maintain intimacy throughout treatment.' },
      { question: 'Can sexual health concerns be addressed in couple counselling?', answer: 'Yes. Concerns like low libido, erectile dysfunction, premature ejaculation, and intimacy differences are handled with complete confidentiality and medical respect.' },
      { question: 'Should both partners attend counselling sessions?', answer: 'Ideally yes, as joint participation fosters mutual empathy and lasting solutions. However, individual sessions can also be arranged when needed.' }
    ],
    clinicCare: {
      title: 'Couple Counselling in Coimbatore',
      desc: 'Book a confidential couple counselling session at Kovai Health Center with 30 years of trusted clinical and relationship guidance.'
    }
  },

  // 20. Female Hormonal Imbalances
  'female-hormonal-imbalances': {
    slug: 'female-hormonal-imbalances',
    category: 'Female Fertility',
    departmentId: 'female-fertility',
    title: 'Hormonal Imbalances in Women',
    subtitle: 'Endocrine Health & Vitality Optimization',
    description: 'Hormonal and reproductive health plays an important role in menstrual regularity, fertility, sexual health, and overall well-being. Women with concerns such as irregular periods, persistent acne, excess facial or body hair, or difficulty conceiving benefit from specialized clinical evaluation.',
    highlights: [
      { icon: Scale, title: 'Hormonal\nAssessment' },
      { icon: Flower2, title: 'Cycle\nRegularity' },
      { icon: Leaf, title: 'Endocrine\nHarmony' },
      { icon: UserCheck, title: 'Vitality &\nWellbeing' }
    ],
    imageSrc: '/image copy 23.png',
    whatIsIt: {
      title: 'Hormonal & Reproductive Health',
      description: 'Hormonal and reproductive health plays an important role in menstrual regularity, fertility, sexual health, and overall well-being. Women with concerns such as irregular periods, persistent acne, excess facial or body hair, or difficulty conceiving may benefit from an appropriate evaluation.',
      statText: 'Evaluation Focus: ',
      statHighlight: 'PCOS, Thyroid, Prolactin & Ovarian Reserve',
      extraParagraphs: [
        'Healthy daily habits can support physical, reproductive, and emotional well-being. Lifestyle advice should be individualised according to a woman\'s health, nutritional needs, activity level, and future pregnancy plans.'
      ]
    },
    typesTitle: 'Key Conditions Evaluated',
    types: [
      { icon: Activity, title: 'Polycystic Ovary Syndrome (PCOS)', desc: 'Hormonal imbalance affecting ovulation, menstrual cycles, and insulin resistance.' },
      { icon: Scale, title: 'Thyroid Disorders', desc: 'Hypothyroidism or hyperthyroidism impacting metabolism, cycle rhythm, and energy.' },
      { icon: Brain, title: 'Elevated Prolactin Levels', desc: 'Hyperprolactinemia disrupting normal ovulation and causing cycle delays or breast changes.' },
      { icon: HeartPulse, title: 'Premature Ovarian Insufficiency', desc: 'Early decline in ovarian reserve and fluctuating reproductive hormones.' },
      { icon: UserCheck, title: 'Other Hormonal Conditions', desc: 'Adrenal or ovulatory variations impacting general vitality and fertility.' }
    ],
    symptoms: [
      'Irregular, delayed, missed, or unusually heavy menstrual periods',
      'Persistent acne, oily skin, or excess facial and body hair growth',
      'Unexplained weight gain or difficulty managing healthy weight',
      'Fatigue, poor sleep quality, low energy, and daytime exhaustion',
      'Mood changes, anxiety, stress, or emotional difficulties',
      'Difficulty conceiving or ovulatory concerns',
      'Significant menstrual pain or unusual pelvic discomfort'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      physical: [
        'Polycystic Ovary Syndrome (PCOS)',
        'Thyroid disorders (Hypo / Hyperthyroidism)',
        'Elevated prolactin levels (Hyperprolactinemia)',
        'Premature ovarian insufficiency',
        'Other endocrine & reproductive conditions'
      ],
      lifestyle: [
        'Nutrition: Diets high in processed foods, sugary drinks, or excess salt',
        'Physical Activity: Sedentary lifestyle or lack of 150 mins/week moderate exercise',
        'Sleep: Inadequate or disrupted sleep (less than 7–9 hours per night)',
        'Mental Health & Stress: Unmanaged anxiety, chronic stress, or emotional strain'
      ],
      general: [
        'Nutrition Guidelines: Balanced diet with fruits, vegetables, whole grains, adequate protein, healthy fats, calcium and iron.',
        'Exercise Targets: At least 150 mins moderate physical activity per week + muscle-strengthening 2+ days.',
        'Weight Management: Individualised healthy BMI goals supporting ovulatory and metabolic health.',
        'Sleep & Mental Well-being: 7–9 hours quality sleep and coping strategies for emotional well-being.',
        'Sexual Health Education: Understanding sexual function, consent, contraception, STI prevention, and family planning.'
      ]
    },
    evaluation: {
      title: 'Hormonal, Lifestyle & Mental Well-being Assessment',
      desc: 'Our comprehensive clinical evaluation investigates hormonal and ovulatory indicators alongside individualised lifestyle and mental health factors:',
      points: [
        'Endocrine & Hormonal Blood Profile (Thyroid, Prolactin, AMH, LH, FSH, Androgens)',
        'Pelvic Ultrasound Imaging for Ovarian & Uterine Structure',
        'Lifestyle & Nutrition Assessment (Diet, Activity, BMI & Sleep Pattern)',
        'Mental Health Evaluation (Stress, Anxiety, Depression & Coping Strategies)',
        'Sexual Health Education (Sexual Function, Consent, Contraception & Family Planning)'
      ]
    },
    treatmentOptions: {
      title: 'Ayurvedic Endocrine & Lifestyle Care Protocol',
      desc: 'At Kovai Health Center, care is tailored individually to enhance metabolic Agni, balance hormones with classical herbs (Shatavari, Ashoka, Lodhra, Kanchanar), and integrate personalized diet, exercise, and stress-relief guidance.'
    },
    faqs: [
      {
        question: 'Can irregular periods indicate a hormonal problem?',
        answer: 'They can. Irregular periods may be associated with conditions such as PCOS, thyroid disorders, elevated prolactin, or other reproductive conditions, although there can be other causes as well.'
      },
      {
        question: 'Does lifestyle affect reproductive health?',
        answer: 'Yes. Nutrition, physical activity, sleep, body weight, stress, smoking, and alcohol use can influence overall and reproductive health.'
      },
      {
        question: 'Can exercise improve hormonal health?',
        answer: 'Regular physical activity supports metabolic and cardiovascular health and can be particularly beneficial when hormonal or metabolic conditions are associated with excess weight or insulin resistance.'
      },
      {
        question: 'Does weight affect fertility?',
        answer: 'Weight can influence ovulation and fertility in some women. Both excess weight and being significantly underweight can affect reproductive function, so healthy weight management should be individualised.'
      },
      {
        question: 'How much sleep should a woman get?',
        answer: 'Most adults should aim for approximately 7–9 hours of sleep each night. Sleep needs can vary between individuals.'
      },
      {
        question: 'Why is sexual health education important before marriage?',
        answer: 'It can help women understand consent, contraception, STI prevention, sexual function, family planning, and common misconceptions, allowing couples to make informed decisions together.'
      },
      {
        question: 'When should I consult a doctor about reproductive health?',
        answer: 'Consider an evaluation if you have persistent irregular periods, unusual bleeding, significant menstrual pain, symptoms suggesting hormonal changes, difficulty conceiving, or other reproductive health concerns.'
      }
    ],
    clinicCare: {
      title: 'Female Hormonal Health Consultation in Coimbatore',
      desc: 'Schedule a private, confidential consultation at Kovai Health Center to evaluate your hormonal balance, cycle rhythm, and reproductive vitality with 30 years of clinical care.'
    }
  },

  // Fallback Generic
  'generic': {
    slug: 'generic',
    category: 'Specialized Care',
    departmentId: 'sexology',
    title: 'Specialized Health Treatment',
    subtitle: 'Expert Ayurvedic & Unani Healthcare',
    description: 'Comprehensive, personalized care plans designed to address your specific health needs and restore your wellbeing with 30 years of clinical experience.',
    highlights: [
      { icon: ShieldCheck, title: '100% Confidential\nCare' },
      { icon: UserCheck, title: 'Expert Certified\nDoctors' },
      { icon: Leaf, title: 'Natural &\nHolistic' },
      { icon: Clock, title: '30 Years\nExperience' }
    ],
    imageSrc: '/image copy 7.png',
    whatIsIt: {
      title: 'About This Condition',
      description: 'We provide specialized diagnosis and tailored treatment protocols for this condition, ensuring confidential and compassionate care for our patients.',
      statText: 'Delivered with: ',
      statHighlight: '30 Years of Clinical Trust'
    },
    symptoms: [
      'Discomfort or impact on daily life',
      'Hormonal or reproductive concerns',
      'Stress or relationship strain',
      'Desire for clear medical guidance'
    ],
    symptomsImage: '/image copy 8.png',
    causes: {
      general: ['Physical and hormonal factors', 'Lifestyle habits and chronic stress', 'Underlying medical conditions']
    }
  }
};
