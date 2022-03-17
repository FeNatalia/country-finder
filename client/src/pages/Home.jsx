import React from 'react';
import { useState, useEffect } from 'react';
import { CountryDetail } from '../components/CountryDetail';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        });
    }, []);

    const searchCountry = async country => {
    if (country.length < 3 || country === '') return
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

    const AllCountries = data.map((country) => <CountryDetail key={country.name.common} title={country.name.common} image={country.flags.png}/>)
    
    return (
        <div>
            <h1>My App</h1>
            <input type="text" placeholder='Search for a country' onChange={(e) => searchCountry(e.target.value)}/>
            <select onChange={ region => filterByRegion(region.target.value)}>
                <option value="">Countries by Region</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            {AllCountries}
        </div>
    )
}
