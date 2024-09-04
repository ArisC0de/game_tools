import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'no-console': [2, { allow: ['warn', 'error', 'debug'] }],
    'node/prefer-global/process': ['off', 0],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/no-duplicate-key': [0],
  },
})
