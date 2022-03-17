import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Details = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  const goBackButton = () => navigate("/");

  return (
    <div className='details'>
      <header className='details__header'>
        <img src={state.country.flags.png} alt={state.country.name.common} />
        <h1>{state.country.name.common}</h1>
        <h3>Official name: {state.country.name.official}</h3>
      </header>
      <section className='details__body'>
        <p><strong>Region: </strong>{state.country.region}</p>
        <p><strong>Subregion: </strong>{state.country.subregion}</p>
        <p><strong>Population: </strong>{state.country.population}</p>
      </section>
      <div className='details___button'>
        <button className="btn--primary" onClick={ () =>goBackButton()}>
          Go back
        </button>
      </div>
    </div>
  )
}
