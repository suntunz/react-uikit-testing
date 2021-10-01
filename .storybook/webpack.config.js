module.exports = {
    module: {
        rules: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    },
}
