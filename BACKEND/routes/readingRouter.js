const router = require("express").Router()
const readingController = require("../controller/readingController")

router.route("/createReadings").post((req, res) => readingController.create(req, res))
router.route("/getAll").get((req, res) => readingController.getAll(req, res))


module.exports = router     