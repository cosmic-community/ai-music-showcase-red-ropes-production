// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  thumbnail?: string;
}

// Genre type with color metadata
export interface Genre extends CosmicObject {
  type: 'genres';
  metadata: {
    genre_name: string;
    description?: string;
    color?: string;
  };
}

// AI Model type with logo and company info
export interface AIModel extends CosmicObject {
  type: 'ai-models';
  metadata: {
    model_name: string;
    description?: string;
    company?: string;
    model_logo?: {
      url: string;
      imgix_url: string;
    };
    website_url?: string;
  };
}

// Track type with all music metadata
export interface Track extends CosmicObject {
  type: 'tracks';
  metadata: {
    track_title: string;
    artist_name?: string;
    description?: string;
    audio_file?: {
      url: string;
    } | null;
    cover_art?: {
      url: string;
      imgix_url: string;
    };
    duration?: number;
    ai_model?: AIModel;
    genre?: Genre;
    release_date?: string;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Helper function to check if error has status
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Type guard for Track
export function isTrack(obj: CosmicObject): obj is Track {
  return obj.type === 'tracks';
}

// Type guard for Genre
export function isGenre(obj: CosmicObject): obj is Genre {
  return obj.type === 'genres';
}

// Type guard for AIModel
export function isAIModel(obj: CosmicObject): obj is AIModel {
  return obj.type === 'ai-models';
}