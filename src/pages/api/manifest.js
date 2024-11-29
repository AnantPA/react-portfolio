// pages/api/manifest.js

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Serve the manifest content
    res.status(200).json({
      "short_name": "Portfolio",
      "name": "MERN Stack Portfolio - Anant Patel",
      "description": "Anant Patel's MERN stack developer portfolio showcasing projects and expertise in React, Node.js, Express, and MongoDB.",
      "icons": [
        {
          "src": "/favicon.svg",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        },
        {
          "src": "/logo192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "/logo512.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      "start_url": ".",
      "homepage": ".",
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff"
    });
  }
  