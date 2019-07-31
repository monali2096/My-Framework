import DivisionModel from "../models/DivisionModel"

const router = Router()
router.get("/lodash/:id", (req, res) => {
    DivisionModel.lodashFunctions(req.body, res.callback)
})
router.get("/", (req, res) => {
    DivisionModel.search(req.query, res.callback)
})
router.get("/:id", (req, res) => {
    DivisionModel.find(req.params, res.callback)
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
        DivisionModel.getOne(req.params, res.callback)
    }
)
router.post("/save", (req, res) => {
    DivisionModel.saveData(req.body, res.callback)
})



router.put("/:id", (req, res) => {
    DivisionModel.updateData(req.params, req.body, res.callback)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})


router.delete("/:id", (req, res) => {
    DivisionModel.deleteData(req.params, res.callback)
})
router.post("/:name", (req, res) => {
    DivisionModel.findData(req.body, res.callback)
})
router.post("/count", (req, res) => {
    DivisionModel.count(req.body, res.callback)
})

export default router
