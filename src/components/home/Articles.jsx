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

export const ArticleCard = ({
  href,
  image_url,
  title,
  date,
  info,
  location,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <article className="max-w-[95%] sm:max-w-[600px] mx-auto transition-all duration-300 ease-in-out bg-gray-100 shadow-md mb-8 hover:shadow-xl hover:scale-[1.02] rounded-lg overflow-hidden hover:shadow-[0_12px_12px_rgba(0,0,0,0.25)]">
        <div className="relative">
          <img
            src={image_url}
            alt={title}
            className="w-full h-60 object-cover"
          />
          <p className="absolute right-0 bottom-0 bg-red-800 text-red-100 capitalize px-2 py-1">
            {new Date(date).toLocaleDateString('sv-SE')}
          </p>
        </div>
        <div className="p-5">
          <div className="flex justify-between flex-wrap">
            <h4 className="mb-3 leading-tight text-xl">{title}</h4>
          </div>
          <p className="mb-3 text-gray-800">{info}</p>
          <div className="flex items-center gap-1">
            <Map size={16} className="text-red-500" />
            <span>{location}</span>
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
    <section>
      <Title title="rekommenderade" subTitle="artiklar" />
      <div className="max-w-450 mx-auto px-4">
        <div className="px-6 md:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard {...article} key={article.id} />
          ))}
        </div>
      </div>
      {!allDisplayed && (
        <div className="flex justify-center mt-5 mb-5">
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