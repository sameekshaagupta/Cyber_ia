const express = require('express');
const app = express();
app.use(express.json());

let services = [];

app.post('/register', (req, res) => {
    const { name, url } = req.body;
    services.push({ name, url });
    res.json({ message: `${name} registered at ${url}` });
});

app.get('/services/:name', (req, res) => {
    const service = services.find(s => s.name === req.params.name);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.json(service);
});

app.listen(4000, () => {
    console.log('✅ Registry running on http://localhost:4000');
});
