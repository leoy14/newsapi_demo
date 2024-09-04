import React from 'react';

const NewsList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p><strong>Author:</strong> {article.author}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;