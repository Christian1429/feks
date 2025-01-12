import { useState, useEffect } from 'react';
import { newsLinks } from '../../data'; // Assuming you have a data file with news links
import Title from './Title';
import Button from '@mui/material/Button';

const NewsLink = ({ href, image, title, date, info, location }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tour-card-link"
    >
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="tour-footer">
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
