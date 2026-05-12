module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'   // 关闭多单词组件名检查
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}