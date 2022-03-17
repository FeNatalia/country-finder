import React from 'react'

export const CountryDetail = ({title, image}) => {
  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}
