/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html', // Alle HTML-Dateien in templates und Unterverzeichnissen
    './templates/partials/**/*.html' // Alle HTML-Dateien in partials und Unterverzeichnissen
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
