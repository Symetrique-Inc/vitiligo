const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const prisma = new PrismaClient();

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', scriptName: 'Latin', isDefault: true, sortOrder: 1 },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', scriptName: 'Devanagari', isDefault: false, sortOrder: 2 },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', scriptName: 'Devanagari', isDefault: false, sortOrder: 3 },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', scriptName: 'Bengali', isDefault: false, sortOrder: 4 },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', scriptName: 'Tamil', isDefault: false, sortOrder: 5 },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', scriptName: 'Telugu', isDefault: false, sortOrder: 6 },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', scriptName: 'Kannada', isDefault: false, sortOrder: 7 },
];

function determinePageAndSection(key, enText) {
  const lower = (enText || '').toLowerCase();

  // Navigation & Common UI
  if (
    lower.includes('skip to main content') ||
    lower.includes('search') ||
    lower.includes('menu') ||
    lower.includes('close') ||
    key === 'VTH-00002' ||
    key === 'VTH-00003' ||
    key === 'VTH-00715' ||
    key === 'VTH-01079'
  ) {
    return { page: 'navigation', section: 'header', component: 'Header' };
  }

  // Footer & Disclaimer
  if (
    lower.includes('medical disclaimer') ||
    lower.includes('rights reserved') ||
    lower.includes('terms of use') ||
    lower.includes('privacy policy') ||
    lower.includes('cookie settings') ||
    lower.includes('back to top')
  ) {
    return { page: 'footer', section: 'legal_and_disclaimer', component: 'Footer' };
  }

  // Home Page
  if (
    lower.includes('living with vitiligo.') ||
    lower.includes('you are not alone') ||
    lower.includes('find my starting point') ||
    lower.includes('start where you are') ||
    lower.includes('room for everyday life') ||
    lower.includes('1 in 200') ||
    (parseInt(key.replace('VTH-', ''), 10) >= 8 && parseInt(key.replace('VTH-', ''), 10) <= 60)
  ) {
    return { page: 'home', section: 'hero_and_highlights', component: 'LandingHero' };
  }

  // About
  if (
    lower.includes('about us') ||
    lower.includes('our values') ||
    lower.includes('patient voice first') ||
    lower.includes('integrity') ||
    lower.includes('collaboration') ||
    lower.includes('beyond the prescription')
  ) {
    return { page: 'about', section: 'values_and_principles', component: 'AboutSymetrique' };
  }

  // Understand Vitiligo
  if (
    lower.includes('melanocyte') ||
    lower.includes('skin biology') ||
    lower.includes('autoimmune') ||
    lower.includes('pigment') ||
    lower.includes('what is vitiligo') ||
    lower.includes('myth')
  ) {
    return { page: 'understand-vitiligo', section: 'biology_and_myths', component: 'UnderstandAccordion' };
  }

  // Living with Vitiligo & Emotional Wellbeing
  if (
    lower.includes('emotional') ||
    lower.includes('stigma') ||
    lower.includes('confidence') ||
    lower.includes('daily living') ||
    lower.includes('walk in my skin') ||
    lower.includes('mental health')
  ) {
    return { page: 'living-with-vitiligo', section: 'daily_life_and_wellbeing', component: 'StigmaCarousel' };
  }

  // Treatments and Care
  if (
    lower.includes('treatment') ||
    lower.includes('phototherapy') ||
    lower.includes('jak inhibitor') ||
    lower.includes('steroid') ||
    lower.includes('tacrolimus') ||
    lower.includes('ruxolitinib') ||
    lower.includes('dermatologist') ||
    lower.includes('clinic')
  ) {
    return { page: 'treatment-and-care', section: 'treatment_options_and_guidance', component: 'TreatmentJourneyCycle' };
  }

  // Patient Journeys
  if (
    lower.includes('white patch') ||
    lower.includes('patches are changing') ||
    lower.includes('patches seem steady') ||
    lower.includes('lived with vitiligo for a while') ||
    lower.includes('here for my child') ||
    lower.includes('starting point')
  ) {
    return { page: 'patient-journeys', section: 'journey_steps', component: 'GuideChapter' };
  }

  // Resources and Support
  if (
    lower.includes('resource') ||
    lower.includes('support organisation') ||
    lower.includes('find the right support') ||
    lower.includes('helpline') ||
    lower.includes('community')
  ) {
    return { page: 'resources', section: 'support_and_community', component: 'Resources' };
  }

  return { page: 'common', section: 'general_ui', component: 'UI' };
}

