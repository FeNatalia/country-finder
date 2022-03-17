import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryDetail } from '../components/CountryDetail';

export const Home = () => {
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCountries();
    }, []);

    const getAllCountries = async () => {
        try {
            const res = await fetch("/api");
            const data = await res.json();
            await setData(data);
            setStatus(1);
        } catch {
            setStatus(2);
        }
    }

    const searchCountry = async country => {
        try {
            if (country.length < 3 || country === '') return
            const res = await fetch(`api/${country}`)
            const data = await res.json()
            await setData(data);
            setStatus(1);
        } catch {
            setStatus(2);
        }
    }

    const filterByRegion = async region => {
        try {
            if (region === "") return
            const res = await fetch(`api/region/${region}`)
            const data = await res.json()
            await setData(data);
            setStatus(1);
        } catch {
            setStatus(2);
        }
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
                {status === 0 && <p>⏱ Loading ... ⏱</p>}
                {status === 1 && AllCountries}
                {status === 2 && <p>🚨 Error 🚨</p>}
            </section>
        </div>
    )
}
