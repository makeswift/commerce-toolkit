// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // TypeScript files: adopt your strict/stylistic type-checked setup
  {
    files: ['src/**/*.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      react: reactPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: false }],
      'padding-line-between-statements': [
        'error',
        // Blank line after variable declarations block
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        // Blank line before return statements
        { blankLine: 'always', prev: '*', next: 'return' },
        // Blank line after directive prologue ("use client", "use server", etc.)
        { blankLine: 'always', prev: 'directive', next: '*' },
        // Blank lines around function declarations
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        // Blank line after imports (handled by import/order, but this catches edge cases)
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],

      // General rules from your config
      complexity: ['error', 20],
      eqeqeq: ['error', 'smart'],
      'import/order': [
        'warn',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'no-empty': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': 'error',
      'no-shadow': 'off',
      'no-useless-computed-key': 'error',
      radix: 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-sort-props': 'warn',
      'react/jsx-newline': ['error', { prevent: true }],
      'react/style-prop-object': 'error',
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    },
  },
  // Storybook files (optional but helpful)
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx)'],
    plugins: { storybook },
    extends: [storybook.configs['flat/recommended']],
  },
]);
