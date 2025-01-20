const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/collect-data', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.json({ 
        message: 'Data collected successfully',
        receivedData: data
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
