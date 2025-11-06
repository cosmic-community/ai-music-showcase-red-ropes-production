export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl">🎵</div>
        <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
        <p className="text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-cosmic-purple hover:bg-cosmic-pink transition-colors rounded-lg text-white font-medium"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}