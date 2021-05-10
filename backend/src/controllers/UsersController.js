const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

const User = require('../models/User');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        if (user_id) {
            const user = await User.findByPk(user_id)

            return res.send(user)
        }

        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await User.create({ name, email, password: hashPassword })

        return res.send({
            user,
            token: generateToken({ id: user.id })
        })
    },

    async authenticate(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) return res.json({ error: 'User not found.' })

        if (!await bcrypt.compare(password, user.password)) return res.json({ error: 'Wrong password.' })

        user.password = undefined

        res.send({
            user,
            token: generateToken({ id: user.id })
        })
    }
}