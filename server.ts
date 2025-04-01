const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use("/", require("./routes/root.ts"))
app.use("/register", require("./routes/register.ts"))

app.listen(PORT, () => {
  console.log("Server running")
})