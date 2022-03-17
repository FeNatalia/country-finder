import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Details = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  const goBackButton = () => navigate("/");

  return (
    <div className='details'>
      <header className='details__header'>
        <img src={state.country.flags.png} alt={state.country.name.common} />
        <h1>{state.country.name.common}</h1>
      </header>
      <div id="map">
        <MapContainer center={state.country.latlng} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={state.country.latlng}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className='details__body'>
        <p>Official name: <strong>{state.country.name.official}</strong></p>
        <p>Region: <strong>{state.country.region}</strong></p>
        <p>Subregion: <strong>{state.country.subregion}</strong></p>
        <p>Country Population: <strong>{state.country.population}</strong></p>
        <p>Capital: <strong>{state.country.capital}</strong></p>
      </section>

      <div className='details___button'>
        <button className="btn--primary" onClick={ () =>goBackButton()}>
          Go back
        </button>
      </div>
    </div>
  )
}
