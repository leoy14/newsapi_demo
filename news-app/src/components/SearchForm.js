import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [limit, setLimit] = useState(5);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ limit, title, author, keywords });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Number of Articles:</label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          min="1"
          max="100"
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Keywords:</label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;