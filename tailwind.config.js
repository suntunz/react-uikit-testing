module.exports = {
    mode: 'jit',
    content: ['./src/components/**/*.tsx'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'color-base': 'var(--text-color-base)',
                primary: 'var(--text-color-primary)',
                secondary: 'var(--text-color-secondary)',
                light: 'var(--text-color-light)',
            },
            colors: {
                brown: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
