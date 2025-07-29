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
    <div style={{ position: 'relative' }}>
      <ArticleCard {...cardProps} />
      {onDelete && (
        <button
          onClick={handleDeleteClick}
          style={{
            position: 'absolute',
            zIndex: 5,
            top: 5,
            right: 5,
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: 24,
            height: 24,
            cursor: 'pointer',
          }}
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
    <section className="section" id="admin-articles">
      <div className="section-center featured-center">
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
