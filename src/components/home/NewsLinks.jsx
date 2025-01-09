import { links } from '../../data';
import Title from './Title';

const News = ({ image, date, title, info, location, duration, day, href }) => {
  return (
    <>
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
              {/* <p>Publicerat {day}</p>
              <p>{duration} dagar</p> */}
            </div>
          </div>
        </article>
      </a>
    </>
  );
};

const NewsLinks = () => {
  return (
    <section className="section" id="links">
      <Title title="rekommenderade" subTitle="länkar" />
      <div className="section-center featured-center">
        {links.map((link) => (
          <News {...link} key={link.id} />
        ))}
      </div>
    </section>
  );
};

export default NewsLinks;
