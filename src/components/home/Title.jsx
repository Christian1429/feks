const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title text-center mb-8">
      <h2 className="uppercase tracking-widest text-2xl font-semibold">
        <span className="text-red-900">{title}</span>{' '}
        <span className="text-red-600">{subTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
