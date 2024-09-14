const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default; // Import your React Router

function generateSitemap() {
  return new Sitemap(router)
    .build('https://uritisaiabhishek.dev') // Replace with your website's URL
    .save('./public/sitemap.xml'); // The path where sitemap.xml will be saved
}

generateSitemap();
