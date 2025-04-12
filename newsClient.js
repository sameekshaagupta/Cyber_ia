const axios = require('axios');

async function getNews(city) {
    try {
        // Get the service URL from the registry
        const { data: service } = await axios.get('http://localhost:4000/services/NewsService');
        const response = await axios.get(`${service.url}?city=${city}`);
        console.log('Headlines:');
        response.data.headlines.forEach((headline, index) => {
            console.log(`${index + 1}. ${headline}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getNews('Delhi');
