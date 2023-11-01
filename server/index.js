const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Your route definition
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.send('Form data received');
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
