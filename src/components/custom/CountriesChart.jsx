import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { withCountriesContextConsumer } from '../../contexts/withCountriesContext'

const CountriesChart = ({ countriesState: { selectedCountries } }) => {

    const labels = selectedCountries.map((country) => country.country)
    const recoveredData = selectedCountries.map((country) => country.recovered)
    const criticalData = selectedCountries.map((country) => country.critical)
    const deathData = selectedCountries.map((country) => country.deaths)

    const dados = {
        labels,
        datasets: [
            {
                label: 'Recuperados',
                data: recoveredData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 3,
            },

            {
                label: 'Críticos',
                data: criticalData,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 3,
            },

            {
                label: 'Mortes',
                data: deathData,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 3,
            },
        ],
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Bar data={dados} />
        </div>
    )
}

export default withCountriesContextConsumer(CountriesChart)