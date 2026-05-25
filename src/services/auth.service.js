const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const AppError = require('../errors/AppError')
const userModel = require('../models/user.model')

exports.login = async (username, password) => {
  if (!username || !password) {
    throw new AppError('USERNAME_PASSWORD_REQUIRED', 400)
  }

  const user = await userModel.findByUsername(username)

  if (!user) {
    throw new AppError('INVALID_CREDENTIALS', 401)
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new AppError('INVALID_CREDENTIALS', 401)
  }

  const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
  )

  return { token }
}

exports.register = async (payload) => {
  const { username, password } = payload

  if (!username || !password) {
    throw new AppError('USERNAME_PASSWORD_REQUIRED', 400)
  }

  const existingUser = await userModel.findByUsername(username)

  if (existingUser) {
    throw new AppError('USERNAME_ALREADY_EXISTS', 400)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await userModel.create({
    id: crypto.randomUUID(),
    username,
    password: hashedPassword,
    role: 'user'
  })

  return {
    message: 'REGISTER_SUCCESS'
  }
}

