import { ArticleCard } from '../../home/Articles';
import { useEffect, useState } from 'react';
import { getAllArticles, deleteArticle } from '../../../api/articleApi';

const ArticleDelete = ({ article, onDelete }) => {
  const { id, s3key, ...cardProps } = article;

    const handleDeleteClick = () => {
      if (window.confirm('Vill du verkligen ta bort?')) {
        onDelete(id, s3key);
      }
    };

  return (
    <div className="relative">
      <ArticleCard {...cardProps} />
      {onDelete && (
        <button
          onClick={handleDeleteClick}
          className="absolute top-1 right-1 z-50 bg-red-600 text-white rounded-full w-6 h-6 border-0 cursor-pointer flex items-center justify-center"
          aria-label="Delete article"
          title="Delete article"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default function ArticlesAdmin() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then(setArticles)
      .catch((err) => console.error('Error loading articles', err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id, s3key) => {
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
