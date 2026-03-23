import { Navbar } from '../../../components/layout/Navbar'
import { VideoPlayer } from '../../../components/VideoPlayer'
import { ReviewSection } from '../../../components/ReviewSection'
import { PlusIcon } from '../../../components/layout/icons'

const MOCK_MOVIE = {
  title: 'Cars',
  genre: 'Animación',
  year: 2006,
  isPremium: true,
  description:
    'El aspirante campeón de carreras, Rayo McQueen, parece que está a punto de conseguir el éxito, la fama y todo lo que había soñado. Sin embargo, Rayo cometió el error de desviar su destino y terminó llegando a un pequeño pueblo olvidado de la Ruta 66.',
  posterUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg',
  backdropUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg',
  trailerUrl: '',
}

const MOCK_REVIEWS: {
  id: string
  author: string
  date: string
  rating: number
  comment: string
  isOwn: boolean
}[] = []

export const MovieDetailPage = () => {
  return (
    <div className="mdp">
      <Navbar backLabel="Volver al catálogo" onBack={() => {}} />

      {/* ── Hero ── */}
      <div className="mdp-hero">
        <div
          className="mdp-hero-bg"
          style={{ backgroundImage: `url(${MOCK_MOVIE.backdropUrl})` }}
        />
        <div className="mdp-hero-grad" />

        <div className="mdp-hero-body">
          <img
            src={MOCK_MOVIE.posterUrl}
            alt={MOCK_MOVIE.title}
            className="mdp-poster"
          />
          <div className="mdp-info">
            {MOCK_MOVIE.isPremium && (
              <span className="mdp-premium">
                <span className="mdp-premium-star">★</span> PREMIUM
              </span>
            )}
            <h1 className="mdp-title">{MOCK_MOVIE.title}</h1>
            <div className="mdp-tags">
              <span className="mdp-genre">{MOCK_MOVIE.genre}</span>
              <span className="mdp-year">{MOCK_MOVIE.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mdp-content">

        {/* Descripción + Mi lista */}
        <div className="mdp-desc-row">
          <p className="mdp-desc">{MOCK_MOVIE.description}</p>
          <button className="mdp-list-btn">
            <PlusIcon /> Mi lista
          </button>
        </div>

        <hr className="mdp-hr" />

        {/* Player */}
        <VideoPlayer src={MOCK_MOVIE.trailerUrl} />

        <hr className="mdp-hr" />

        {/* Reviews */}
        <ReviewSection
          reviews={MOCK_REVIEWS}
          averageRating={0}
          onSubmit={(r, c) => console.log('submit', r, c)}
          onDelete={(id) => console.log('delete', id)}
        />
      </div>
    </div>
  )
}
