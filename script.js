const countrySelect = document.getElementById('countrySelect');

const ALL_COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,currencies,languages,flags';

async function fetchCountries() {
    try {
        const response = await fetch(ALL_COUNTRIES_API);
        
        if (!response.ok) {
            throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }

        const countries = await response.json();

        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        countrySelect.innerHTML = '<option value="" disabled selected>Оберіть країну</option>';

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            countrySelect.appendChild(option);
        });

    } catch (error) {
        console.error('Помилка при отриманні країн:', error);
        countrySelect.innerHTML = '<option disabled>Помилка завантаження даних</option>';
    }
}

document.addEventListener('DOMContentLoaded', fetchCountries);

const countryInfo = document.getElementById('countryInfo');

async function fetchCountryDetails(countryName) {
    countryInfo.innerHTML = '<div class="loader">Завантаження інформації...</div>';

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,capital,population,region,currencies,languages,flags`);
        
        if (!response.ok) {
            throw new Error('Країну не знайдено');
        }

        const data = await response.json();
        const country = data[0];

        renderCountryInfo(country);

    } catch (error) {
        countryInfo.innerHTML = `<p class="error">Помилка: ${error.message}</p>`;
    }
}

function renderCountryInfo(country) {
    const currencies = country.currencies 
        ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') 
        : 'Немає даних';

    const languages = country.languages 
        ? Object.values(country.languages).join(', ') 
        : 'Немає даних';

    const html = `
        <div class="country-card">
            <img src="${country.flags.svg}" alt="Прапор ${country.name.common}" class="country-flag">
            <h2>${country.name.common}</h2>
            
            <ul class="country-details-list">
                <li><strong>Столиця:</strong> ${country.capital ? country.capital[0] : 'Немає'}</li>
                <li><strong>Населення:</strong> ${country.population.toLocaleString()} осіб</li>
                <li><strong>Регіон:</strong> ${country.region}</li>
                <li><strong>Валюта:</strong> ${currencies}</li>
                <li><strong>Мови:</strong> ${languages}</li>
            </ul>
        </div>
    `;

    countryInfo.innerHTML = html;
}

countrySelect.addEventListener('change', (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry) {
        fetchCountryDetails(selectedCountry);
    }
});

