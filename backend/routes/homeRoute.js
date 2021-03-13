const { Router } = require("express")
const router = Router()
const path = require("path")
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "index.html"))
    // res.json({mes:"max"})
})

module.exports = router