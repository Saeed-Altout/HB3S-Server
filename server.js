const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(Number(process.env.PORT) || 5001, () => {
    console.log(`Server running at http://localhost:${Number(process.env.PORT) || 5001}`);
});

module.exports = app
