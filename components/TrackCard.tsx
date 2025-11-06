import { Track } from '@/types';
import { formatDuration } from '@/lib/cosmic';

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  const coverArt = track.metadata.cover_art;
  const genre = track.metadata.genre;
  const aiModel = track.metadata.ai_model;
  const duration = track.metadata.duration;

  return (
    <div className="bg-cosmic-dark/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden card-hover group">
      {/* Cover Art */}
      <div className="relative aspect-square overflow-hidden">
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
        
        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-white">
            {formatDuration(duration)}
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white line-clamp-1">
            {track.metadata.track_title}
          </h3>
          {track.metadata.artist_name && (
            <p className="text-sm text-gray-400 line-clamp-1">
              {track.metadata.artist_name}
            </p>
          )}
        </div>

        {track.metadata.description && (
          <p className="text-sm text-gray-400 line-clamp-2">
            {track.metadata.description}
          </p>
        )}

        {/* Genre and AI Model Badges */}
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

        {/* Release Date */}
        {track.metadata.release_date && (
          <p className="text-xs text-gray-500">
            Released: {new Date(track.metadata.release_date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}