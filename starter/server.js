
import express from 'express';

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello World!' });
});

app.listen(PORT, () => {
    console.log(`Dealership Server started, open http://localhost:${PORT}`);
});
