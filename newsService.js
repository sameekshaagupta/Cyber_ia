const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 7000;

app.get('/news', (req, res) => {
    const { city } = req.query;
    res.json({
        headlines: [
            `Breaking: Major event in ${city}!`,
            `Update: ${city} trending in the news today`,
            `Alert: Something interesting in ${city}`
        ]
    });
});

// Register this service with the registry
axios.post('http://localhost:4000/register', {
    name: 'NewsService',
    url: `http://localhost:${PORT}/news`
}).then(() => console.log(' NewsService registered'))
  .catch(err => console.error(' Registration failed:', err.message));

app.listen(PORT, () => {
    console.log(` NewsService running at http://localhost:${PORT}`);
});
