const router = Router()
router.get("/", (req, res) => {
    res.callback(null, md5("hello"))
    // StudentModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        StudentModel.getOne(req.params, res.callback)
    }
)
router.get("/stud/:id", (req, res) => {
    StudentModel.populateData1(req.params, res.callback)
})
router.get("/stu/:id", (req, res) => {
    StudentModel.populateData1(req.params, res.callback)
})
router.post("/asyncFunctionalityWaterfall", (req, res) => {
    StudentModel.asyncFunctionalityWaterfall(req.body, res.callback)
})

router.post("/asyncFunctionalityParallel", (req, res) => {
    StudentModel.asyncFunctionalityParallel(req.body, res.callback)
})

router.post("/asyncFunctionWhilst", (req, res) => {
    StudentModel.asyncFunctionWhilst(req.body, res.callback)
})
router.post("/getLimitedStudents", (req, res) => {
    StudentModel.getLimitedStudents(req.body, res.callback)
})
router.post("/", (req, res) => {
    StudentModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`Delete For Id ${req.params.id}`)
})

export default router
