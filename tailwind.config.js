module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.tsx'],
    purge: ['./src/components/**/*.tsx'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'color-base': 'var(--text-color-base)',
                primary: 'var(--text-color-primary)',
                secondary: 'var(--text-color-secondary)',
                light: 'var(--text-color-light)',
            },
            fontSize: {
                tiny: 'var(--font-size-tiny)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
