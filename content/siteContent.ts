import { ContentReviewStamp, SourceItem, MythItem, AudienceTile, RegionCard } from './types';

export const siteReviewStamp: ContentReviewStamp = {
  reviewerName: '[Reviewer name, qualification]',
  qualification: 'Dermatologist & Medical Advisory Board',
  lastReviewed: '[DD Month YYYY]',
  nextReview: '[DD Month YYYY]',
};

export const commonSources: Record<string, SourceItem[]> = {
  p03: [
    {
      id: 'aad-overview',
      name: 'AAD — Vitiligo: Overview',
      citation: 'American Academy of Dermatology Association. Vitiligo: Overview and symptoms.',
      url: 'https://www.aad.org/public/diseases/a-z/vitiligo-overview',
    },
    {
      id: 'aad-medical',
      name: 'AAD — Is vitiligo a medical condition?',
      citation: 'American Academy of Dermatology Association. Vitiligo as an autoimmune condition.',
      url: 'https://www.aad.org/public/diseases/a-z/vitiligo-symptoms',
    },
    {
      id: 'aad-treatment',
      name: 'AAD — Vitiligo: Diagnosis and treatment',
      citation: 'American Academy of Dermatology Association. Clinical practice guidelines for vitiligo management.',
      url: 'https://www.aad.org/public/diseases/a-z/vitiligo-treatment',
    },
    {
      id: 'iadvl',
      name: 'IADVL public information on vitiligo',
      citation: 'Indian Association of Dermatologists, Venereologists and Leprologists. Patient education resources.',
      isPlaceholder: true,
    },
    {
      id: 'lancet-2024',
      name: 'Akl et al., The Lancet Public Health, 2024',
      citation: 'Akl et al. Global lifetime prevalence of vitiligo: a systematic review and meta-analysis of 90 studies. The Lancet Public Health, 2024.',
      url: 'https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(24)00028-1/fulltext',
    },
    {
      id: 'cultural-studies',
      name: 'Published studies on cultural beliefs about vitiligo',
      citation: 'Documented anthropological and dermatological studies on cultural perceptions of pigmentary disorders in South Asia, Africa, and the Middle East.',
      isPlaceholder: true,
    },
  ],
};

export const audienceTiles: AudienceTile[] = [
  {
    id: 1,
    iconName: 'book',
    label: 'I want to understand vitiligo',
    description: 'What vitiligo is, why it happens and what is true.',
    href: '/understand-vitiligo',
    colorName: 'blue',
  },
  {
    id: 2,
    iconName: 'user',
    label: 'I am living with vitiligo',
    description: 'Practical help for work, relationships and everyday life.',
    href: '/living-with-vitiligo',
    colorName: 'lilac',
  },
  {
    id: 3,
    iconName: 'users',
    label: 'I am supporting someone',
    description: 'How to support a child, partner, friend or colleague.',
    href: '/understand-vitiligo/stigma-and-misconceptions',
    colorName: 'mint',
  },
  {
    id: 4,
    iconName: 'stethoscope',
    label: 'I am a healthcare professional',
    description: 'Clinical insights, guidelines and patient perspectives.',
    href: '/expert-insights',
    colorName: 'peach',
  },
];

