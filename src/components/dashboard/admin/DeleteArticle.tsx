import { ArticleCard } from '../../home/Articles';
import { useEffect, useState } from 'react';
import { getAllArticles, deleteArticle } from '../../../api/articleApi';
import type { Article } from '../../../api/articleApi';

interface ArticleDeleteProps {
  article: Article & { s3key: string };
  onDelete: (id: string, s3key: string) => void;
}

const ArticleDelete: React.FC<ArticleDeleteProps> = ({ article, onDelete }) => {
  const { id, s3key, ...cardProps } = article;

  const handleDeleteClick = () => {
    if (window.confirm('Vill du verkligen ta bort?')) {
      onDelete(id, s3key);
    }
  };

return (
  <ArticleCard {...cardProps} className="group">
    <button
      onClick={handleDeleteClick}
      className="
        absolute
        top-10 left-1/2
        -translate-x-1/2 -translate-y-1/2
        z-20
        bg-red-600 
        hover:bg-red-700
        text-white
        font-bold
        rounded-full
        w-50 h-10
        flex items-center justify-center
        shadow-lg
        transition-all duration-200
        opacity-0 group-hover:opacity-100
        border-2 border-white/40
        ring-1 ring-black/10
      "
      aria-label="Ta bort artikel"
      title="Ta bort artikel"
    >
      <span className="text-2xl">Ta bort</span>
    </button>
  </ArticleCard>
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
