module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
    ],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'class-methods-use-this': 'off',
    },
    settings: {
        'import/resolver': 'enhanced-resolve',
    },
};
