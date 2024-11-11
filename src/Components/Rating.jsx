import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else if (i - 0.5 === roundedRating) {
      stars.push(<span key={i}>&#9734;</span>); // Half star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
