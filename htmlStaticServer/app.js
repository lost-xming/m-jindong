const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("/wwl-m-jinDong/build/"));
app.get("*", function (req, res) {
	res.sendFile(path.resolve(__dirname, "index.html"));
});
const server = app.listen(8084, function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});
