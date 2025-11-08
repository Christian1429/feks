import React, { useEffect, useState } from 'react';
import { ArticleCard } from '../../home/Articles';
import { getAllArticles, deleteArticle } from '../../../api/articleApi';
import type { Article } from '../../../api/articleApi';

interface ArticleDeleteProps {
  article: Article & { s3key: string };
  onDelete: (id: string, s3key: string) => void;
}

const ArticleDelete: React.FC<ArticleDeleteProps> = ({ article, onDelete }) => {
  const { id, s3key, href, ...cardProps } = article;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Vill du verkligen ta bort?')) {
      onDelete(id, s3key);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative max-w-[95%] sm:max-w-[600px] mx-auto">
        <ArticleCard {...cardProps} href={href || '#'} />
        <button
          onClick={handleDeleteClick}
          className="absolute top-2 right-2 z-[100] bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 border-0 cursor-pointer flex items-center justify-center text-xl font-bold shadow-lg"
          aria-label="Delete article"
          title="Delete article"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default function ArticlesAdmin() {
  const [articles, setArticles] = useState<(Article & { s3key: string })[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getAllArticles()
    .then((articles) =>
      setArticles(
        articles.map((a) => ({
          ...a,
          s3key: a.s3key ?? '',
        }))
      )
    )
    .catch((err) => console.error('Error loading articles', err))
    .finally(() => setLoading(false));
}, []);

  const handleDelete = async (id: string, s3key: string) => {
    try {
      await deleteArticle(id, s3key);
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error('Failed to delete article:', error);
    }
  };

  if (loading) return <p>Laddar artiklar...</p>;

  return (
    <section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {articles.map((article) => (
          <ArticleDelete
            key={article.id}
            article={article}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
