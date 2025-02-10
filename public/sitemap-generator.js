const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');
const fetch = require('node-fetch'); // To fetch pages from your site if necessary

// Define your site's base URL
const baseUrl = 'https://www.bmtowing.ca'; // Change this to your actual website URL

// List of all the pages/routes of your website
const pages = [
  '/',
  '/Home',
  '/OurServices',
  '/WhyChosseUs',
  '/Testimonials',
  '/Appointment'
];

// Create a sitemap instance
const sitemapInstance = sitemap.createSitemap({
  hostname: baseUrl,
  cacheTime: 600000, // Cache for 10 minutes
  urls: pages.map((page) => ({
    url: page,
    changefreq: 'daily',  // Change frequency can be daily, weekly, monthly
    priority: 0.7,        // Priority of the page
  })),
});

// Generate the XML file and save it in the public directory
const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapInstance.toString());

console.log('Sitemap generated and saved to /public/sitemap.xml');
