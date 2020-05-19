import React, { useState } from 'react'
import { Card as AntdCard } from 'antd'
import ReactCardFlip from 'react-card-flip'

const { Meta } = AntdCard

const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const onCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
      <AntdCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt='example' src={item.image} />}
        onClick={onCardClick}
      >
        <Meta title={item.name} />
      </AntdCard>

      <AntdCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt='example' src={item.image} />}
        onClick={onCardClick}
      >
        <Meta title={item.price} />
      </AntdCard>
    </ReactCardFlip>
  )
}

export default Card
