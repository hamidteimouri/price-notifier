var express = require("express");
var router = express.Router();
const {body, validationResult} = require('express-validator');

router.post("/",
    body('base').notEmpty().withMessage("base is required").trim(),
    body('quote').notEmpty().withMessage("quote is required").trim(),
    function (req, res) {

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(422).send({
                errors: result.array()
            });
        }


        return res.status(200).json("I will add it later !")
    });

module.exports = router;