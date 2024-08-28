import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
})
