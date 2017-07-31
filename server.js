const http = require('http');

var server = express();

// View (template) Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set static path (folder)
app.use(express.static(path.join(__dirname, 'public')));

// Global Variables
app.use((req, res, next) => {
    res.locals.errors = null;
    next();
})


// Routes

// Opening index page

app.get('/', (req, res) => {
    // Using Mongojs put files from the database to render
    db.users.find(function (err, docs) {
        res.render('index', {
            title: 'This is Traversy Express Crash',
            heading: 'Using MongoJS to add and delete users in MongoDB',
            people: docs
        });
        console.log(docs);
    });
});

// Starting express server
app.listen(4040, () => {
    console.log(`Server started on port 4040`)
});