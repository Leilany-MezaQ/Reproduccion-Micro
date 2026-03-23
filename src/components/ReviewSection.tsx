import { useState } from 'react'
import { StarRating } from './StarRating'

interface Review {
  id: string
  author: string
  date: string
  rating: number
  comment: string
  isOwn?: boolean
}

interface ReviewSectionProps {
  reviews: Review[]
  averageRating: number
  onSubmit?: (rating: number, comment: string) => void
  onDelete?: (id: string) => void
}

export const ReviewSection = ({
  reviews,
  onSubmit,
  onDelete,
}: ReviewSectionProps) => {
  const [userRating, setUserRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    if (userRating === 0) return
    onSubmit?.(userRating, comment)
    setUserRating(0)
    setComment('')
  }

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-title">Reseñas</h2>
      </div>

      {/* Write review */}
      <div className="review-card">
        <p className="review-card-label">Tu reseña</p>
        <StarRating value={userRating} onChange={setUserRating} />
        <textarea
          className="review-textarea"
          placeholder="Escribe un comentario (opcional)..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
        />
        <button
          className={`review-submit-btn ${userRating === 0 ? 'disabled' : ''}`}
          onClick={handleSubmit}
          disabled={userRating === 0}
        >
          Publicar reseña
        </button>
      </div>

      {/* Empty state */}
      {reviews.length === 0 && (
        <p className="review-empty">Sé el primero en dejar una reseña.</p>
      )}

      {/* Existing reviews */}
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-top">
            <div className="review-author-row">
              <div className="review-avatar">
                {review.author[0].toUpperCase()}
              </div>
              <div>
                <p className="review-author-name">{review.author}</p>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-rating-row">
              <StarRating value={review.rating} readonly size="md" />
              {review.isOwn && (
                <button
                  className="review-delete-btn"
                  onClick={() => onDelete?.(review.id)}
                >
                  Eliminar
                </button>
              )}
            </div>
          </div>
          {review.comment && (
            <p className="review-comment">{review.comment}</p>
          )}
        </div>
      ))}
    </section>
  )
}
