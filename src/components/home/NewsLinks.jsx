import { useState, useEffect } from 'react';
import { newsLinks } from '../../data';
import Title from './Title';
import Button from '@mui/material/Button';

const NewsLink = ({ href, image, title, date, info, location }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="link-card">
        <div className="link-img-container">
          <img src={image} className="link-img" alt={title} />
          <p className="link-date">{date}</p>
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
      </article>
    </a>
  );
};

const NewsLinks = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedNewsLinks = [...newsLinks].sort((a, b) => b.id - a.id);

  const displayedLinks = showMore
    ? sortedNewsLinks.slice(0, isMobile ? 6 : 12)
    : sortedNewsLinks.slice(0, isMobile ? 3 : 6);

  const allLinksDisplayed = showMore
    ? sortedNewsLinks.length <= (isMobile ? 6 : 12)
    : sortedNewsLinks.length <= (isMobile ? 3 : 6);

  return (
    <section className="section" id="newsLinks">
      <Title title="rekommenderade" subTitle="länkar" />
      <div className="section-center featured-center">
        {displayedLinks.map((link) => (
          <NewsLink {...link} key={link.id} />
        ))}
      </div>
      {!allLinksDisplayed && (
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
};

export default NewsLinks;
