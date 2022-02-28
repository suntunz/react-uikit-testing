module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.tsx'],
    purge: ['./src/components/**/*.tsx'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                base: 'var(--color-text-base)',
                light: 'var(--color-text-light)',
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
