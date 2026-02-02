const express = require("express");
const router = require("express").Router()
const serviceRouter = require("./readingRouter")

router.use("/", serviceRouter)

module.exports = router