import { prisma } from './prisma';
import { hashPassword } from './auth';
import fs from 'fs';
import path from 'path';

let initPromise: Promise<void> | null = null;

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', scriptName: 'Latin', isDefault: true, sortOrder: 1 },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', scriptName: 'Devanagari', isDefault: false, sortOrder: 2 },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', scriptName: 'Devanagari', isDefault: false, sortOrder: 3 },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', scriptName: 'Bengali', isDefault: false, sortOrder: 4 },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', scriptName: 'Tamil', isDefault: false, sortOrder: 5 },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', scriptName: 'Telugu', isDefault: false, sortOrder: 6 },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', scriptName: 'Kannada', isDefault: false, sortOrder: 7 },
];

export function determinePageAndSection(key: string, enText: string) {
  const lower = (enText || '').toLowerCase();

  // Navigation & Common Header UI
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
    lower.includes('back to top') ||
    lower.includes('disclaimer') ||
    lower.includes('copyright')
  ) {
    return { page: 'footer', section: 'legal_and_disclaimer', component: 'Footer' };
  }

  // About
  if (
    lower.includes('about us') ||
    lower.includes('why vitiligo') ||
    lower.includes('our values') ||
    lower.includes('patient voice first') ||
    lower.includes('integrity') ||
    lower.includes('collaboration') ||
    lower.includes('beyond the prescription') ||
    lower.includes('symetrique') ||
    lower.includes('who we are') ||
    lower.includes('get in touch') ||
    lower.includes('contact us') ||
    lower.includes('organisation') ||
    lower.includes('partnership')
  ) {
    return { page: 'about', section: 'values_and_principles', component: 'AboutSymetrique' };
  }

  // Home Page
  if (
    lower.includes('living with vitiligo.') ||
    lower.includes('you are not alone') ||
    lower.includes('find my starting point') ||
    lower.includes('start where you are') ||
    lower.includes('room for everyday life') ||
    lower.includes('1 in 200') ||
    lower.includes('welcome') ||
    lower.includes('key topics') ||
    (parseInt(key.replace('VTH-', ''), 10) >= 8 && parseInt(key.replace('VTH-', ''), 10) <= 60)
  ) {
    return { page: 'home', section: 'hero_and_highlights', component: 'LandingHero' };
  }

  // Understand Vitiligo
  if (
    lower.includes('melanocyte') ||
    lower.includes('skin biology') ||
    lower.includes('autoimmune') ||
    lower.includes('pigment') ||
    lower.includes('what is vitiligo') ||
    lower.includes('myth') ||
    lower.includes('depigmentation') ||
    lower.includes('trigger') ||
    lower.includes('sun exposure') ||
    lower.includes('biology') ||
    lower.includes('dermatology') ||
    lower.includes('diagnosis')
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
    lower.includes('mental health') ||
    lower.includes('self-esteem') ||
    lower.includes('acceptance') ||
    lower.includes('camouflage') ||
    lower.includes('coping') ||
    lower.includes('social') ||
    lower.includes('workplace') ||
    lower.includes('school')
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
    lower.includes('clinic') ||
    lower.includes('topical') ||
    lower.includes('uvb') ||
    lower.includes('repigmentation') ||
    lower.includes('therapy') ||
    lower.includes('prescription')
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
    lower.includes('starting point') ||
    lower.includes('journey') ||
    lower.includes('experience') ||
    lower.includes('guide')
  ) {
    return { page: 'patient-journeys', section: 'journey_steps', component: 'GuideChapter' };
  }

  // Resources and Support
  if (
    lower.includes('resource') ||
    lower.includes('support organisation') ||
    lower.includes('find the right support') ||
    lower.includes('helpline') ||
    lower.includes('community') ||
    lower.includes('advocacy') ||
    lower.includes('reading list')
  ) {
    return { page: 'resources', section: 'support_and_community', component: 'Resources' };
  }

  return { page: 'common', section: 'general_ui', component: 'UI' };
}

