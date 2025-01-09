module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-empty': [2, 'never'], // Disable subject-empty rule
        'type-empty': [2, 'never'],    // Disable type-empty rule
    },
}
