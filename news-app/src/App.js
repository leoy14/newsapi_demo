// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import NewsList from './components/NewsList';
import './App.css';  // Import the CSS file

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async ({ limit, title, author, keywords }) => {
    setLoading(true);
    setError(null);

    try {
      let query = `/news?limit=${limit}`;

      if (title) {
        query = `/news/search?title=${title}`;
      } else if (author) {
        query = `/news/search?author=${author}`;
      } else if (keywords) {
        query = `/news/keywords?keywords=${keywords}`;
      }

      const response = await axios.get(`http://localhost:3001${query}`);
      setArticles(response.data);
    } catch (err) {
      setError('Error fetching articles. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>News App</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
