const router = Router()
router.get("/search", (req, res) => {
    //res.callback(null, md5("hello"))
    StudentModel.search(req.query, res.callback)
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
    StudentModel.populateData(req.params, res.callback)
})
router.post("/asyncFunctionalityWaterfall", (req, res) => {
    StudentModel.asyncFunctionalityWaterfall(req.body, res.callback)
})
router.post("/asyncWaterfall", (req, res) => {
    StudentModel.asyncWaterfall(req.body, res.callback)
})
router.post("/asyncFunctionalityParallel", (req, res) => {
    StudentModel.asyncFunctionalityParallel(req.body, res.callback)
})
router.post("/asyncParallel", (req, res) => {
    StudentModel.asyncParallel(req.body, res.callback)
})

router.post("/asyncFunctionWhilst", (req, res) => {
    StudentModel.asyncFunctionWhilst(req.body, res.callback)
})
router.post("/getLimitedStudents", (req, res) => {
    StudentModel.getLimitedStudents(req.body, res.callback)
})
router.post("/getLimitedStudent", (req, res) => {
    StudentModel.getLimitedStudent(req.body, res.callback)
})
router.post("/asyncConcatLimit", (req, res) => {
    StudentModel.asyncConcatLimit(req.body, res.callback)
})
router.post("/save", (req, res) => {
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
router.post("/asyncConcat", (req, res) => {
    StudentModel.asyncConcat(req.body, res.callback)
})
router.post("/asyncConcatSeries", (req, res) => {
    StudentModel.asyncConcatSeries(req.body, res.callback)
})
router.post("/asyncEach", (req, res) => {
    StudentModel.asyncEach(req.body, res.callback)
})

export default router
