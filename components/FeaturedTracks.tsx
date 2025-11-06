import { Track } from '@/types';
import { formatDuration } from '@/lib/cosmic';

interface FeaturedTracksProps {
  tracks: Track[];
}

export default function FeaturedTracks({ tracks }: FeaturedTracksProps) {
  if (!tracks || tracks.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tracks.map((track) => {
        const coverArt = track.metadata.cover_art;
        const genre = track.metadata.genre;
        const aiModel = track.metadata.ai_model;

        return (
          <div
            key={track.id}
            className="bg-cosmic-dark/50 backdrop-blur-sm border border-cosmic-purple/30 rounded-xl overflow-hidden card-hover group"
          >
            <div className="md:flex">
              {/* Cover Art */}
              <div className="md:w-1/2 relative aspect-square overflow-hidden">
                {coverArt ? (
                  <img
                    src={`${coverArt.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                    alt={track.metadata.track_title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cosmic-purple to-cosmic-pink flex items-center justify-center">
                    <span className="text-6xl">🎵</span>
                  </div>
                )}
                
                <div className="absolute top-2 left-2 bg-cosmic-pink px-3 py-1 rounded-full text-xs font-bold text-white">
                  ⭐ Featured
                </div>
              </div>

              {/* Track Info */}
              <div className="md:w-1/2 p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {track.metadata.track_title}
                  </h3>
                  {track.metadata.artist_name && (
                    <p className="text-gray-400">
                      {track.metadata.artist_name}
                    </p>
                  )}
                </div>

                {track.metadata.description && (
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {track.metadata.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {genre && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{
                        backgroundColor: genre.metadata.color || '#6366f1',
                      }}
                    >
                      {genre.metadata.genre_name}
                    </span>
                  )}
                  
                  {aiModel && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
                      🤖 {aiModel.metadata.model_name}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  {track.metadata.duration && (
                    <span>{formatDuration(track.metadata.duration)}</span>
                  )}
                  {track.metadata.release_date && (
                    <span>
                      {new Date(track.metadata.release_date).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}