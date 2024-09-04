const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize cache with a TTL (time-to-live) of 1 hour
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

// Replace with your GNews API key
const API_KEY = '4be31659e36e9f86b4b2e58d7f88b961';
const GNEWS_API_URL = 'https://gnews.io/api/v4';

// Function to fetch articles from the GNews API
const fetchArticles = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    throw error;
  }
};

// Route to fetch N news articles
app.get('/news', async (req, res) => {
  const { limit } = req.query;

  // Check cache first
  const cacheKey = `news-${limit}`;
  const cachedArticles = cache.get(cacheKey);
  if (cachedArticles) {
    return res.json(cachedArticles);
  }

  try {
    const url = `${GNEWS_API_URL}/top-headlines?token=${API_KEY}&max=${limit}`;
    const articles = await fetchArticles(url);

    // Save the response in cache
    cache.set(cacheKey, articles);

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news articles' });
  }
});

// Route to find a news article with a specific title or author
app.get('/news/search', async (req, res) => {
  const { title, author } = req.query;

  const cacheKey = `search-${title}-${author}`;
  const cachedArticles = cache.get(cacheKey);
  if (cachedArticles) {
    return res.json(cachedArticles);
  }

  try {
    const query = title ? `&q=${title}` : author ? `&author=${author}` : '';
    const url = `${GNEWS_API_URL}/search?token=${API_KEY}${query}`;
    const articles = await fetchArticles(url);

    cache.set(cacheKey, articles);

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news articles' });
  }
});

// Route to search articles by keywords
app.get('/news/keywords', async (req, res) => {
  const { keywords } = req.query;

  const cacheKey = `keywords-${keywords}`;
  const cachedArticles = cache.get(cacheKey);
  if (cachedArticles) {
    return res.json(cachedArticles);
  }

  try {
    const url = `${GNEWS_API_URL}/search?token=${API_KEY}&q=${keywords}`;
    const articles = await fetchArticles(url);

    cache.set(cacheKey, articles);

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news articles' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});