const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

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

  const accessToken = jwt.sign(
    {username: data.first_name},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '30s'}
  )
  const refreshToken = jwt.sign(
    {username: data.first_name},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: '1d'}
  )

  res.json(data)
}

module.exports = { register }