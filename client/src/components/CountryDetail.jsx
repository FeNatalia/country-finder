import React from 'react';

export const CountryDetail = ({ title, image, capital, subregion, population }) => {
  return (
    <div className='country-detail'>
      <div className='country-detail__header'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{subregion}</p>
      </div>
      <div className='country-detail__body'>
        <p>Capital: <strong>{capital}</strong></p>
        <p>Country Population: <strong>{population}</strong></p>
      </div>
    </div>
  )
}
