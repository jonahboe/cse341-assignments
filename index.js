/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');
const corsOptions = {
    origin: "https://arcane-temple-26045.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://jonahboe:JuZnmv2Wj7VJcTB8@cse341-wbw23.azure.mongodb.net/test?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/team/week01/ta01');
const ta02Routes = require('./routes/team/week02/ta02');
const ta03Routes = require('./routes/team/week03/ta03');
const ta04Routes = require('./routes/team/week04/ta04');

const pa01Routes = require('./routes/prove/week01/pa01');
const pa02Routes = require('./routes/prove/week02/pa02');
const pa03Routes = require('./routes/prove/week03/pa03');
const pa04Routes = require('./routes/prove/week04/pa04');

mongoose
    .connect(
        MONGODB_URL, options
    )
    .then(result => {
        app.use(express.static(path.join(__dirname, 'public')))
            .set('views', path.join(__dirname, 'views'))
            // For view engine as ejs
            //.set('view engine', 'ejs')
            // For view engine as Pug
            .set('view engine', 'pug') // For view engine as PUG.
            // For view engine as hbs (Handlebars)
            //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
            //.set('view engine', 'hbs')
            .use(bodyParser({extended: true})) // For parsing the body of a POST

            .use('/ta01', ta01Routes)
            .use('/ta02', ta02Routes)
            .use('/ta03', ta03Routes)
            .use('/ta04', ta04Routes)

            .use('/pa01', pa01Routes)
            .use('/pa02', pa02Routes)
            .use('/pa03', pa03Routes)
            .use('/pa04', pa04Routes)

            .get('/', (req, res, next) => {
                // This is the primary index, always handled last.
                res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
            })
            .use((req, res, next) => {
                // 404 page
                res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
            })
            .listen(PORT, () => console.log(`Listening on ${ PORT }`));
    })
    .catch(err => {
        console.log(err);
    });

