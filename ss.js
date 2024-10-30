const express = require('express');
const app = express();
const API_KEY = '254572';

app.get('/screenshot', (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const screenshotURL = `https://api.screenshotmachine.com?key=${API_KEY}&url=${encodeURIComponent(url)}&dimension=1024x768`;
    res.json({ screenshotURL });
  } catch (error) {
    console.error('Error generating screenshot URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
