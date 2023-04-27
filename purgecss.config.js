const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./public/**/*.html', './src/**/*.vue'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelistPatterns: [/^bg-/, /^text-/],
    whitelistPatternsChildren: [/^bg-/, /^text-/],
})

module.exports = {
    plugins: [require('tailwindcss'), require('autoprefixer'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
}
