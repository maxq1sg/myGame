const Result = require("../models/resultModel")

const router = require("express").Router()


router.get("/", async (req, res) => {
    console.log(req.headers.access)
    if (req.headers.access == "123") {
        console.log("inside")
        const data = await Result.find()
        const sortedData = data.sort((a, b) => b.score - a.score)

        res.json(sortedData.slice(0, 10))
    } else {
        res.json({ message: "тебя тут не должно быть" })
    }

})
router.post("/", async (req, res) => {
    try {
        const { name, score } = req.body
        const user = new Result({
            name, score
        })
        await user.save()
        const data = await Result.find()
        const sortedData = data.sort((a, b) => b.score - a.score)
        const index = sortedData.findIndex((item) => {
            return item._id.toString() === user._id.toString()
        }) + 1
        res.json({
            data: sortedData.slice(0, 10),
            index
        })
    } catch (error) {
        res.status(404).json({ mes: error.message })
    }
})
module.exports = router