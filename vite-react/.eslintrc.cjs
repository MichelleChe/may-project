module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "react"],
  rules: {
    camelcase: 'off',
    'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /** 允许控制台输出 */
    'no-console': 'off',
    /** 是否允许匿名函数表达式 */
    'func-names': 'off',
    /** 是否允许未使用对变量 */
    'no-unused-vars': 'warn',
    /** 关闭这个因为webpack已经能够判断解析路径 */
    'import/no-unresolved': 'off',
    /** 关闭import需要扩展名 */
    'import/extensions': 'off',
    /** 在非头部使用require() */
    'global-require': 'off',
    /** 变量名是否能够使用_开始 */
    'no-underscore-dangle': 'off',
    /** 允许使用++ 和 -- */
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    /** 不允许重写函数参数 */
    'no-param-reassign': 'off',
    /** 偏向于使用const */
    'prefer-const': 'warn',
    /** 是否允许局部变量和全局变量共享名称 */
    'no-shadow': 'off',
    /** 允许使用bit运算符 */
    'no-bitwise': 'off',
    /** 限制某些javascript语法，比如 for (let i of arr) */
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'no-else-return': 'off'
  }
};
