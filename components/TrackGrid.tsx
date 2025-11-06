'use client';

import { useState, useMemo } from 'react';
import { Track } from '@/types';
import TrackCard from './TrackCard';

interface TrackGridProps {
  tracks: Track[];
}

export default function TrackGrid({ tracks }: TrackGridProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const filteredTracks = useMemo(() => {
    if (selectedGenre === 'all') {
      return tracks;
    }
    return tracks.filter(track => track.metadata.genre?.id === selectedGenre);
  }, [tracks, selectedGenre]);

  if (!tracks || tracks.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-lg">No tracks found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
}