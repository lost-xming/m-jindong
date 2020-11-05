var express = require("express");
var app = express();

app.use(express.static("/wwl-m-jinDong/dist/"));
app.get("/", function (req, res) {
	res.send("Hello World!");
});
var server = app.listen(8084, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});
