import React from 'react';
import './Courses.css';
const CourseCard = ({ title, imageUrl, description, reviews, months }) => {
  const renderStars = () => {
    const filledStars = Math.floor(reviews / 20); // Assuming each star represents 20 reviews
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={i} className="fas fa-star filled"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={filledStars + i} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-details">
          <div className="card-reviews">
            {renderStars()}
            <span className="review-count">({reviews})</span>
          </div>
          <span className="card-weeks">{months} Months</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
