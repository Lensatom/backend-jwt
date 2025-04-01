const bcrypt = require("bcrypt")

const register = async (req, res) => {
  const data = {...req.body}
  const keys = ["first_name", "last_name", "email", "phone", "password"]

  let errRequiredKeys = ""
  for (let i = 0; i < keys.length; i++) {
    if (!data[keys[i]]) {
      errRequiredKeys = `"${keys[i]}" ${errRequiredKeys}`
    }
  }
  if (errRequiredKeys) {
    return res.status(400).send(`${errRequiredKeys} is required`)
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)
  data.password = hashedPassword

  res.send(data)
}

module.exports = { register }