const port = process.env.PORT || 5000

const express = require("express"); // load express package
const bodyParser = require("body-parser"); // load body parser for http requests
const app = express();
const path = require("path");
const multer = require("multer");
const mongo = require("mongodb");
const compression = require('compression');
const storage = multer.diskStorage({
    // This adds a name and extension to the uploaded file.
    destination: function (req, file, cb) {
        cb(null, "src/uploads/"); // location where the uploaded file needs to be stored
    },
    filename: function (req, file, cb) {
        // changes file name to filename + date + original extension
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    },
});
const upload = multer({
    storage: storage,
});

require("dotenv").config();
// database connection
var db = null;
var url = "mongodb+srv://" + process.env.DB_HOST;

mongo.MongoClient.connect(
    url, {
        useUnifiedTopology: true,
    },
    function (err, client) {
        if (err) {
            throw err;
        }

        db = client.db(process.env.DB_NAME);
        console.log("Connected correctly to MongoDB server");
    }
);

app.use(express.static(__dirname + "/src"))
    .use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    .use(compression());
app.set("view engine", "ejs") // Templating
    .set("views", "views"); // Templating



app.get("/", home) // Routing
    .get("/upload", uploadPhotograph)
    .get("/series", series)
    .get("/edit/:id", editPhotograph)
    .get("/:id", photographDetails)

    .post("/upload", upload.single("image"), add)
    // .post("/series", moveSeries)
    .post("/edit/:id", update)
    .post("/:id", addSeries);

app.use(notFound);
app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});



// 404 error -> still need to make a page for this.
function notFound(req, res) {
    res.status(404).send("404 page");
}


// home page
async function home(req, res, next) {
    const allData = await db.collection("data").find().toArray();
    allData.reverse();

    renderPage(allData)

    function renderPage(allData) {
        // console.log("this is all data", allData);
        res.render("index.ejs", {
            data: allData
        });
    }

}

function uploadPhotograph(req, res, next) {
    // db.collection("friendshipData").find().toArray(done);
    res.render("upload.ejs");
}

// upload photographs to server
function add(req, res, next) {
    db.collection("data").insertOne({
            photographer: req.body.photographer,
            location: req.body.location,
            title: req.body.titlePhoto,
            description: req.body.description,
            image: req.file ? req.file.filename : null, // zet alles na de ? uit, dan krijg je een data object. Daar kan je meer mee.
        },
        renderPage()
    );

    function renderPage(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/?newimage");
        }
    }
}


function photographDetails(req, res, next) {
    // create new object ID to refer to the params
    let ObjectId = mongo.ObjectId;
    let id = req.params.id;
    let searchID = new ObjectId(id);


    db.collection("data").findOne({
        _id: searchID
    }, (err, data) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        }
        if (data) {
            res.render('detailpage.ejs', {
                data: data
            });
        } else {
            console.log('Error: client ID could not been found!');
        }
    });
}





function editPhotograph(req, res, next) {
    // create new object ID to refer to the params
    let ObjectId = mongo.ObjectId;
    let id = req.params.id;
    let searchID = new ObjectId(id);


    db.collection("data").findOne({
        _id: searchID
    }, (err, data) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        }
        if (data) {
            res.render('edit_detailpage.ejs', {
                data: data
            });
        } else {
            console.log('Error: client ID could not been found!');
        }
    });
}

function update(req, res, next) {
    let ObjectId = mongo.ObjectId;
    let id = req.params.id;
    let searchID = new ObjectId(id);

    db.collection('data').updateOne({
        _id: searchID
    }, {
        $set: {
            photographer: req.body.edit_photographer
        },
        $currentDate: {
            lastModified: true
        }
    }, done);


    function done(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/" + id);
        }
    }


};



// series
async function series(req, res, next) {
    const allData = await db.collection("data").find().toArray();
    allData.reverse();

    const series = allData.filter(data => {
        return data.series === true
    });

    renderPage(series)

    function renderPage(series) {
        res.render("series.ejs", {
            data: series
        });
    }

}

function uploadPhotograph(req, res, next) {
    res.render("upload.ejs");
}



function addSeries(req, res, next) {
    let ObjectId = mongo.ObjectId;
    let id = req.params.id;
    let searchID = new ObjectId(id);
    let checkbox = req.body.addPhotoBox

    if (checkbox) {
        db.collection('data').updateOne({
            _id: searchID
        }, {
            $set: {
                series: true
            },
            $currentDate: {
                lastModified: true
            }
        }, done);
    } else {
        db.collection('data').updateOne({
            _id: searchID
        }, {
            $set: {
                series: false
            },
            $currentDate: {
                lastModified: true
            }
        }, done);
    }


    function done(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/" + id);
        }
    }


};