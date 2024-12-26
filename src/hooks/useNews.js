import { useQuery } from '@tanstack/react-query';

const fetchNews = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-26&sortBy=publishedAt&apiKey=66eab9450319499d86a3f35b3285f007');
  if (!response.ok) throw new Error('Failed to fetch news');
  return response.json();
};

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });
};
