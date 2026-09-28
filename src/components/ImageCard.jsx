import React from 'react';

export default function ImageCard({ image }) {
  return (
    <article className="image-card">
      <img 
        className="image-card__image" 
        src={image.imageUrl} 
        alt={image.alt || image.title} 
        loading="lazy" 
      />
      <div className="image-card__content">
        <h2 className="image-card__title">{image.title}</h2>
        <p className="image-card__description">{image.description}</p>
      </div>
    </article>
  );
}
