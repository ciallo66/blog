module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'   // 只使用 Vue 最基础的检查规则
  ],
  rules: {
    'vue/multi-word-component-names': 'off'  // 允许单名词组件名
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
