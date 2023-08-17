var express = require("express");
var router = express.Router();

router.post("/", function (req, resp) {
    console.log(req);



    return resp.status(200).json("pairs added")
});

module.exports = router;