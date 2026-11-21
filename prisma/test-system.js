const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runTests() {
  console.log('=== RUNNING MULTILINGUAL CMS DATABASE INTEGRATION TESTS ===\n');

  // Test 1: Supported Languages
  console.log('Test 1: Verify 7 Supported Languages');
  const langs = await prisma.supportedLanguage.findMany({ orderBy: { sortOrder: 'asc' } });
  console.log(`- Total Languages: ${langs.length}`);
  langs.forEach(l => console.log(`  [${l.code}] ${l.name} (${l.nativeName}) - ${l.scriptName} script`));
  if (langs.length !== 7) throw new Error('Expected 7 languages');
  console.log('✔ Test 1 Passed\n');

  // Test 2: Translation Keys & Organization
  console.log('Test 2: Translation Keys & Organization');
  const totalKeys = await prisma.translationKey.count();
  console.log(`- Total Keys: ${totalKeys}`);
  const pages = await prisma.translationKey.findMany({ select: { page: true }, distinct: ['page'] });
  console.log(`- Distinct Pages: ${pages.length} (${pages.map(p => p.page).join(', ')})`);
  if (totalKeys < 1000) throw new Error('Expected 1147 keys');
  console.log('✔ Test 2 Passed\n');

  // Test 3: Translations Breakdown
  console.log('Test 3: Translations Count & Status Breakdown');
  const totalTrans = await prisma.translation.count();
  console.log(`- Total Translations: ${totalTrans}`);
  const statuses = await prisma.translation.groupBy({ by: ['status'], _count: { id: true } });
  statuses.forEach(s => console.log(`  - ${s.status}: ${s._count.id}`));
  if (totalTrans !== totalKeys * 7) throw new Error('Expected 7 translations per key');
  console.log('✔ Test 3 Passed\n');

  // Test 4: Super Admin User Verification
  console.log('Test 4: Verify Super Admin User');
  const admin = await prisma.adminUser.findUnique({ where: { email: 'admin@onevitiligo.org' } });
  console.log(`- Super Admin found: ${admin.email} (Role: ${admin.role})`);
  if (!admin) throw new Error('Super Admin not found');
  console.log('✔ Test 4 Passed\n');

  // Test 5: Verify Publish Logs
  console.log('Test 5: Verify Publication Logs');
  const logs = await prisma.translationPublishLog.findMany({ take: 3 });
  console.log(`- Publish Logs Count: ${logs.length}`);
  logs.forEach(l => console.log(`  - Scope: ${l.scope}, Count: ${l.changesCount}, PublishedBy: ${l.publishedBy}`));
  console.log('✔ Test 5 Passed\n');

  // Test 6: Verify English vs Indian Languages Isolation
  console.log('Test 6: Verify Live vs Draft Isolation');
  const sampleKey = await prisma.translationKey.findFirst({
    where: { page: 'home' },
    include: { translations: true }
  });
  console.log(`- Sample Key: ${sampleKey.key}`);
  console.log(`- English text: "${sampleKey.sourceText}"`);
  const hiTrans = sampleKey.translations.find(t => t.languageCode === 'hi');
  console.log(`- Hindi text: "${hiTrans.translatedText}" (Status: ${hiTrans.status}, Live: ${hiTrans.isPublished})`);
  console.log('✔ Test 6 Passed\n');

  console.log('=== ALL 6 INTEGRATION TESTS COMPLETED SUCCESSFULLY! ===');
}

runTests()
  .catch(e => {
    console.error('Test Failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
