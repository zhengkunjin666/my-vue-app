import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import myPlugin from './eslintrc-auto-import.js'

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: { parser: tseslint.parser },
            globals: myPlugin.globals,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off', //  警告使用 any 类型
        },
    },
]
