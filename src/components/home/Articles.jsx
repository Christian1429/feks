import { useEffect, useState } from 'react';
import { getAllArticles } from '../../api/articleApi';
import Title from './Title';
import Button from '@mui/material/Button';
import { Map } from 'lucide-react';

const formatHref = (href) => {
  if (!href) return '#';
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return href;
  }
  return `https://${href}`;
};

export const ArticleCard = ({ href, image_url, title, date, info, location }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <article className="link-card">
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
                <Map size={16} style={{ marginRight: '4px', marginBottom: '-3px' }} />
              </span>
              {location}
            </p>
          </div>
        </div>
      </article>
    </a>
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

  return (
    <section className="section" id="articles">
      <Title title="rekommenderade" subTitle="artiklar" />
      <div className="section-center featured-center">
        {displayedArticles.map((article) => (
          <ArticleCard {...article} key={article.id} />
        ))}
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
