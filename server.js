// import your node modules


// add your server code starting here
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello FSW12');
});

server.listen(9000, () => console.log('\n== API on port 9k ==\n'));