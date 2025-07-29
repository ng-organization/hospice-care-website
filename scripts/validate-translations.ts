#!/usr/bin/env tsx

import { readFileSync } from 'fs';
import { join } from 'path';

type MessageObject = Record<string, any>;

function getNestedKeys(obj: MessageObject, prefix = ''): string[] {
  const keys: string[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getNestedKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys.sort();
}

function validateTranslations() {
  const messagesDir = join(process.cwd(), 'i18n', 'messages');
  
  // Load message files
  const enMessages = JSON.parse(readFileSync(join(messagesDir, 'en.json'), 'utf-8'));
  const zhMessages = JSON.parse(readFileSync(join(messagesDir, 'zh.json'), 'utf-8'));
  
  // Get all keys
  const enKeys = getNestedKeys(enMessages);
  const zhKeys = getNestedKeys(zhMessages);
  
  // Find missing keys
  const missingInZh = enKeys.filter(key => !zhKeys.includes(key));
  const missingInEn = zhKeys.filter(key => !enKeys.includes(key));
  
  let hasErrors = false;
  
  if (missingInZh.length > 0) {
    console.error('❌ Keys missing in Chinese (zh.json):');
    missingInZh.forEach(key => console.error(`  - ${key}`));
    hasErrors = true;
  }
  
  if (missingInEn.length > 0) {
    console.error('❌ Keys missing in English (en.json):');
    missingInEn.forEach(key => console.error(`  - ${key}`));
    hasErrors = true;
  }
  
  if (!hasErrors) {
    console.log('✅ All translation keys are synchronized between locales');
  }
  
  return !hasErrors;
}

if (require.main === module) {
  const isValid = validateTranslations();
  process.exit(isValid ? 0 : 1);
}

export { validateTranslations };