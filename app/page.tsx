import { getAllTracks, getFeaturedTracks, getAllGenres } from '@/lib/cosmic';
import Header from '@/components/Header';
import TrackGrid from '@/components/TrackGrid';
import FeaturedTracks from '@/components/FeaturedTracks';
import GenreFilter from '@/components/GenreFilter';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [allTracks, featuredTracks, genres] = await Promise.all([
    getAllTracks(),
    getFeaturedTracks(),
    getAllGenres(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text">
            AI Music Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Discover the future of music creation with AI-generated tracks from
            cutting-edge platforms like Suno AI and Udio
          </p>
        </section>

        {/* Featured Tracks */}
        {featuredTracks.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              🌟 Featured Tracks
            </h2>
            <FeaturedTracks tracks={featuredTracks} />
          </section>
        )}

        {/* Genre Filter */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              🎵 All Tracks
            </h2>
            <GenreFilter genres={genres} />
          </div>
          <TrackGrid tracks={allTracks} />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="bg-cosmic-dark/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text">
              {allTracks.length}
            </div>
            <div className="text-gray-400 mt-2">Total Tracks</div>
          </div>
          <div className="bg-cosmic-dark/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text">
              {genres.length}
            </div>
            <div className="text-gray-400 mt-2">Genres</div>
          </div>
          <div className="bg-cosmic-dark/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text">
              {new Set(allTracks.map(t => t.metadata.ai_model?.id)).size}
            </div>
            <div className="text-gray-400 mt-2">AI Models</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © 2025 Red Ropes Music Production. All tracks generated with AI.
            </p>
            <p className="text-xs mt-2">
              Powered by{' '}
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-purple hover:text-cosmic-pink transition-colors"
              >
                Cosmic
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}