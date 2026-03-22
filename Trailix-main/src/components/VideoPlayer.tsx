import { useState } from 'react'
import { PlayIcon } from './layout/icons'

interface VideoPlayerProps {
  src?: string
  poster?: string
}

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="video-player">
      {!playing ? (
        <div
          className="video-placeholder"
          style={poster ? { backgroundImage: `url(${poster})` } : {}}
          onClick={() => src && setPlaying(true)}
        >
          <button className="play-btn">
            <PlayIcon />
          </button>
        </div>
      ) : (
        <video
          className="video-element"
          src={src}
          autoPlay
          controls
          poster={poster}
        />
      )}
    </div>
  )
}
