export default {
  // The environments in which your code runs
  files: ["scripts/**/*.js"],
  // The parser options for how ESLint should parse the code
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module',  // Treat the code as ES Modules
  },
  // The style guide you want to extend from
  extends: [
    'eslint:recommended',               // Recommended base rules from ESLint
  ],
  // Add your custom rules here
  rules: {
    'no-console': 'warn', // Example rule: warn on console.log usage
    'no-unused-vars': 'warn', // Example rule: warn on unused variables
    'prettier/prettier': 'error', // Ensure Prettier formatting
  },
};