export async function ensureDatabaseInitialized(): Promise<void> {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      // 1. Create tables if they do not exist
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`AdminUser\` (
          \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`email\` VARCHAR(191) NOT NULL UNIQUE,
          \`name\` VARCHAR(191) NOT NULL,
          \`passwordHash\` VARCHAR(191) NOT NULL,
          \`role\` VARCHAR(191) NOT NULL DEFAULT 'SUPER_ADMIN',
          \`isActive\` BOOLEAN NOT NULL DEFAULT true,
          \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`SupportedLanguage\` (
          \`code\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`name\` VARCHAR(191) NOT NULL,
          \`nativeName\` VARCHAR(191) NOT NULL,
          \`scriptName\` VARCHAR(191) NULL,
          \`isEnabled\` BOOLEAN NOT NULL DEFAULT true,
          \`isDefault\` BOOLEAN NOT NULL DEFAULT false,
          \`sortOrder\` INT NOT NULL DEFAULT 0,
          \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`TranslationKey\` (
          \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`key\` VARCHAR(191) NOT NULL UNIQUE,
          \`page\` VARCHAR(191) NOT NULL,
          \`section\` VARCHAR(191) NOT NULL,
          \`component\` VARCHAR(191) NULL,
          \`description\` TEXT NULL,
          \`sourceText\` TEXT NOT NULL,
          \`sourceVersion\` INT NOT NULL DEFAULT 1,
          \`isActive\` BOOLEAN NOT NULL DEFAULT true,
          \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
          INDEX \`TranslationKey_page_idx\` (\`page\`),
          INDEX \`TranslationKey_section_idx\` (\`section\`),
          INDEX \`TranslationKey_key_idx\` (\`key\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`Translation\` (
          \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`translationKeyId\` VARCHAR(191) NOT NULL,
          \`languageCode\` VARCHAR(191) NOT NULL,
          \`translatedText\` TEXT NOT NULL,
          \`status\` VARCHAR(191) NOT NULL DEFAULT 'DRAFT',
          \`isPublished\` BOOLEAN NOT NULL DEFAULT false,
          \`publishedText\` TEXT NULL,
          \`version\` INT NOT NULL DEFAULT 1,
          \`updatedBy\` VARCHAR(191) NOT NULL DEFAULT 'Super Admin',
          \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
          \`publishedAt\` DATETIME(3) NULL,
          UNIQUE INDEX \`Translation_translationKeyId_languageCode_key\` (\`translationKeyId\`, \`languageCode\`),
          INDEX \`Translation_languageCode_idx\` (\`languageCode\`),
          INDEX \`Translation_status_idx\` (\`status\`),
          INDEX \`Translation_isPublished_idx\` (\`isPublished\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`TranslationHistory\` (
          \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`translationId\` VARCHAR(191) NOT NULL,
          \`previousText\` TEXT NULL,
          \`newText\` TEXT NOT NULL,
          \`previousStatus\` VARCHAR(191) NULL,
          \`newStatus\` VARCHAR(191) NOT NULL,
          \`changedBy\` VARCHAR(191) NOT NULL DEFAULT 'Super Admin',
          \`changeReason\` VARCHAR(191) NULL,
          \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          INDEX \`TranslationHistory_translationId_idx\` (\`translationId\`),
          INDEX \`TranslationHistory_createdAt_idx\` (\`createdAt\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`TranslationPublishLog\` (
          \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
          \`scope\` VARCHAR(191) NOT NULL,
          \`page\` VARCHAR(191) NULL,
          \`languageCode\` VARCHAR(191) NULL,
          \`publishedBy\` VARCHAR(191) NOT NULL DEFAULT 'Super Admin',
          \`changesCount\` INT NOT NULL,
          \`details\` TEXT NULL,
          \`publishedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
          INDEX \`TranslationPublishLog_publishedAt_idx\` (\`publishedAt\`),
          INDEX \`TranslationPublishLog_languageCode_idx\` (\`languageCode\`),
          INDEX \`TranslationPublishLog_page_idx\` (\`page\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
      `);

      // 2. Ensure Super Admin user exists
      const adminEmail = 'admin@onevitiligo.org';
      const existingAdmin = await prisma.adminUser.findUnique({
        where: { email: adminEmail },
      });

      if (!existingAdmin) {
        await prisma.adminUser.create({
          data: {
            id: 'admin-super-01',
            email: adminEmail,
            name: 'Super Admin',
            passwordHash: hashPassword('SuperAdmin@2026'),
            role: 'SUPER_ADMIN',
            isActive: true,
          },
        });
        console.log('✔ Super Admin created successfully: admin@onevitiligo.org');
      }

      // 3. Ensure Supported Languages exist
      const langCount = await prisma.supportedLanguage.count();
      if (langCount === 0) {
        for (const lang of SUPPORTED_LANGUAGES) {
          await prisma.supportedLanguage.upsert({
            where: { code: lang.code },
            update: lang,
            create: lang,
          });
        }
        console.log('✔ Supported languages seeded.');
      }

      // 4. Seed initial translations if empty
      const keyCount = await prisma.translationKey.count();
      if (keyCount === 0) {
        const vthPath = path.join(process.cwd(), 'data/vth_translations.json');
        if (fs.existsSync(vthPath)) {
          const vthData = JSON.parse(fs.readFileSync(vthPath, 'utf8'));
          const entries = Object.entries(vthData);
          console.log(`Seeding ${entries.length} translation blocks into MySQL...`);

          const BATCH_SIZE = 50;
          for (let i = 0; i < entries.length; i += BATCH_SIZE) {
            const batch = entries.slice(i, i + BATCH_SIZE);
            await prisma.$transaction(async (tx) => {
              for (const [vthKey, langMap] of batch as [string, Record<string, string>][]) {
                const enText = langMap['en'] || vthKey;
                const { page, section, component } = determinePageAndSection(vthKey, enText);

                const keyRecord = await tx.translationKey.upsert({
                  where: { key: vthKey },
                  update: { sourceText: enText, page, section, component },
                  create: {
                    key: vthKey,
                    sourceText: enText,
                    page,
                    section,
                    component,
                    description: `Key ${vthKey}`,
                  },
                });

                for (const lang of SUPPORTED_LANGUAGES) {
                  const text = langMap[lang.code] || (lang.code === 'en' ? enText : '');
                  const isEn = lang.code === 'en';
                  const hasText = Boolean(text && text.trim());
                  const status = isEn ? 'PUBLISHED' : hasText ? 'IN_REVIEW' : 'MISSING';

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
                }
              }
            });
          }
          console.log('✔ Initial translations seeded.');
        }
      } else {
        // 5. Recategorize existing keys if they are all marked as 'general'
        const generalCount = await prisma.translationKey.count({
          where: { page: 'general' },
        });

        if (generalCount > 0) {
          console.log(`Recategorizing ${generalCount} translation keys currently marked as 'general'...`);
          const keysToUpdate = await prisma.translationKey.findMany({
            where: { page: 'general' },
            select: { id: true, key: true, sourceText: true },
          });

          for (const k of keysToUpdate) {
            const { page, section, component } = determinePageAndSection(k.key, k.sourceText);
            await prisma.translationKey.update({
              where: { id: k.id },
              data: { page, section, component },
            });
          }
          console.log('✔ Keys successfully recategorized into distinct pages.');
        }
      }
    } catch (err) {
      console.error('Database initialization error:', err);
      initPromise = null;
      throw err;
    }
  })();

  return initPromise;
}
