import { defineParadoxConfig } from '@ankhorage/paradox';

export default defineParadoxConfig({
  mode: 'write',
  output: { dir: './docs' },
  package: { entrypoints: ['src/index.ts'], root: '.' },
});
