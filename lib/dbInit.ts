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
                const keyRecord = await tx.translationKey.upsert({
                  where: { key: vthKey },
                  update: { sourceText: enText },
                  create: {
                    key: vthKey,
                    sourceText: enText,
                    page: 'general',
                    section: 'content',
                    component: 'UI',
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
      }
    } catch (err) {
      console.error('Database initialization error:', err);
      // Reset promise so subsequent requests can retry
      initPromise = null;
      throw err;
    }
  })();

  return initPromise;
}