export const tenMyths: MythItem[] = [
  {
    id: 1,
    myth: 'Vitiligo is contagious.',
    verdict: 'Not true.',
    oneLineFact: 'You cannot catch vitiligo.',
    fullExplanation: 'You cannot catch vitiligo from another person through touching, hugging, sharing food, kissing or being near them. Vitiligo is not an infection.',
    visualIcon: '🤝',
    visualCaption: 'Touching someone with vitiligo cannot give you vitiligo.',
    source: 'AAD',
    sourceId: 'aad-overview',
  },
  {
    id: 2,
    myth: 'Vitiligo is a form of leprosy.',
    verdict: 'Not true.',
    oneLineFact: 'They are completely different conditions.',
    fullExplanation: 'Vitiligo is a loss of skin pigment caused by the immune system. Leprosy is an infectious disease caused by the bacterium Mycobacterium leprae. Confusing the two has been a source of stigma in some communities.',
    visualIcon: '⚪⚪',
    visualCaption: 'Two completely separate conditions with zero medical overlap.',
    source: 'Medical review',
    sourceId: 'aad-medical',
  },
  {
    id: 3,
    myth: 'Vitiligo is caused by eating the wrong foods or mixing certain foods.',
    verdict: 'Not true.',
    oneLineFact: 'No good scientific evidence links food to vitiligo.',
    fullExplanation: 'Beliefs about food — such as avoiding milk with fish — are common in many communities. But vitiligo is an autoimmune condition, with genetic and environmental factors contributing to risk. There is no good evidence that any food or food combination causes it.',
    visualIcon: '🥛🐟',
    visualCaption: 'Myth: "This causes vitiligo." Fact: No scientific evidence supports this.',
    source: 'IADVL',
    sourceId: 'iadvl',
  },
  {
    id: 4,
    myth: 'Vitiligo happens because someone did something wrong.',
    verdict: 'Not true.',
    oneLineFact: 'It is not anyone\'s fault.',
    fullExplanation: 'Vitiligo is an autoimmune condition. Genetic and environmental factors can play a part, but it is not caused by a person\'s hygiene, character or lifestyle choices. Not yours, not your parents\', not your child\'s.',
    visualIcon: '❤️',
    visualCaption: 'Vitiligo is an autoimmune condition, never a moral punishment.',
    source: 'AAD',
    sourceId: 'aad-medical',
  },
  {
    id: 5,
    myth: 'Vitiligo is just a cosmetic problem.',
    verdict: 'Not true.',
    oneLineFact: 'It can affect much more than appearance.',
    fullExplanation: 'Vitiligo changes skin colour, but its impact can reach confidence, relationships, social life and emotional wellbeing. Medical organisations recognise that this psychological and social impact can be significant.',
    visualIcon: '🧠',
    visualCaption: 'Impact can reach confidence, relationships, and emotional wellbeing.',
    source: 'AAD',
    sourceId: 'aad-medical',
  },
  {
    id: 6,
    myth: 'Vitiligo only affects people with dark skin.',
    verdict: 'Not true.',
    oneLineFact: 'Anyone can develop vitiligo.',
    fullExplanation: 'Vitiligo occurs in every skin tone, ethnicity and gender. It can simply be more noticeable when there is a strong contrast between the affected patches and the surrounding skin.',
    visualIcon: '🎨',
    visualCaption: 'Occurs across all human skin tones worldwide.',
    source: 'AAD',
    sourceId: 'aad-overview',
  },
  {
    id: 7,
    myth: 'Vitiligo is always inherited.',
    verdict: 'Not true.',
    oneLineFact: 'Family history raises risk, but does not decide it.',
    fullExplanation: 'Vitiligo can run in families, but having a relative with vitiligo does not mean you or your children will definitely develop it. Many genetic and environmental factors are involved.',
    visualIcon: '🌳',
    visualCaption: 'Family history raises risk, but does not make it inevitable.',
    source: 'AAD',
    sourceId: 'aad-medical',
  },
  {
    id: 8,
    myth: 'There is nothing that can be done for vitiligo.',
    verdict: 'Not true.',
    oneLineFact: 'Vitiligo can be treated.',
    fullExplanation: 'There is no guaranteed cure yet, but several treatments can help some people regain colour or manage the condition. Results differ from person to person, so treatment should be planned with a healthcare professional.',
    visualIcon: '🩹',
    visualCaption: 'Multiple effective modern therapies exist.',
    source: 'AAD',
    sourceId: 'aad-treatment',
  },
  {
    id: 9,
    myth: 'Everyone with vitiligo develops other health problems.',
    verdict: 'Not true.',
    oneLineFact: 'It is a possibility, not a certainty.',
    fullExplanation: 'Having vitiligo does not mean you will automatically develop thyroid disease, another autoimmune condition or hearing loss. Regular check-ups help catch any change early.',
    visualIcon: '🛡️',
    visualCaption: 'Having vitiligo does not mean you will develop other conditions.',
    source: 'AAD',
    sourceId: 'aad-medical',
  },
  {
    id: 10,
    myth: 'If I have vitiligo, I should hide it.',
    verdict: 'Not true.',
    oneLineFact: 'Covering vitiligo is a personal choice.',
    fullExplanation: 'Covering vitiligo is a personal choice, not a medical need. Some people use make-up, clothing or camouflage products. Others choose to show their skin. Neither choice is more "correct".',
    visualIcon: '✋',
    visualCaption: 'Treatment is a choice. Camouflage is a choice. Showing your skin is a choice.',
    source: 'Symetrique',
    sourceId: 'cultural-studies',
  },
];

export const regionCards: RegionCard[] = [
  {
    region: 'South Asia',
    body: 'Beliefs about food restrictions, infection, inheritance and a link with leprosy have been reported.',
    fullExplanation: 'Vitiligo is sometimes confused with leprosy in vernacular terms. People with vitiligo may face discrimination in marriage, work and social life. Some traditional beliefs link it to diet (such as combining fish and milk), karma or spiritual causes. Medical science confirms it is purely autoimmune.',
  },
  {
    region: 'Africa',
    body: 'Some communities have reported beliefs involving curses, spirits or supernatural causes.',
    fullExplanation: 'In some African communities, vitiligo is believed to be a curse, the result of witchcraft or a sign of spiritual punishment. People with vitiligo may experience social isolation or exclusion. The medical reality is that vitiligo is non-communicable and caused by autoimmune melanocyte loss.',
  },
  {
    region: 'Middle East',
    body: 'Beliefs about infection, supernatural explanations and other culturally rooted ideas have been documented.',
    fullExplanation: 'Vitiligo can carry a social stigma that affects marriage prospects and professional opportunities. Misconceptions about contagion remain common. Vitiligo cannot be caught from another person and carries zero risk of infection.',
  },
];

