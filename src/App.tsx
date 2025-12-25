import { useState } from 'react'
import cardsData from './data/cards.json'
import { Card } from './Card'

function App() {
  const [cards] = useState(cardsData)

  return (
    <div className='playground'>
      <div className='playground-user-section'>
        <div className='cards'>
          {cards.slice(0, 6).map((card) => (
            <Card
              key={card.uuid}
              isOwner={false}
              card={card}
            />
          ))}
        </div>
      </div>
      <div className='playground-gaming-section'></div>
      <div className='playground-user-section'>
        <div className='cards'>
          {cards.slice(0, 6).map((card) => (
            <Card
              key={card.uuid}
              isOwner={true}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* 
      <div className='cards'>
        {cards.map((card) => (
          <div
            className='card'
            key={card.uuid}
          >
            <svg>
              <use xlinkHref={`#icon-cards_${card.icon_id}`} />
            </svg>
          </div>
        ))}
      </div>
      */

export default App
