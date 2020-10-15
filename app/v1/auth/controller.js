const db = require.main.require('./helpers/db.js')
const bcrypt = require('bcryptjs');

const login = (req, res) => {
    const { email, pswd} = req.body
    const user = await db('users').select().where({ email })

    const result = bcrypt.compare(pswd, user[0].pswd)
    if(!result)
    return res.status(400).json({message: `Invalid credentials`})
    
}