export const careTeamMembers = [
  {
    role: 'Dermatologist',
    description: 'Your primary specialist for diagnosis, treatment and skin monitoring.',
  },
  {
    role: 'General practitioner (GP)',
    description: 'Coordinates overall health, refers to specialists and monitors for related conditions like thyroid disease.',
  },
  {
    role: 'Psychologist or counsellor',
    description: 'Supports emotional wellbeing, helps manage anxiety, depression or self-esteem issues related to vitiligo.',
  },
  {
    role: 'Pharmacist',
    description: 'Advises on medications, topical treatments and sun-protection products.',
  },
];

export const treatmentContent = {
  header: {
    eyebrow: 'Treatment & Care',
    h1: 'Treatment and care options',
    subheading: 'Understand the journey and what to expect.',
    countryNote: 'Treatment availability and approvals differ by country.',
    intro: 'Treatment for vitiligo has come a long way. While there is currently no cure, a growing number of options can help slow progression, restore colour and improve quality of life.',
  },
  overview: {
    paragraphs: [
      'Treatment for vitiligo works by either reducing immune activity in the skin or encouraging melanocytes to produce pigment again. What works best depends on the type of vitiligo, how much skin is affected, where it appears and how long you have had it.',
      'Treatment takes time. Most options require weeks or months of consistent use before visible results appear. Setting realistic expectations with your dermatologist is an important first step.',
    ],
  },
  topicals: [
    {
      title: 'Corticosteroid creams',
      description: 'These reduce inflammation and may help restore some colour, particularly when vitiligo is recent and limited to a small area. Your doctor will prescribe the right strength and monitor for side effects.',
    },
    {
      title: 'Calcineurin inhibitors (tacrolimus, pimecrolimus)',
      description: 'These are steroid-free creams that calm the immune response in the skin. They are often used on the face and neck, where steroid creams may not be suitable for long-term use.',
    },
    {
      title: 'Ruxolitinib cream',
      description: 'A newer topical treatment (a JAK inhibitor) that has been approved for non-segmental vitiligo in some countries. It works by blocking certain immune signals that contribute to melanocyte destruction.',
    },
  ],
  phototherapy: [
    {
      title: 'Narrowband UVB phototherapy',
      description: 'The most widely used light treatment for vitiligo. It involves exposing affected skin to a specific wavelength of ultraviolet light, usually two to three times per week at a clinic. Many people see gradual repigmentation over several months.',
    },
    {
      title: 'Excimer laser',
      description: 'A targeted form of light therapy that focuses on individual patches. It can be effective for small, stable areas of vitiligo.',
    },
    {
      note: 'Light therapy is often combined with topical treatments for better results.',
    },
  ],
  surgical: {
    intro: 'Surgery may be an option for people with stable vitiligo (no new patches or spreading for at least one year) that has not responded to other treatments.',
    options: [
      {
        title: 'Skin grafting',
        description: 'Healthy, pigmented skin is transferred from one area of the body to a depigmented area.',
      },
      {
        title: 'Melanocyte transplantation',
        description: 'Melanocytes are taken from pigmented skin, grown in a laboratory and transplanted onto vitiligo patches.',
      },
    ],
    note: 'These procedures are specialised and not suitable for everyone. Your dermatologist can advise whether surgery might be appropriate for your case.',
  },
  emerging: {
    intro: 'Research into vitiligo treatment is active and advancing. Areas of investigation include:',
    areas: [
      'New JAK inhibitors (oral and topical)',
      'Combination therapies that pair medication with light treatment',
      'Immune-modulating therapies that address the root autoimmune cause',
      'Stem-cell-based approaches to regenerate melanocytes',
    ],
    trialNote: 'Ask your dermatologist about clinical trials that may be available in your area.',
  },
  doctorChecklist: [
    'What type of vitiligo do I have, and how does that affect treatment options?',
    'What results can I realistically expect, and over what timeframe?',
    'What are the side effects of the recommended treatment?',
    'Is light therapy suitable for me? How often would I need to attend?',
    'Are there any clinical trials I might be eligible for?',
    'Should I be screened for thyroid disease or other autoimmune conditions?',
    'What can I do at home to support my treatment?',
  ],
};

