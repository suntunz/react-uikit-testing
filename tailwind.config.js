module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.tsx'],
    purge: ['./src/components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bitkub: {
                    600: '#02d667',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
