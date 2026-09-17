// Local copies of all videos from https://wisnotech.vercel.app/ (downloaded to public/)
export const HERO_CLIPS = [
  { src: '/portfolio/videos/dune-trailer.mp4', poster: '/portfolio/thumbs/dune-trailer.jpg', label: 'A Desert Epic' },
  { src: '/wino/videos/seedance-demo.mp4', poster: '/wino/thumbs/seedance-demo.jpg', label: 'The Wide Frame' },
  { src: '/portfolio/videos/web-demo.mp4', poster: '/portfolio/thumbs/web-demo.jpg', label: 'Cinema Without Cameras' },
  { src: '/wino/videos/johnwick-character.mp4', poster: '/wino/thumbs/johnwick-character.jpg', label: 'Unbroken' }
]

export const SHOWREEL = [
  { src: '/wino/videos/showreel-1.mp4', poster: '/wino/thumbs/video-thumb-1.jpg', title: 'Fresh at Golden Hour' },
  { src: '/wino/videos/showreel-2.mp4', poster: '/wino/thumbs/video-thumb-2.jpg', title: 'Drop Day' },
  { src: '/wino/videos/showreel-3.mp4', poster: '/wino/thumbs/video-thumb-3.jpg', title: 'Portrait, Alive' },
  { src: '/wino/videos/showreel-4.mp4', poster: '/wino/thumbs/video-thumb-4.jpg', title: 'The Character Lives' },
  { src: '/wino/videos/showreel-5.mp4', poster: '/wino/thumbs/video-thumb-5.jpg', title: 'Made for the Feed' },
  { src: '/wino/videos/showreel-6.mp4', poster: '/wino/thumbs/video-thumb-6.jpg', title: 'First Frames of a Film' }
]

export const WINO_VERTICALS = [
  { src: '/wino/videos/vertical-01.mp4', poster: '/wino/thumbs/vertical-01.jpg', title: 'City Pulse 01' },
  { src: '/wino/videos/vertical-02.mp4', poster: '/wino/thumbs/vertical-02.jpg', title: 'City Pulse 02' },
  { src: '/wino/videos/vertical-03.mp4', poster: '/wino/thumbs/vertical-03.jpg', title: 'City Pulse 03' },
  { src: '/wino/videos/portrait-moment.mp4', poster: '/wino/thumbs/portrait-moment.jpg', title: 'Portrait in Motion' },
  { src: '/wino/videos/cinematic-01.mp4', poster: '/wino/thumbs/cinematic-01.jpg', title: 'A Film Still, Breathing' },
  { src: '/wino/videos/cinematic-02.mp4', poster: '/wino/thumbs/cinematic-02.jpg', title: 'The Long Take' }
]

export const WINO_EXTRA = [
  { src: '/wino/videos/factory-ninja.mp4', poster: '/wino/thumbs/factory-ninja.jpg', title: 'The Workshop Assassin' },
  { src: '/wino/videos/showcase-matrix.mp4', poster: '/wino/thumbs/showcase-matrix.jpg', title: 'Six Stories, One Frame' }
]

export const PORTFOLIO_VERTICALS = [
  { src: '/portfolio/videos/vertical-a1.mp4', poster: '/portfolio/thumbs/vertical-a1.jpg', title: 'Glow Serum — UGC Ad' },
  { src: '/portfolio/videos/vertical-a2.mp4', poster: '/portfolio/thumbs/vertical-a2.jpg', title: 'Streetwear Drop — UGC Ad' },
  { src: '/portfolio/videos/vertical-a3.mp4', poster: '/portfolio/thumbs/vertical-a3.jpg', title: 'Matcha Ritual — UGC Ad' },
  { src: '/portfolio/videos/vertical-a4.mp4', poster: '/portfolio/thumbs/vertical-a4.jpg', title: 'Gym Bottle — UGC Ad' },
  { src: '/portfolio/videos/vertical-a5.mp4', poster: '/portfolio/thumbs/vertical-a5.jpg', title: 'Scent Story — UGC Ad' },
  { src: '/portfolio/videos/vertical-a6.mp4', poster: '/portfolio/thumbs/vertical-a6.jpg', title: 'Golden Hour, Gathered' },
  { src: '/portfolio/videos/vertical-a7.mp4', poster: '/portfolio/thumbs/vertical-a7.jpg', title: 'The Slow Pour' },
  { src: '/portfolio/videos/vertical-a8.mp4', poster: '/portfolio/thumbs/vertical-a8.jpg', title: 'Through Neon' },
  { src: '/portfolio/videos/vertical-a9.mp4', poster: '/portfolio/thumbs/vertical-a9.jpg', title: 'Stroke by Stroke' }
]

export const PORTFOLIO_EXTRA = [
  { src: '/portfolio/videos/fitness-vlog.mp4', poster: '/portfolio/thumbs/fitness-vlog.jpg', title: 'Day One Energy' }
]

export function VideoCard({ src, poster, title }) {
  return (
    <div className="card !p-0 overflow-hidden group">
      <div className="relative aspect-video bg-black overflow-hidden">
        <video src={src} poster={poster} preload="metadata" muted loop playsInline controls className="h-full w-full object-cover" />
      </div>
      <div className="p-4"><p className="text-sm font-semibold">{title}</p></div>
    </div>
  )
}

export function VerticalVideo({ src, poster, title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className="relative aspect-[9/16]">
        <video src={src} poster={poster} preload="metadata" muted loop playsInline controls className="h-full w-full object-cover" />
      </div>
      <div className="bg-[#0A0A0A] p-3"><p className="text-xs font-semibold">{title}</p></div>
    </div>
  )
}
