var env = 'dev';//or 'prod'
/* Includes */
var express = require('express');
var app = express();

var exhb = require('express3-handlebars');
var handlebars = exhb.create();

var dbURL = process.env.DATABASE_URL;
var mongo = require('mongodb');

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exhb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Mongo DB
function useDB(collectionName, cb){
	mongo.connect(dbURL, function(err, db){
		if(err) throw err;

		var collection = db.collection(collectionName);

		if(!!cb){
			cb(db, collection);
		}

	});
}


/* Rendering */
//Helpersvar
siteData = {
	"url": env == 'prod' ? "http://qr-tags.herokuapp.com/" : 'http://127.0.0.1:3000/'
};

function getParam(req, param){
	return req.params[param];
}

function formatData(pageSlug, pageTitle, data){
	returnObj = {
		"site": siteData,
		"page": {
			"slug": pageSlug,
			"title": pageTitle
		},
		"data": data
	};

	return returnObj;
}

//Rendering
app.get('/tag/:tagId', function(req, res){
  var tagId = getParam(req, 'tagId');

	useDB('tags', function(db, collection){
		collection.find({ "tagId": tagId }).toArray(function(err, data){
			if(data.length === 0){//None Found
				res.render('noTag.handlebars', formatData("noTag", "No Tag", { "tagId": tagId }));
			} else{
				var tag = data[0];

				res.render('viewTag.handlebars', formatData("viewTag", "View Tag", { "tag": tag }));
			}
		});
	});


});

app.get('/position', function(req, res){
	var latitude = req.query.latitude;
	var longitude = req.query.longitude;
	var tagId = req.query.tagId;

	console.log(latitude, longitude, "For " + tagId);
});

var port = env == 'prod' ? Number(process.env.PORT || 5000) : 3000;
app.listen(port);
