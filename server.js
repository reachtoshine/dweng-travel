const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.redirect("/day/1")
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/day/:day', (req, res) => {
    res.render('day' + req.params.day + '.ejs', { day: Number(req.params.day) });
});