export const expertInsightsContent = {
  header: {
    eyebrow: 'Expert Insights',
    h1: 'Ask. Learn. Stay informed.',
    subheading: 'Expert answers to common questions and latest updates.',
    intro: 'Expert perspectives on vitiligo — from dermatologists, researchers and the patients working alongside them.',
  },
  twoPerspectives: {
    intro: 'Vitiligo looks different depending on where you stand. In this section, we pair the clinical perspective with the lived experience — because the best care happens when both voices are heard.',
    doctor: {
      role: 'The Doctor’s View',
      quote: 'Vitiligo is an autoimmune condition with real medical significance. As dermatologists, we know it can be associated with thyroid disease and other autoimmune conditions. Early intervention and monitoring make a genuine difference. But what matters just as much is understanding how this condition affects the person sitting in front of us — their confidence, their relationships, their daily life.',
    },
    patient: {
      role: 'The Patient’s View',
      quote: 'When I was first diagnosed, I didn’t know what to expect. My doctor explained the science, but it was connecting with other patients that helped me understand what living with vitiligo actually means. The worst part was not the patches — it was feeling like nobody understood.',
    },
  },
  research: [
    {
      title: 'JAK inhibitors',
      description: 'A new class of medications that block specific immune signals involved in vitiligo. Ruxolitinib cream became the first FDA-approved topical treatment specifically for vitiligo. Oral JAK inhibitors are being studied in clinical trials.',
    },
    {
      title: 'Combination therapies',
      description: 'Researchers are finding that combining topical treatments with light therapy may produce better and faster results than either approach alone.',
    },
    {
      title: 'Understanding the immune mechanism',
      description: 'Scientists are gaining a deeper understanding of exactly how and why the immune system targets melanocytes. This knowledge is opening doors to more targeted treatments that address the root cause.',
    },
    {
      title: 'Patient-reported outcomes',
      description: 'There is growing recognition that treatment success should be measured not only by repigmentation but also by quality of life, emotional wellbeing and patient satisfaction. Symetrique’s work in collecting patient-reported data contributes directly to this shift.',
    },
  ],
  patientJourneys: {
    intro: 'Real stories from people living with vitiligo. Each journey is different, and each voice adds to our shared understanding of this condition.',
    note: 'Stories coming soon. If you would like to share your experience, contact us.',
    cta: 'Share Your Story',
    ctaLink: '/share',
  },
  askExpert: {
    title: 'Ask the Expert',
    intro: 'Have a question about vitiligo that you would like answered by a specialist? Submit your question and our medical advisory team will respond.',
    disclaimer: 'Questions are answered anonymously. Personal medical advice cannot be given through this service — for individual guidance, please consult your doctor.',
    cta: 'Submit a Question',
  },
};

export const resourcesContent = {
  header: {
    eyebrow: 'Resources & Support',
    h1: 'Find the right support',
    subheading: 'Trusted resources for you and your community.',
    intro: 'You are not alone. This page brings together helpful resources, support organisations and practical tools for people living with vitiligo and those who care about them.',
  },
  mentalHealth: {
    title: 'Mental Health Support',
    lead: 'Living with a visible skin condition can affect emotional wellbeing. If you are struggling, please reach out.',
    items: [
      {
        title: 'Talk to your doctor',
        description: 'Your GP or dermatologist can refer you to a counsellor or psychologist.',
      },
      {
        title: 'Online counselling',
        description: 'Many services now offer therapy by video call, making support accessible wherever you are.',
      },
      {
        title: 'Crisis helplines',
        description: 'If you are in distress, contact your local mental health helpline. You do not need to be in an emergency to call.',
      },
    ],
    helplineNote: 'If you need immediate emotional support, please contact your national healthcare service or local crisis helpline in your country.',
  },
  community: {
    title: 'Community',
    body: 'The OneVitiligo community is a space to connect, share and learn from people who understand. Whether you have been living with vitiligo for years or have just been diagnosed, you are welcome here.',
    status: 'Community features coming soon. In the meantime, follow us on social media for updates and stories.',
  },
  dermatologistCriteria: {
    title: 'What to Look For in a Dermatologist',
    lead: 'Not all dermatologists specialise in vitiligo. When choosing a doctor, look for:',
    items: [
      {
        title: 'Experience with vitiligo',
        description: 'Ask whether they regularly treat patients with vitiligo and are up to date on current treatment options.',
      },
      {
        title: 'A patient-centred approach',
        description: 'A good dermatologist will ask about your quality of life, not just your skin.',
      },
      {
        title: 'Access to phototherapy',
        description: 'If light therapy is relevant for you, check whether the clinic offers it or can refer you.',
      },
      {
        title: 'Clear communication',
        description: 'You should feel comfortable asking questions and understand the treatment plan.',
      },
    ],
    cta: 'Find a Doctor',
    ctaLink: '/find-a-doctor',
  },
};

