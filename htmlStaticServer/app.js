var express = require("express");
var app = express();

app.use(express.static("/wwl-m-jinDong/build/"));
app.get("/", function (req, res) {
	res.sendFile(path.resolve("/wwl-m-jinDong/build/index.html"));
});
var server = app.listen(8084, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});
