
const express = require('express');
const {readFile, sendFile} = require('fs');

const app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'public');

app.get('/', (request, response) =>{
    readFile( './public/index.ejs' , 'utf8', (err, ejs) =>{
        if (err){
            response.status(500).send('sorry, my bad')
        }
        response.render('index');
    
    })
});


app.get('/about', (request, response) =>{
    readFile('./public/about.ejs', 'utf-8' , (err, ejsl) => {
        if (err){ response.status(500).send('sorry, my bad')

            }
        response.render('about');
    })
    
});
app.use( (request, response) =>{
        response.status(404).render('404');
});
app.listen(3000, () => console.log(`App avaliable on http://localhots:3000`));