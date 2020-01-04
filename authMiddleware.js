const jwt = require("jsonwebtoken");
const Database = require('./Database');
const db = new Database();
const APP_SECRET = "myappsecret";
const anonOps = [{ method: "POST", urls: ["/passport/post", "/passport/search"] }]

module.exports = function (req, res, next) {
    if (anonOps.find(op => op.method === req.method
        && op.urls.find(url => req.url.startsWith(url)))) {
        next();
    } else if (req.url === "/login" && req.method === "POST") {
        let username = req.body.username;
        let password = req.body.password;
        if (db.checkConnection(username, password) === true) {
            res.json({
                success: true,
                token: jwt.sign({ data: username, expiresIn: "1h" }, APP_SECRET)
            });
        } else {
            res.json({ success: false });
        }
        res.end();
    } else {
        let token = req.headers["authorization"];
        if (token != null && token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1);
            jwt.verify(token, APP_SECRET);
            next();
        } else {
            res.statusCode = 401;
            res.end();
        }
    }
}