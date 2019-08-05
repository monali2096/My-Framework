export default function(req, res) {
    return (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else if (data) {
            console.log("callback.js", err, data, res)

            res.json(data)
        } else {
            res.status(200).send()
        }
    }
}
