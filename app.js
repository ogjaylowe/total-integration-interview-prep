// Require Libraries
const express = require('express');
const cors = require('cors');

// App Setup
const app = express();
app.use(cors())

// Routes
app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    res.send('homepage')
})

app.get('/twopointersCompanion', (req, res) => {
    // Handle the home page when we haven't queried yet
    res.json({
        "test1": '[10,22,22,22,35,52,55,55,55,55,79,79,81,96,96,96,96,96]',
        "test2":'[55,55,55,55,96,96,96,96]'
    })
})

// Start Server

app.listen(3000, () => {
    console.log('server listening on port 3000');
});