interface Card {
  uuid: string
  icon_id: string
}

export const Card = ({ card, isOwner }: { card: Card; isOwner: boolean }) => (
  <div className={`card ${isOwner ? 'card--owner' : ''}`}>
    {isOwner ? (
      <svg>
        <use xlinkHref={`#icon-cards_${card.icon_id}`} />
      </svg>
    ) : (
      false
    )}
  </div>
)
