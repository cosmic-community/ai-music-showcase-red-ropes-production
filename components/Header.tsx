export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-cosmic-dark/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cosmic-purple to-cosmic-pink rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Red Ropes Production
              </h1>
              <p className="text-xs text-gray-400">AI Music Showcase</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#featured"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Featured
            </a>
            <a
              href="#all-tracks"
              className="text-gray-300 hover:text-white transition-colors"
            >
              All Tracks
            </a>
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cosmic-purple hover:bg-cosmic-pink transition-colors rounded-lg text-white font-medium"
            >
              Learn More
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}