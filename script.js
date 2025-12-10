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

