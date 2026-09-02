import express from "express"

const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    return res.json({
        msg: "Hello from the AWS server its Running, Let test "
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
})