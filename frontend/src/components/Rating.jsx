import IconWrapper from './IconWrapper';

const Rating = ({ value, text, color = '#f8e825' }) => {
  const renderStar = (i) => {
    if (value >= i + 1) {
      return <IconWrapper color={color} type='starFull' />;
    } else if (value >= i + 0.5) {
      return <IconWrapper color={color} type='starHalf' />;
    } else {
      return <IconWrapper color={color} type='star' />;
    }
  };

  return (
    <div className='rating'>
      {[...Array(5)].map((_, i) => (
        <span key={i}>{renderStar(i)}</span>
      ))}
      <span className='rating-text'>{text}</span>
    </div>
  );
};

export default Rating;
