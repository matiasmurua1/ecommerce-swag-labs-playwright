import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['.features-gen/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'],
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
);
