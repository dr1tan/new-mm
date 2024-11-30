// @ts-check
const { defineConfig } = require('eslint-define-config');
const { readGitignoreFiles } = require('eslint-gitignore');

module.exports = defineConfig({
  ignorePatterns: [
    ...readGitignoreFiles(),
    'src/schema.graphql',
    '.eslintrc.cjs', // Skip self linting
    'dist/',
  ],
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/eslint-config-prettier',
    'plugin:vue/essential',
    '@vue/prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'prettier', 'deprecation', 'import'],
  rules: {
    // eslint
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-else-return': 'error',
    'no-useless-escape': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],

    'prettier/prettier': 'error',

    // will be re-configured by @typescript-eslint
    semi: 'off',

    // deprecation
    'deprecation/deprecation': 'error',

    // import
    'import/consistent-type-specifier-style': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',

    // @typescript-eslint
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array-simple', readonly: 'generic' },
    ],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/unbound-method': 'off',

    'vue/no-template-shadow': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-model-argument': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Target only TypeScript files
      // TypeScript specific configurations...
    },
    {
      files: ['vite.config.ts', 'src/main.ts'], // Target specific files
      rules: {
        // Disable or adjust rules that don't make sense for these files
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['tailwind.config.ts', 'vite.config.ts'],
      rules: {
        // Disable specific TypeScript rules or all rules for these files
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-anonymous-default-export': 'off',
        // You can disable all rules for these files if necessary
      },
    },
    // Other overrides...
  ],
});
