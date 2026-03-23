import { useEffect, useRef } from 'react'
import { api } from '@/lib/axiosConfig'

interface VideoPlayerProps {
  src?: string
  poster?: string
  movieId?: string
  initialTime?: number
}

const PROGRESS_INTERVAL_MS = 10_000 // guarda cada 10 segundos

export const VideoPlayer = ({ src, poster, movieId, initialTime = 0 }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Reanudar desde donde dejó el usuario
  const handleLoadedMetadata = () => {
    if (videoRef.current && initialTime > 0) {
      videoRef.current.currentTime = initialTime
    }
  }

  // Guardar progreso en el backend
  const saveProgress = async (completed = false) => {
    if (!movieId || !videoRef.current) return
    const current_time = Math.floor(videoRef.current.currentTime)
    const duration = Math.floor(videoRef.current.duration) || 0
    if (current_time === 0) return

    try {
      await api.post(`/streaming/progress/${movieId}`, {
        current_time,
        duration,
        completed,
      })
    } catch {
      // silencioso — no interrumpir la reproducción por un error de progreso
    }
  }

  // Iniciar guardado automático cuando empieza a reproducir
  const handlePlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => saveProgress(false), PROGRESS_INTERVAL_MS)
  }

  // Pausar el guardado automático
  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    saveProgress(false)
  }

  // Marcar como completado al terminar
  const handleEnded = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    saveProgress(true)
  }

  // Limpiar intervalo al desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (!src) {
    return (
      <div className="video-player">
        <div className="video-placeholder">
          <p style={{ color: '#aaa', textAlign: 'center' }}>Video no disponible</p>
        </div>
      </div>
    )
  }

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video-element"
        src={src}
        poster={poster}
        controls
        autoPlay
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />
    </div>
  )
}
