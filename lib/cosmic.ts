import { createBucketClient } from '@cosmicjs/sdk';
import { Track, Genre, AIModel, CosmicResponse, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
});

// Fetch all tracks with connected objects
export async function getAllTracks(): Promise<Track[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tracks' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Track[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching tracks:', error);
    throw new Error('Failed to fetch tracks');
  }
}

// Fetch featured tracks only
export async function getFeaturedTracks(): Promise<Track[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'tracks',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Track[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching featured tracks:', error);
    throw new Error('Failed to fetch featured tracks');
  }
}

// Fetch tracks by genre
export async function getTracksByGenre(genreId: string): Promise<Track[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'tracks',
        'metadata.genre': genreId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Track[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching tracks by genre:', error);
    throw new Error('Failed to fetch tracks by genre');
  }
}

// Fetch all genres
export async function getAllGenres(): Promise<Genre[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'genres' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Genre[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching genres:', error);
    throw new Error('Failed to fetch genres');
  }
}

// Fetch all AI models
export async function getAllAIModels(): Promise<AIModel[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'ai-models' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as AIModel[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching AI models:', error);
    throw new Error('Failed to fetch AI models');
  }
}

// Format duration from seconds to MM:SS
export function formatDuration(seconds?: number): string {
  if (!seconds) return '0:00';
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}