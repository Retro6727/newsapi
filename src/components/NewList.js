import React from 'react';

const NewsList = ({ articles }) => {
  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <small>
              {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
            </small>
          </div>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
};

export default NewsList;
