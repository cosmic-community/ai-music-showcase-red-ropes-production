export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto">
          <div className="w-16 h-16 border-4 border-cosmic-purple border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-400">Loading tracks...</p>
      </div>
    </div>
  );
}