async function main() {
  console.log('--- Starting OneVitiligo Multilingual CMS Seed ---');

  // 1. Seed Supported Languages
  console.log('1. Seeding 7 supported languages...');
  for (const lang of SUPPORTED_LANGUAGES) {
    await prisma.supportedLanguage.upsert({
      where: { code: lang.code },
      update: lang,
      create: lang,
    });
  }
  console.log('✔ Languages seeded successfully.');

  // 2. Seed Super Admin User
  console.log('2. Seeding default Super Admin user...');
  const adminEmail = 'admin@onevitiligo.org';
  const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: 'Super Admin',
        passwordHash: hashPassword('SuperAdmin@2026'),
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });
    console.log('✔ Super Admin created: admin@onevitiligo.org (Password: SuperAdmin@2026)');
  } else {
    console.log('✔ Super Admin already exists.');
  }

  // 3. Migrate Existing AI Translations
  const vthPath = path.join(__dirname, '../data/vth_translations.json');
  if (!fs.existsSync(vthPath)) {
    console.error('vth_translations.json not found at:', vthPath);
    return;
  }

  console.log('3. Loading AI translations from data/vth_translations.json...');
  const vthData = JSON.parse(fs.readFileSync(vthPath, 'utf8'));
  const entries = Object.entries(vthData);
  console.log(`Found ${entries.length} translation blocks to migrate.`);

  let keyCount = 0;
  let translationCount = 0;
  const BATCH_SIZE = 50;

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);

    await prisma.$transaction(async (tx) => {
      for (const [vthKey, langMap] of batch) {
        const enText = langMap['en'] || vthKey;
        const { page, section, component } = determinePageAndSection(vthKey, enText);

        const keyRecord = await tx.translationKey.upsert({
          where: { key: vthKey },
          update: {
            sourceText: enText,
            page,
            section,
            component,
          },
          create: {
            key: vthKey,
            sourceText: enText,
            page,
            section,
            component,
            description: `Context: ${page} -> ${section}`,
          },
        });
        keyCount++;

        for (const lang of SUPPORTED_LANGUAGES) {
          const text = langMap[lang.code] || (lang.code === 'en' ? enText : '');
          const isEn = lang.code === 'en';
          const hasText = Boolean(text && text.trim());

          const status = isEn
            ? 'PUBLISHED'
            : hasText
            ? 'IN_REVIEW' // Existing AI translations flagged for Super Admin review!
            : 'MISSING';

          await tx.translation.upsert({
            where: {
              translationKeyId_languageCode: {
                translationKeyId: keyRecord.id,
                languageCode: lang.code,
              },
            },
            update: {
              translatedText: text,
              status,
              isPublished: isEn || hasText,
              publishedText: text || null,
            },
            create: {
              translationKeyId: keyRecord.id,
              languageCode: lang.code,
              translatedText: text,
              status,
              isPublished: isEn || hasText,
              publishedText: text || null,
              version: 1,
              updatedBy: isEn ? 'System Source' : 'AI Initial Migration',
            },
          });
          translationCount++;
        }
      }
    });

    if ((i + BATCH_SIZE) % 200 === 0 || i + BATCH_SIZE >= entries.length) {
      console.log(`Migrated ${Math.min(i + BATCH_SIZE, entries.length)} / ${entries.length} keys...`);
    }
  }

  // Record an initial publish log
  await prisma.translationPublishLog.create({
    data: {
      scope: 'ALL',
      publishedBy: 'System Migration',
      changesCount: translationCount,
      details: JSON.stringify({
        message: 'Initial migration of 1,147 keys across 7 languages',
        languages: SUPPORTED_LANGUAGES.map((l) => l.code),
      }),
    },
  });

  console.log(`✔ Completed! Total Keys: ${keyCount}, Total Translations: ${translationCount}`);
  console.log('--- OneVitiligo CMS Database Seed Complete ---');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

