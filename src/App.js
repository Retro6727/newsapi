import React, { useState } from 'react';
import styled from 'styled-components';
import { useNews } from './hooks/useNews';
import CategoryFilter from './components/CategoryFilter';
import NewList from './components/NewList';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [category, setCategory] = useState('technology');
  const { data, isLoading, isError, error } = useNews(category);
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Check if data is available and is an object with an 'articles' array
  const articles = data && Array.isArray(data.articles) ? data.articles : [];

  return (
    <Container>
      <h1>📰 News WebApp</h1>
      <CategoryFilter selectedCategory={category} onCategoryChange={handleCategoryChange} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {articles.length > 0 ? (
        <NewList articles={articles} />
      ) : (
        <p>No articles found for this category.</p>
      )}
    </Container>
  );
};

export default App;
