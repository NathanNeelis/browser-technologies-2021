const port = process.env.PORT || 5000

const express = require("express"); // load express package
const bodyParser = require("body-parser"); // load body parser for http requests
const app = express();
const multer = require("multer");
const mongo = require("mongodb");

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
        // console.log(process.env.DB_NAME);
    }
);

app.use(express.static(__dirname + "/src"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", home); // Routing
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

    renderPage(allData)

    function renderPage(allData) {
        console.log("this is all data", allData);
        res.render("index.ejs", {
            data: allData
        });
    }

}