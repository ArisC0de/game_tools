import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: {
    Button: 'src/components/ui/button.tsx',
  },
  output: {
    entryFileNames: '[name].tsx',
  },
  plugins: [resolve(), typescript(
    {
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    },
  )],
}
