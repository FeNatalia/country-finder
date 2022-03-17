import React from 'react'

export const CountryDetail = ({ title, image, capital, population}) => {
  return (
    <div className='country-detail'>
      <div className='country-detail__header'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className='country-detail__body'>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Population: </strong>{population}</p>
      </div>
    </div>
  )
}
