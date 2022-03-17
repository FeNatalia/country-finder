const express = require("express");
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    const url = 'https://restcountries.com/v3.1/all';
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data))
});

app.get("/api/:name", (req, res) => {
    const url = `https://restcountries.com/v3.1/name/${req.params.name}`;
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data))
});

app.get("/api/region/:name", (req, res) => {
    const url = `https://restcountries.com/v3.1/region/${req.params.name}`;
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data))
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
