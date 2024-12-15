const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    const user = { name: 'Hassan Ali', age: 20 };
    res.render('index', { user });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
