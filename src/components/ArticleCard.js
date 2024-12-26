import React from 'react'
import styled from 'styled-components'

const Card = styled.div
    `border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;`;

const Title = styled.h3
    `margin: 0;`;

const Description = styled.p`
  font-size: 14px;
`;

const Source = styled.small`
  color: #777;
`;

const ArticleCard = ({ article }) => {
  return (
    <div>
      <Card>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
        <Source>
            {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
        </Source>
      </Card>
    </div>
  )
}

export default ArticleCard
