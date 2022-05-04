module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:md/prettier',
        'plugin:prettier/recommended',
    ],
    settings: {
        'import/resolver': {
            'enhanced-resolve': {},
        },
    },
    overrides: [
        {
            files: ['*.md'],
            parser: 'markdown-eslint-parser',
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'markdown',
                        proseWrap: 'always',
                        printWidth: 120,
                    },
                ],
                'md/remark': [
                    'error',
                    {
                        // This object corresponds to object you would export in .remarkrc file
                        plugins: [
                            'preset-lint-markdown-style-guide',
                            'frontmatter',
                            ['lint-maximum-line-length', 120],
                            ['lint-emphasis-marker', false],
                        ],
                    },
                ],
            },
        },
    ],
    rules: {
        indent: ['error', 4],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'class-methods-use-this': 'off',
    },
};
