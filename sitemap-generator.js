import { Sitemap } from 'react-router-sitemap';
import router from './src/App'; // Import your React Router

const pathsConfig = {
  '/portfolio/:projectName': [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ],
  // '/blog/:blogTitle': [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 5 },
  // ],
};

function generateSitemap() {
  return new Sitemap(router)
    .applyParams(pathsConfig)
    .build('https://uritisaiabhishek.dev') // Replace with your website's URL
    .save('./public/sitemap.xml'); // The path where sitemap.xml will be saved
}

generateSitemap();
