const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hello users");
})

module.exports = router;