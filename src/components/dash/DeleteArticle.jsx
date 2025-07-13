import { useEffect, useState } from 'react';
import { getAllArticles, deleteArticle } from '../../api/article';
import Button from '@mui/material/Button';

const ArticleCard = ({ href, image_url, title, date, info, location, onDelete, id, s3key }) => {
  return (
    <article className="link-card" style={{ position: 'relative' }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="link-img-container">
          <img src={image_url} className="link-img" alt={title} />
          <p className="link-date">
            {new Date(date).toLocaleDateString('sv-SE')}
          </p>
        </div>
        <div className="link-info">
          <div className="link-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="link-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>
              {location}
            </p>
          </div>
        </div>
      </a>
      {onDelete && (
        <button
          onClick={() => onDelete(id, s3key)}
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
    </article>
  );
};

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    getAllArticles()
      .then(setArticles)
      .catch((err) => console.error('Error loading articles', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Laddar artiklar...</p>;

  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

  const displayedArticles = showMore
    ? sortedArticles.slice(0, isMobile ? 6 : 12)
    : sortedArticles.slice(0, isMobile ? 3 : 6);

  const allDisplayed = showMore
    ? sortedArticles.length <= (isMobile ? 6 : 12)
    : sortedArticles.length <= (isMobile ? 3 : 6);

const handleDelete = async (id, s3key) => {
  try {
    await deleteArticle(id, s3key);
    setArticles((prev) => prev.filter((a) => a.id !== id));
  } catch (error) {
    console.error('Failed to delete article:', error);
  }
};

  return (
    <section className="section" id="articles">
      <div className="section-center featured-center">
        {displayedArticles.map((article) => {
          return (
            <ArticleCard
              {...article}
              key={article.id}
              onDelete={handleDelete}
              s3key={article.s3key}
            />
          );
        })}
      </div>
      {!allDisplayed && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Visa färre' : 'Visa fler'}
          </Button>
        </div>
      )}
    </section>
  );
}
