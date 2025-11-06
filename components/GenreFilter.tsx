'use client';

import { Genre } from '@/types';

interface GenreFilterProps {
  genres: Genre[];
}

export default function GenreFilter({ genres }: GenreFilterProps) {
  if (!genres || genres.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button className="px-4 py-2 rounded-lg bg-cosmic-purple text-white font-medium hover:bg-cosmic-pink transition-colors">
        All Genres
      </button>
      
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: genre.metadata.color || '#6366f1',
          }}
        >
          {genre.metadata.genre_name}
        </button>
      ))}
    </div>
  );
}