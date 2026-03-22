import { useState } from 'react'
import { StarIcon } from './layout/icons'

interface StarRatingProps {
  value: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: 'sm' | 'md'
}

export const StarRating = ({ value, onChange, readonly = false, size = 'md' }: StarRatingProps) => {
  const [hovered, setHovered] = useState(0)

  return (
    <div className={`star-rating ${size}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className="star-btn"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
        >
          <StarIcon filled={star <= (hovered || value)} />
        </button>
      ))}
    </div>
  )
}
