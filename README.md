# 🎵 AI Music Showcase - Red Ropes Production

![App Preview](https://imgix.cosmicjs.com/c761a160-bafa-11f0-92f7-c18e615ec0e0-photo-1462331940025-496dfbfc7564-1762424666972.jpg?w=1200&h=300&fit=crop,compress)

A modern, responsive web application showcasing AI-generated music tracks with beautiful visualizations, genre filtering, and detailed AI model information.

## ✨ Features

- 🎵 **Dynamic Track Display**: Browse all AI-generated music tracks with cover art and metadata
- 🎨 **Genre-Based Filtering**: Filter tracks by genre with color-coded visual indicators
- 🌟 **Featured Tracks Section**: Highlight your best AI-created music
- 🤖 **AI Model Information**: Display which AI platform generated each track (Suno AI, Udio)
- 📱 **Fully Responsive**: Beautiful experience on mobile, tablet, and desktop
- 🎭 **Dark Cosmic Theme**: Modern design with vibrant accent colors
- ⚡ **Server-Side Rendering**: Fast initial page loads with Next.js 16
- 🔗 **Deep Content Integration**: Leverages connected objects for rich data relationships

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690c74f1fb7423bbdde4bc95&clone_repository=690c787bfb7423bbdde4bcd8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Latest music style with AI world 🌍 I create"

### Code Generation Prompt

> "Based on the content model I created for 'Latest music style with AI world 🌍 I create', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **Language**: TypeScript
- **Package Manager**: Bun
- **Image Optimization**: Imgix (via Cosmic)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Red Ropes Music Production bucket

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-music-showcase
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=red-ropes-music-production
COSMIC_READ_KEY=your_read_key_here
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching All Tracks
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: tracks } = await cosmic.objects
  .find({ type: 'tracks' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include connected AI model and genre data
```

### Filtering by Genre
```typescript
const { objects: tracks } = await cosmic.objects
  .find({ 
    type: 'tracks',
    'metadata.genre': genreId // Filter by genre object ID
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Featured Tracks
```typescript
const { objects: tracks } = await cosmic.objects
  .find({ 
    type: 'tracks',
    'metadata.featured': true
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic object types:

### Tracks
- Track Title, Artist Name, Description
- Audio File (media field)
- Cover Art (image with imgix optimization)
- Duration, Release Date
- Connected Objects: AI Model, Genre
- Featured toggle

### Genres
- Genre Name, Description
- Color (for visual theming)
- Used for filtering and categorization

### AI Models
- Model Name, Company/Creator
- Description, Website URL
- Model Logo (image)
- Shows which AI platform created each track

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables in Site Settings
4. Set build command: `bun run build`
5. Set publish directory: `.next`

## 📝 Environment Variables

Required environment variables:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key

These are automatically provided by Cosmic when you deploy from the dashboard.

## 🎯 Features Breakdown

### Homepage
- Featured tracks showcase with large cards
- All tracks grid with cover art and metadata
- Genre filtering with color-coded badges
- Responsive design adapting to all screen sizes

### Track Cards
- Optimized cover art with imgix parameters (2x resolution)
- Artist name and track title
- Duration display in minutes:seconds format
- Genre badge with custom color
- AI model badge showing which platform generated the track
- Release date information

### Genre System
- Three genres: Ambient, Electronic, Lo-Fi Hip Hop
- Custom color coding for visual distinction
- Filter tracks by clicking genre badges
- Genre descriptions and metadata

### AI Model Integration
- Display AI model information on each track
- Model logos with proper attribution
- Links to AI model websites
- Company/creator information

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (two columns)
- Desktop: > 1024px (three columns)

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      cosmic: {
        dark: '#0a0e27',
        purple: '#6366f1',
        // Add your custom colors
      }
    }
  }
}
```

### Adding New Genres
Add new genres in your Cosmic dashboard:
1. Go to Object Types → Genres
2. Add new genre with name, description, and color
3. Genres automatically appear in the filter system

### Modifying Layout
The main layout files are in:
- `app/page.tsx` - Homepage
- `components/TrackCard.tsx` - Individual track display
- `components/GenreFilter.tsx` - Genre filtering UI

<!-- README_END -->