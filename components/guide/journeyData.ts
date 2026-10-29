export interface JourneySourceLink {
  href: string;
  label: string;
}

export interface JourneyTableData {
  headers: string[];
  rows: string[][];
}

export interface JourneyChapterItem {
  id: string;
  index: string;
  title: string;
  paragraphsBefore?: string[];
  example?: {
    title?: string;
    text: string;
  };
  bullets?: string[];
  paragraphsAfterBullets?: string[];
  table?: JourneyTableData;
  paragraphsAfterTable?: string[];
  actionLinks?: {
    href: string;
    label: string;
  }[];
  sources?: JourneySourceLink[];
  nextChapter?: {
    id: string;
    label: string;
  };
}

export interface JourneyPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  lead: string;
  edition: string;
  startHref: string;
  illustration?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  tocItems: { id: string; label: string }[];
  chapters: JourneyChapterItem[];
}

export const journeyNoticedData: JourneyPageData = {
  slug: 'journey-noticed',
  metaTitle: 'I have noticed a white patch',
  metaDescription:
    'You may want an answer quickly without knowing which information to trust. First understand the patch; a treatment decision comes after that.',
  eyebrow: 'I have noticed a white patch',
  heroTitle: 'A new patch can bring questions. Start with clarity.',
  lead: 'You may want an answer quickly without knowing which information to trust. First understand the patch; a treatment decision comes after that.',
  edition: 'EXPANDED PATIENT GUIDE · 3 MIN READ',
  startHref: '#first',
  illustration: {
    src: '/images/journey-noticed-hero.png',
    alt: 'Illustration of a young woman and a young man with light patches on their skin, resting their chins on their hands and thinking, with thought bubbles showing a question mark, a magnifying glass, books, a doctor and a tube of cream.',
    objectPosition: 'right center',
  },
  tocItems: [
    { id: 'first', label: '01 · What might this patch be?' },
    { id: 'visit', label: '02 · What happens if vitiligo is suspected?' },
    { id: 'options', label: '03 · What choices follow a confirmed diagnosis?' },
    { id: 'explain', label: '04 · What can I say to other people?' },
    { id: 'prepare', label: '05 · Make the first visit useful.' },
    { id: 'next', label: '06 · Choose your next question.' },
  ],
  chapters: [
    {
      id: 'first',
      index: '01 / 06',
      title: 'What might this patch be?',
      paragraphsBefore: [
        'Not every pale patch is vitiligo. A fungal condition or a previous rash or injury can also change skin colour. Examination matters because the causes need different care.',
        'Describe what you see: where the patch is, when it appeared, whether it has enlarged and whether the skin feels different. You do not need to name it before arranging a visit.',
      ],
      example: {
        title: 'A practical example',
        text: '“I noticed a lighter area beside my mouth six weeks ago. It seems larger now. I used this product for two weeks.” This gives the clinician a timeline instead of an internet diagnosis.',
      },
      sources: [
        {
          href: 'https://www.aad.org/public/diseases/a-z/vitiligo-treatment',
          label: 'American Academy of Dermatology: treatment',
        },
      ],
      nextChapter: {
        id: 'visit',
        label: 'What happens if vitiligo is suspected?',
      },
    },
    {
      id: 'visit',
      index: '02 / 06',
      title: 'What happens if vitiligo is suspected?',
      paragraphsBefore: [
        'The assessment includes a history and skin examination. A special light may outline pigment loss. Blood tests, when relevant, investigate associated conditions; there is not one universal blood test that proves vitiligo.',
      ],
      bullets: [
        'Ask the clinician to explain what supports the diagnosis.',
        'If confirmed, ask about type and activity.',
        'Ask whether photographs would help establish a baseline.',
        'Ask which changes should prompt another review.',
      ],
      paragraphsAfterBullets: [
        'You should leave with a next step even if another visit is needed to clarify the diagnosis.',
      ],
      sources: [
        {
          href: 'https://www.bad.org.uk/pils/vitiligo',
          label: 'British Association of Dermatologists: patient information',
        },
      ],
      nextChapter: {
        id: 'options',
        label: 'What choices follow a confirmed diagnosis?',
      },
    },
    {
      id: 'options',
      index: '03 / 06',
      title: 'What choices follow a confirmed diagnosis?',
      table: {
        headers: ['Your situation', 'Options to discuss', 'Before deciding'],
        rows: [
          [
            'A few patches',
            'A prescribed topical treatment may be considered.',
            'Which medicine suits this area and when will it be reviewed?',
          ],
          [
            'New or enlarging areas',
            'Assess activity and its treatment goals.',
            'Are we addressing spread, colour return or both?',
          ],
          [
            'No wish for pigment treatment now',
            'Information, skin protection and observation.',
            'Which changes should bring me back?',
          ],
          [
            'Worry is the main difficulty',
            'Emotional support alongside skin care.',
            'Support need not wait for pigment to return.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'These are routes into a discussion, not instructions to choose a medicine. The treatment guide explains corticosteroid creams, tacrolimus or pimecrolimus, ruxolitinib cream, light treatment and their different roles.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care',
          label: 'Compare what the treatments involve →',
        },
      ],
      nextChapter: {
        id: 'explain',
        label: 'What can I say to other people?',
      },
    },
    {
      id: 'explain',
      index: '04 / 06',
      title: 'What can I say to other people?',
      paragraphsBefore: [
        'Vitiligo cannot pass through touch or ordinary contact. You can give that fact without sharing your entire history.',
      ],
      bullets: [
        '“It is a change in skin colour called vitiligo.”',
        '“You cannot catch it. I do not need treatment suggestions right now.”',
        'If diagnosis is uncertain: “I am seeing a dermatologist to understand a patch.”',
      ],
      paragraphsAfterBullets: [
        'You do not have to feel confident on demand. A short answer today does not prevent a longer conversation when you want one.',
      ],
      sources: [
        {
          href: 'https://www.niams.nih.gov/health-topics/vitiligo',
          label: 'NIAMS: understanding vitiligo',
        },
      ],
      nextChapter: {
        id: 'prepare',
        label: 'Make the first visit useful.',
      },
    },
    {
      id: 'prepare',
      index: '05 / 06',
      title: 'Make the first visit useful.',
      paragraphsBefore: [
        'Bring your timeline, earlier photographs and product names. Write down questions you want answered, including worries you might otherwise leave unsaid.',
      ],
      bullets: [
        'How certain is the diagnosis?',
        'Is there evidence of ongoing change?',
        'What are the reasons for treatment now, or observation?',
        'How will we assess progress and side effects?',
      ],
      paragraphsAfterBullets: [
        'Repeat the plan in your own words before leaving: “I will do this until this date, watch for these problems, and return then.” Ask the clinician to correct anything you have misunderstood.',
      ],
      nextChapter: {
        id: 'next',
        label: 'Choose your next question.',
      },
    },
    {
      id: 'next',
      index: '06 / 06',
      title: 'Choose your next question.',
      paragraphsBefore: [
        'If activity becomes your main concern, move to the changing-patches journey. If understanding the diagnosis is enough for today, begin with the pigment explanation. There is no requirement to read every option before you can have a useful appointment.',
      ],
      actionLinks: [
        { href: '/journey-changing', label: 'Understand changes →' },
        { href: '/understand-vitiligo', label: 'Understand the condition →' },
        { href: '/living-with-vitiligo', label: 'Handle everyday questions →' },
      ],
      nextChapter: {
        id: 'related',
        label: 'Choose where to go next',
      },
    },
  ],
};

export const journeyChangingData: JourneyPageData = {
  slug: 'journey-changing',
  metaTitle: 'My patches are changing',
  metaDescription:
    'New patches can make the future feel uncertain. This journey explains the choices that matter when the main concern is ongoing change.',
  eyebrow: 'My patches are changing',
  heroTitle: 'Understand the change. Understand the purpose of treatment.',
  lead: 'New patches can make the future feel uncertain. This journey explains the choices that matter when the main concern is ongoing change.',
  edition: 'EXPANDED PATIENT GUIDE · 4 MIN READ',
  startHref: '#activity',
  illustration: {
    src: '/images/journey-changing-hero.png',
    alt: 'Illustration of diverse young adults with vitiligo looking thoughtfully toward choices, with question, magnifying glass, book, and signpost icons.',
    objectPosition: 'center center',
  },
  tocItems: [
    { id: 'activity', label: '01 · What does active vitiligo mean?' },
    { id: 'goals', label: '02 · There are two treatment jobs to separate.' },
    { id: 'options', label: '03 · Which options may be considered now?' },
    { id: 'practical', label: '04 · What would treatment mean during your week?' },
    { id: 'review', label: '05 · Know what to monitor and when to return.' },
    { id: 'support', label: '06 · Uncertainty belongs in the conversation.' },
  ],
  chapters: [
    {
      id: 'activity',
      index: '01 / 06',
      title: 'What does active vitiligo mean?',
      paragraphsBefore: [
        'Activity means new patches or enlargement of existing ones. It is assessed over time, not from the whiteness of one patch alone.',
        'Make the description concrete: which area changed, approximately when, and what you notice compared with an earlier view. Ask how the clinic will record activity so future reviews compare the same things.',
      ],
      example: {
        title: 'A practical example',
        text: 'A patch may look more obvious after surrounding skin tans. That observation differs from confirming that its borders have expanded. Bring the question rather than assuming the answer.',
      },
      sources: [
        {
          href: 'https://dermnetnz.org/topics/vitiligo',
          label: 'DermNet: vitiligo',
        },
      ],
      nextChapter: {
        id: 'goals',
        label: 'There are two treatment jobs to separate.',
      },
    },
    {
      id: 'goals',
      index: '02 / 06',
      title: 'There are two treatment jobs to separate.',
      table: {
        headers: ['Job', 'Purpose', 'What the review considers'],
        rows: [
          [
            'Control activity',
            'Reduce further pigment loss.',
            'Are new or enlarging patches continuing?',
          ],
          [
            'Repigment',
            'Help colour return.',
            'Where is colour returning and how much?',
          ],
        ],
      },
      paragraphsAfterTable: [
        'Ask which job is the immediate priority. Without that distinction, a person may judge a plan aimed at activity control only by colour return. Establish the goal before deciding whether a treatment has helped.',
        'At review, ask for both answers. “No new areas” and “little colour return” can be separate observations, not contradictory ones.',
      ],
      sources: [
        {
          href: 'https://www.niams.nih.gov/health-topics/vitiligo/diagnosis-treatment-and-steps-to-take',
          label: 'NIAMS: diagnosis and treatment',
        },
      ],
      nextChapter: {
        id: 'options',
        label: 'Which options may be considered now?',
      },
    },
    {
      id: 'options',
      index: '03 / 06',
      title: 'Which options may be considered now?',
      table: {
        headers: ['Your situation', 'Options to discuss', 'Before deciding'],
        rows: [
          [
            'Limited areas',
            'Topical medicine',
            'Body site and skin sensitivity influence choice.',
          ],
          [
            'Wider involvement',
            'Narrowband UVB',
            'Understand repeated sessions and the review schedule.',
          ],
          [
            'Rapid progression',
            'Specialist assessment for a limited oral corticosteroid course',
            'Purpose may be activity control, with systemic risks.',
          ],
          [
            'Eligible non-segmental disease needing systemic care',
            'An authorised systemic option where appropriate',
            'Read the dated upadacitinib update and local indication.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'International recommendations describe oral corticosteroid mini-pulses for selected rapidly progressive cases. Risks include sleep or mood disturbance, weight gain and effects on growth in children. This requires assessment and monitoring; it is not a self-treatment regimen.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care#systemic',
          label: 'Understand oral-treatment decisions →',
        },
      ],
      sources: [
        {
          href: 'https://onlinelibrary.wiley.com/doi/10.1111/jdv.19450',
          label: 'International Vitiligo Task Force: treatment recommendations 2023',
        },
      ],
      nextChapter: {
        id: 'practical',
        label: 'What would treatment mean during your week?',
      },
    },
    {
      id: 'practical',
      index: '04 / 06',
      title: 'What would treatment mean during your week?',
      paragraphsBefore: [
        'For a skin medicine, clarify areas to treat, application instructions, planned duration and side effects to report. Ask whether the same instructions apply to the face and body.',
        'For light treatment, work through appointment times, travel, work or school and the cost of repeated sessions. The light exposure may be brief while the journey to the clinic is the larger commitment. Ask whether a supervised home programme exists if travel is the barrier; buying an unassessed lamp is not the same service.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care#phototherapy',
          label: 'Read the full phototherapy explanation →',
        },
      ],
      nextChapter: {
        id: 'review',
        label: 'Know what to monitor and when to return.',
      },
    },
    {
      id: 'review',
      index: '05 / 06',
      title: 'Know what to monitor and when to return.',
      paragraphsBefore: [
        'Agree a schedule for photographs or assessments rather than checking repeatedly throughout the day. If photographs are part of the plan, keep them private, dated and comparable.',
      ],
      bullets: [
        'Which changes should I report before the next appointment?',
        'Which side effects require stopping or contacting the prescriber?',
        'How long is this treatment phase intended to last?',
        'If activity settles, what is the next goal?',
      ],
      paragraphsAfterBullets: [
        'If many new areas develop over a short time, contact the clinic for a timely review rather than simply waiting. Give the timeline so they can advise when you should be seen.',
      ],
      nextChapter: {
        id: 'support',
        label: 'Uncertainty belongs in the conversation.',
      },
    },
    {
      id: 'support',
      index: '06 / 06',
      title: 'Uncertainty belongs in the conversation.',
      paragraphsBefore: [
        'You can say: “I need to know what matters, because I am checking constantly.” Ask for a written plan with a contact point. Describe effects on sleep, concentration or activities as clearly as changes in the patches.',
        'Your next step might be a monitoring plan, a treatment review or help with worry. It does not need to be a decision made from fear.',
      ],
      actionLinks: [
        {
          href: '/living-with-vitiligo#support',
          label: 'Explore support alongside skin care →',
        },
      ],
      nextChapter: {
        id: 'related',
        label: 'Choose where to go next',
      },
    },
  ],
};

export const journeySteadyData: JourneyPageData = {
  slug: 'journey-steady',
  metaTitle: 'My patches seem steady',
  metaDescription:
    'A quiet period can create room to consider restoring colour, maintaining it, exploring a procedure or choosing not to pursue pigment treatment.',
  eyebrow: 'My patches seem steady',
  heroTitle: 'When skin seems steady, choose what matters next.',
  lead: 'A quiet period can create room to consider restoring colour, maintaining it, exploring a procedure or choosing not to pursue pigment treatment.',
  edition: 'EXPANDED PATIENT GUIDE · 4 MIN READ',
  startHref: '#stable',
  illustration: {
    src: '/images/journey-steady-hero.png',
    alt: 'Illustration of a diverse family with vitiligo looking toward an arched window with a rising sun and mountain path, with badges indicating Maintain, Restore, Explore, and Choose.',
    objectPosition: 'center center',
  },
  tocItems: [
    { id: 'stable', label: '01 · What does stable mean for a treatment decision?' },
    { id: 'goals', label: '02 · Choose an area and a goal first.' },
    { id: 'options', label: '03 · What aims to bring colour back?' },
    { id: 'expectations', label: '04 · Why do body areas respond differently?' },
    { id: 'surgery', label: '05 · When is a procedure a reasonable question?' },
    { id: 'maintenance', label: '06 · What happens after improvement?' },
  ],
  chapters: [
    {
      id: 'stable',
      index: '01 / 06',
      title: 'What does stable mean for a treatment decision?',
      paragraphsBefore: [
        'A period without new or enlarging patches suggests stability. Surgical assessment commonly looks for no progression over at least 12 months, but the interval alone does not establish eligibility.',
        'Bring the best account you have of changes over time. The question is not just how long you have had vitiligo, but what it has been doing recently. Ask how stability was assessed and whether it applies to the areas being considered.',
      ],
      sources: [
        {
          href: 'https://www.nhs.uk/conditions/vitiligo/treatment/',
          label: 'NHS: treatment',
        },
      ],
      nextChapter: {
        id: 'goals',
        label: 'Choose an area and a goal first.',
      },
    },
    {
      id: 'goals',
      index: '02 / 06',
      title: 'Choose an area and a goal first.',
      paragraphsBefore: [
        '“I want to try improving this facial area” is a more specific starting point than “I want every patch gone.” Discuss the commitment you would accept and the area that matters most.',
        'Choosing not to pursue pigment treatment is also a discussion you can have. Ask what observation and review would look like. Information, skin protection and support do not depend on choosing a colour-restoring option.',
      ],
      example: {
        title: 'A practical example',
        text: '“This area matters most. I can attend twice a week, but not indefinitely. What could fit those limits, and when would we judge whether it helps?”',
      },
      nextChapter: {
        id: 'options',
        label: 'What aims to bring colour back?',
      },
    },
    {
      id: 'options',
      index: '03 / 06',
      title: 'What aims to bring colour back?',
      table: {
        headers: ['Your situation', 'Options to discuss', 'Before deciding'],
        rows: [
          [
            'A few patches',
            'Topical corticosteroid or tacrolimus/pimecrolimus',
            'Check site, skin sensitivity and the intended course.',
          ],
          [
            'Eligible non-segmental vitiligo',
            'Ruxolitinib cream where authorised',
            'Check age, affected area, local indication and coverage.',
          ],
          [
            'Wider involvement',
            'Narrowband UVB',
            'Consider the full course and repeated visits.',
          ],
          [
            'A few persistent patches',
            'Targeted excimer treatment or a surgical assessment',
            'Different approaches with different eligibility.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'This is not a ranking. A topical plan may be simpler for one person and impractical for another. A combination needs a clear rationale, not just more products.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care',
          label: 'Compare benefits, demands and limitations →',
        },
      ],
      nextChapter: {
        id: 'expectations',
        label: 'Why do body areas respond differently?',
      },
    },
    {
      id: 'expectations',
      index: '04 / 06',
      title: 'Why do body areas respond differently?',
      paragraphsBefore: [
        'Facial skin often responds better than fingers and toes. White hairs in a patch can indicate a limited pigment-cell reserve and make colour return harder.',
        'Ask about your exact area rather than applying someone else’s facial result to your hands. In before-and-after images, check the body site, time interval and other treatments used. A photo alone does not show how many sessions or months were needed.',
        'Early repigmentation may look like small dots around hair roots. Ask what changes would be meaningful in your own progress photographs.',
      ],
      sources: [
        {
          href: 'https://dermnetnz.org/topics/vitiligo',
          label: 'DermNet: vitiligo',
        },
        {
          href: 'https://www.bad.org.uk/pils/vitiligo',
          label: 'British Association of Dermatologists: patient information',
        },
      ],
      nextChapter: {
        id: 'surgery',
        label: 'When is a procedure a reasonable question?',
      },
    },
    {
      id: 'surgery',
      index: '05 / 06',
      title: 'When is a procedure a reasonable question?',
      paragraphsBefore: [
        'Skin or cell-transfer procedures move pigment-producing tissue or cells from another area. Selected stable cases may be considered when medical treatment has been insufficient.',
      ],
      bullets: [
        'How was stability established?',
        'Which technique would be used for this site, and why?',
        'What are the risks of scarring, texture change or colour mismatch?',
        'What aftercare, time off and additional treatment are needed?',
      ],
      paragraphsAfterBullets: [
        'Ask for outcomes from comparable sites, including limited results, and for the cost and recovery plan in writing. A consultation is an assessment, not a commitment to proceed.',
      ],
      sources: [
        {
          href: 'https://onlinelibrary.wiley.com/doi/10.1111/jdv.19450',
          label: 'International Vitiligo Task Force: treatment recommendations 2023',
        },
      ],
      nextChapter: {
        id: 'maintenance',
        label: 'What happens after improvement?',
      },
    },
    {
      id: 'maintenance',
      index: '06 / 06',
      title: 'What happens after improvement?',
      paragraphsBefore: [
        'Colour can fade after treatment ends. A clinician may propose maintenance treatment to reduce relapse.',
        'Ask which areas need ongoing treatment, how the starting routine changes and when to return if pigment loss recurs. Do not assume an intensive schedule should continue indefinitely or stop without advice.',
        'Keep your own priorities in the review too: time, comfort and the effort needed to maintain a result are part of judging whether care fits.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care#maintenance',
          label: 'Understand maintenance and review →',
        },
      ],
      sources: [
        {
          href: 'https://doi.org/10.1007/s13555-025-01402-5',
          label: 'Canadian consensus guideline 2025',
        },
      ],
      nextChapter: {
        id: 'related',
        label: 'Choose where to go next',
      },
    },
  ],
};

export const journeyLongJourneyData: JourneyPageData = {
  slug: 'journey-long-journey',
  metaTitle: 'I have lived with vitiligo for a while',
  metaDescription:
    'Another list of remedies may not help. What matters is why an earlier plan was limited, what has changed and what would make the next option worth considering.',
  eyebrow: 'I have lived with vitiligo for a while',
  heroTitle: 'Your history should move the conversation forward.',
  lead: 'Another list of remedies may not help. What matters is why an earlier plan was limited, what has changed and what would make the next option worth considering.',
  edition: 'EXPANDED PATIENT GUIDE · 4 MIN READ',
  startHref: '#history',
  illustration: {
    src: '/images/journey-long-journey-hero.png',
    alt: 'Illustration of a supportive group of friends and young adults gathered around a laptop sharing experiences and community guidance.',
    objectPosition: 'center center',
  },
  tocItems: [
    { id: 'history', label: '01 · Make a history that explains the result.' },
    { id: 'trial', label: '02 · Was the trial enough to answer the question?' },
    { id: 'routes', label: '03 · Match the next route to the problem now.' },
    { id: 'evidence', label: '04 · How do you judge a promising result?' },
    { id: 'burden', label: '05 · Compare the complete commitment.' },
    { id: 'review', label: '06 · Leave with reasons, not just another prescription.' },
  ],
  chapters: [
    {
      id: 'history',
      index: '01 / 06',
      title: 'Make a history that explains the result.',
      paragraphsBefore: [
        'For each approach, record its name, approximate duration, treated areas, changes noticed, side effects and why it ended. “Did not work” may mean no colour return, continued spread, irritation, cost or an impossible routine.',
        'These are different problems. If a routine was difficult to follow, describing the difficulty helps interpret its result. Missing records do not prevent a review; bring what you remember.',
      ],
      example: {
        title: 'A practical example',
        text: '“My face seemed to improve, but the travel meant I stopped after three months” gives a different starting point from “Phototherapy failed.”',
      },
      nextChapter: {
        id: 'trial',
        label: 'Was the trial enough to answer the question?',
      },
    },
    {
      id: 'trial',
      index: '02 / 06',
      title: 'Was the trial enough to answer the question?',
      paragraphsBefore: [
        'Ask what duration and attendance were needed to assess the particular approach. A brief attempt and a full supervised course do not establish the same thing.',
        'Do not repeat a long course simply because someone says to try harder. Ask what would change: the target area, the combination, monitoring or whether you can maintain the routine.',
      ],
      bullets: [
        'What outcome were we measuring?',
        'Was there a baseline photograph or score?',
        'Was benefit too small, or was the burden too large?',
        'What is the rationale for another attempt?',
      ],
      nextChapter: {
        id: 'routes',
        label: 'Match the next route to the problem now.',
      },
    },
    {
      id: 'routes',
      index: '03 / 06',
      title: 'Match the next route to the problem now.',
      table: {
        headers: ['Your situation', 'Options to discuss', 'Before deciding'],
        rows: [
          [
            'New or enlarging areas',
            'Reassess activity',
            'Use the changing-patches journey.',
          ],
          [
            'Partial colour return',
            'Review benefit by site',
            'Agree the reason to continue, combine or change.',
          ],
          [
            'Stable localised resistant patches',
            'Specialist procedural assessment',
            'Review stability and procedure risks.',
          ],
          [
            'A plan predating newer options',
            'Assess current eligibility',
            'Read dated evidence and approval details.',
          ],
          [
            'A routine that no longer fits',
            'Discuss simplifying or revising it',
            'Explain the actual barrier before changing prescriptions.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'A newer medicine is not automatically a better fit. It should solve a defined problem with a commitment and risk profile you understand.',
      ],
      actionLinks: [
        {
          href: '/latest-developments',
          label: 'Read the verified treatment updates →',
        },
      ],
      nextChapter: {
        id: 'evidence',
        label: 'How do you judge a promising result?',
      },
    },
    {
      id: 'evidence',
      index: '04 / 06',
      title: 'How do you judge a promising result?',
      paragraphsBefore: [
        'Identify whether the claim concerns an approved indication, a peer-reviewed trial or an early announcement. Check the participants’ age, vitiligo type, affected areas and previous treatment.',
        'F-VASI75 means a threshold of improvement in a facial scoring measure, not that every participant regained 75% of all body colour. The time point and comparison group matter. A six-month facial result is not a forecast for your hands.',
        'Ask about adverse effects, monitoring and what happened after the initial trial period. The latest-developments page explains specific results and what they do not establish.',
      ],
      actionLinks: [
        {
          href: '/latest-developments#read-results',
          label: 'Understand trial outcomes →',
        },
      ],
      nextChapter: {
        id: 'burden',
        label: 'Compare the complete commitment.',
      },
    },
    {
      id: 'burden',
      index: '05 / 06',
      title: 'Compare the complete commitment.',
      paragraphsBefore: [
        'Decide what is manageable in money, travel and time per month. Ask for consultation fees, supply costs, laboratory monitoring, device or session charges and follow-up costs.',
        'If insurance or public coverage applies, ask about prior approval and the documents required. If paying directly, check the ongoing expense rather than only the first prescription. These are practical eligibility questions, not a test of commitment.',
        'Phase 2 of OneVitiligo aims to address access through partnerships. This sample does not yet arrange medicines, devices, funding or treatment.',
      ],
      nextChapter: {
        id: 'review',
        label: 'Leave with reasons, not just another prescription.',
      },
    },
    {
      id: 'review',
      index: '06 / 06',
      title: 'Leave with reasons, not just another prescription.',
      paragraphsBefore: [
        'Ask for a plan that names the goal, option, trial period, review measure and the reason to continue or change. If a promise is vague, ask what specific outcome would make the plan worthwhile.',
        'You can say: “I want care, but I need a routine I can sustain.” Emotional support does not need to wait until every skin treatment has been tried. Your goals can change even when your diagnosis has not.',
      ],
      actionLinks: [
        { href: '/treatment-and-care', label: 'Compare treatment details →' },
        {
          href: '/living-with-vitiligo#support',
          label: 'Explore support with treatment fatigue →',
        },
      ],
      nextChapter: {
        id: 'related',
        label: 'Choose where to go next',
      },
    },
  ],
};

export const journeyForMyChildData: JourneyPageData = {
  slug: 'journey-for-my-child',
  metaTitle: 'I am here for my child',
  metaDescription:
    'You may be balancing treatment questions, school life and your own worry. Separate clinical choices from everyday support, with room for your child’s voice.',
  eyebrow: 'I am here for my child',
  heroTitle: 'A skin-care plan should also fit their childhood.',
  lead: 'You may be balancing treatment questions, school life and your own worry. Separate clinical choices from everyday support, with room for your child’s voice.',
  edition: 'EXPANDED PATIENT GUIDE · 4 MIN READ',
  startHref: '#diagnosis',
  illustration: {
    src: '/images/journey-for-my-child-hero.png',
    alt: 'Illustration of a supportive parent and young child reading a book together, with home, education, and medical guidance icons.',
    objectPosition: 'center center',
  },
  tocItems: [
    { id: 'diagnosis', label: '01 · Understand the diagnosis and pattern first.' },
    { id: 'options', label: '02 · What choices may be considered for children?' },
    { id: 'routine', label: '03 · What would this mean during an ordinary week?' },
    { id: 'explain', label: '04 · Use facts without making skin the centre of every day.' },
    { id: 'school', label: '05 · Give school a practical plan.' },
    { id: 'support', label: '06 · Notice their experience and leave room for yours.' },
  ],
  chapters: [
    {
      id: 'diagnosis',
      index: '01 / 06',
      title: 'Understand the diagnosis and pattern first.',
      paragraphsBefore: [
        'Lighter patches have different causes. If vitiligo is confirmed, the type, affected areas and recent changes help guide care.',
        'Bring a timeline and the names of products already used. Invite your child to bring a question if they wish. They do not need to demonstrate confidence or concern for the appointment.',
        'Ask the clinician to explain what is known now and what a review will clarify. You should not have to translate an unexplained medical term into child-friendly language alone.',
      ],
      sources: [
        {
          href: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/vitiligo-in-children-symptoms-causes-treatment.aspx',
          label: 'American Academy of Pediatrics: childhood vitiligo',
        },
      ],
      nextChapter: {
        id: 'options',
        label: 'What choices may be considered for children?',
      },
    },
    {
      id: 'options',
      index: '02 / 06',
      title: 'What choices may be considered for children?',
      table: {
        headers: ['Your situation', 'Options to discuss', 'Before deciding'],
        rows: [
          [
            'Limited patches',
            'A selected topical medicine',
            'Strength, site, duration and review must be clear.',
          ],
          [
            'Face or sensitive folds',
            'Tacrolimus or pimecrolimus may be considered',
            'Check age suitability and local prescribing status.',
          ],
          [
            'More extensive disease',
            'Supervised light-treatment assessment',
            'Consider ability to follow instructions and school/travel demands.',
          ],
          [
            'An eligible teenager',
            'A newer medicine under its local indication',
            'An age threshold alone does not establish suitability.',
          ],
          [
            'No wish for pigment treatment now',
            'Observation, skin protection and support',
            'Agree review arrangements and revisit preferences.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'Topical corticosteroids can thin skin; tacrolimus and pimecrolimus do not have that effect but can cause burning or stinging. The clinician should select instructions for this child, not adapt a relative’s prescription.',
      ],
      actionLinks: [
        {
          href: '/treatment-and-care#topicals',
          label: 'Read the skin-medicine comparison →',
        },
      ],
      sources: [
        {
          href: 'https://www.nhs.uk/conditions/vitiligo/treatment/',
          label: 'NHS: treatment',
        },
      ],
      nextChapter: {
        id: 'routine',
        label: 'What would this mean during an ordinary week?',
      },
    },
    {
      id: 'routine',
      index: '03 / 06',
      title: 'What would this mean during an ordinary week?',
      paragraphsBefore: [
        'Before agreeing, work through who applies a medicine, when it fits around bathing or bedtime, and how visits fit around school. Ask what happens if a session is missed or irritation occurs.',
        'Get the answer from the treating service rather than improvising a dose or exposure time. A workable routine is part of choosing care, not a task the family must solve afterwards.',
      ],
      example: {
        title: 'A practical example',
        text: '“We can travel after school twice a week, but not every morning. Which choices and review arrangements could fit?” This gives the team a concrete constraint.',
      },
      nextChapter: {
        id: 'explain',
        label: 'Use facts without making skin the centre of every day.',
      },
    },
    {
      id: 'explain',
      index: '04 / 06',
      title: 'Use facts without making skin the centre of every day.',
      paragraphsBefore: [
        'You could say: “Some parts of your skin make less colour. You cannot give it to a friend.” Let the child ask the next question instead of anticipating every possible fear.',
        'Ask whether they want help answering classmates or would prefer an adult to handle it. Keep interests, friendships and activities visible. Progress need not be the first subject at every meal.',
        'With an older child, agree who needs information and what can be shared. Participation means listening to preferences as well as explaining choices.',
      ],
      nextChapter: {
        id: 'school',
        label: 'Give school a practical plan.',
      },
    },
    {
      id: 'school',
      index: '05 / 06',
      title: 'Give school a practical plan.',
      paragraphsBefore: [
        'Where support is needed, agree the explanation with your child. Identify a staff contact and ask how misinformation and teasing will be handled.',
      ],
      bullets: [
        'Plan ordinary sun-protection measures during outdoor activities.',
        'Ask staff to correct misinformation without singling the child out publicly.',
        'Record specific bullying incidents and agree a response and follow-up.',
        'Discuss practical attendance arrangements for appointments.',
      ],
      paragraphsAfterBullets: [
        'A possible note: “Our child has vitiligo, which affects skin colour and is not contagious. Please answer questions factually, address teasing and contact us if concerns arise.”',
      ],
      nextChapter: {
        id: 'support',
        label: 'Notice their experience and leave room for yours.',
      },
    },
    {
      id: 'support',
      index: '06 / 06',
      title: 'Notice their experience and leave room for yours.',
      paragraphsBefore: [
        'Ask ordinary questions: “Has anyone said anything about your skin?” or “Is there something you want help with?” A child who seems untroubled does not need to be taught to worry.',
        'If they avoid school, activities or friends, describe those changes to their clinician. Parents can also need somewhere to discuss worries without making the child responsible for them.',
        'At review, include the child’s willingness to continue, effects on their week and what support would help. Ask about counselling when daily life is affected.',
      ],
      actionLinks: [
        {
          href: '/living-with-vitiligo',
          label: 'Explore everyday life and support →',
        },
      ],
      nextChapter: {
        id: 'related',
        label: 'Choose where to go next',
      },
    },
  ],
};


export const journeyForLovedOnesData: JourneyPageData = {
  slug: 'journey-for-loved-ones',
  metaTitle: 'I am here for my loved ones',
  metaDescription:
    'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition. Understand what vitiligo means and direct them to treatment and care.',
  eyebrow: 'I am here for my loved ones',
  heroTitle: 'Support them with clarity, empathy and informed choices.',
  lead:
    'Learn how to offer reassurance, understand their choices and support them without making them feel defined by their condition. Understand what vitiligo means and direct them to treatment and care.',
  edition: 'EXPANDED PATIENT GUIDE · 4 MIN READ',
  startHref: '#understanding',
  illustration: {
    src: '/images/journey-for-loved-ones-hero.jpg',
    alt: 'Illustration of a supportive and affectionate family gathered closely around a loved one with vitiligo, smiling and sharing love, reassurance, and empathy.',
    objectPosition: 'center center',
  },
  tocItems: [
    { id: 'understanding', label: '01 · Understand what vitiligo means and does not mean.' },
    { id: 'reassurance', label: '02 · Offer reassurance without defining them by their skin.' },
    { id: 'treatment', label: '03 · Direct them to reliable treatment and care options.' },
    { id: 'conversations', label: '04 · Prepare for conversations and doctor appointments together.' },
  ],
  chapters: [
    {
      id: 'understanding',
      index: '01 / 04',
      title: 'Understand what vitiligo means and does not mean.',
      paragraphsBefore: [
        'Vitiligo is an autoimmune condition where the body’s immune system affects pigment-producing cells (melanocytes). It is not contagious, not caused by diet, and not an infection.',
        'Learning the facts helps you dispel common myths and approach your loved one with confidence and understanding, rather than unhelpful assumptions or unwarranted alarm.',
      ],
      sources: [
        {
          href: '/understand-vitiligo',
          label: 'OneVitiligo: Understanding vitiligo fundamentals',
        },
      ],
      nextChapter: {
        id: 'reassurance',
        label: 'Offer reassurance without defining them by their skin.',
      },
    },
    {
      id: 'reassurance',
      index: '02 / 04',
      title: 'Offer reassurance without defining them by their skin.',
      paragraphsBefore: [
        'A person with vitiligo is much more than their skin. Unsolicited advice, frequent comments on patches, or over-focusing on appearance can inadvertently increase stress.',
        'Support looks like listening when they want to talk, validating their feelings, and respecting whether they choose to explore treatments, use camouflage, or embrace their skin as it is.',
      ],
      nextChapter: {
        id: 'treatment',
        label: 'Direct them to reliable treatment and care options.',
      },
    },
    {
      id: 'treatment',
      index: '03 / 04',
      title: 'Direct them to reliable treatment and care options.',
      table: {
        headers: ['Goal', 'Options to explore', 'How to support'],
        rows: [
          [
            'Seeking medical advice',
            'Consulting a certified dermatologist',
            'Help prepare questions and review symptom history before the appointment.',
          ],
          [
            'Topical & light therapies',
            'Prescription creams, phototherapy',
            'Encourage consistent routine without making it an obligation.',
          ],
          [
            'Everyday living & confidence',
            'Camouflage, sunscreen, community support',
            'Follow their lead and provide practical, non-judgmental assistance.',
          ],
        ],
      },
      paragraphsAfterTable: [
        'Encourage them to explore evidence-based therapies with a medical specialist. Early evaluation helps determine whether patches are active or stable, and what treatments are most suitable.',
      ],
      sources: [
        {
          href: '/treatment-and-care',
          label: 'OneVitiligo: Comprehensive treatment and care guide',
        },
      ],
      nextChapter: {
        id: 'conversations',
        label: 'Prepare for conversations and doctor appointments together.',
      },
    },
    {
      id: 'conversations',
      index: '04 / 04',
      title: 'Prepare for conversations and doctor appointments together.',
      paragraphsBefore: [
        'Offer to accompany them to consultations if they want an advocate or a second pair of ears. Take notes on medical advice, discussion points, and follow-up timelines.',
        'Remember that decisions belong to them. Being a supportive loved one means creating a safe space where they feel loved, accepted, and empowered.',
      ],
      sources: [
        {
          href: '/resources',
          label: 'OneVitiligo: Resources and patient support networks',
        },
      ],
    },
  ],
};
