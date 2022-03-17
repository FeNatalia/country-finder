import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryDetail } from '../components/CountryDetail';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = async () => {
        const res = await fetch("/api");
        const data = await res.json();
        await setData(data);
    }

    const searchCountry = async country => {
        if (country.length < 3 || country === '') return
        const res = await fetch(`api/${country}`)
        const data = await res.json()
        await setData(data);
    }

    const filterByRegion = async region => {
        if (region === "") return
        const res = await fetch(`api/region/${region}`)
        const data = await res.json()
        await setData(data);
    }

    const AllCountries = data.map((country, index) => <Link to={"/details"} state={{country}} key={index}><CountryDetail key={country.name.common} 
    title={country.name.common} image={country.flags.png} capital={country.capital} population={country.population}/></Link>)
    
    return (
        <div className='home'>
            <header className='home___header'>
                <h2>Country Finder App</h2>
                <p>Learn about the world with us</p>
            </header>
            <section className='home___search'>
                <input type="text" placeholder='Search for a country' onChange={(e) => searchCountry(e.target.value)}/>
                <select onChange={ region => filterByRegion(region.target.value)}>
                    <option value="">Countries by Region</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </section>
            <section className='home___results'>
                {AllCountries}
            </section>
        </div>
    )
}
