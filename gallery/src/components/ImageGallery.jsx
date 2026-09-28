import React from 'react';
import ImageCard from './ImageCard';

export default function ImageGallery({ category, images }) {
  return (
    <section className="category-section" aria-label={category || 'Image gallery'}>
      <div className="image-grid">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}

