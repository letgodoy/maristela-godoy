import eslintConfigNext from 'eslint-config-next'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '.cache/**',
      'public/**',
      // duplicados acidentais (macOS / cópias)
      '**/* 2*',
    ],
  },
  ...eslintConfigNext,
]

export default config
