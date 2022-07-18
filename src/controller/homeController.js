import connection from '../configs/connectDB.js'
import userService from '../services/userService.js'

const index = async (req, res) => {
    const [rows, fields] = await connection.execute(`SELECT * FROM users`);

    return res.render('index.ejs', { users: rows });
}

const create = (req, res) => {
    return res.render('create.ejs');
}

const store = async (req, res) => {
    let {first_name, last_name, email, age, address} = req.body;

    await connection.execute(
        `INSERT INTO users (first_name, last_name, email, age, address) VALUES (?, ?, ?, ?, ?)`,
        [
            first_name, last_name, email, age, address
        ]
    );

    return res.redirect('/');
}

const show = async (req, res) => {
    let userId = req.params.userId;

    const [rows] = await connection.execute(`SELECT * FROM users WHERE id = ${userId}`);

    return res.render('detail.ejs', { user: rows[0] });
}

const edit = async (req, res) => {
    let userId = req.params.userId;

    const [rows] = await connection.execute(`SELECT * FROM users WHERE id = ?`, [userId]);

    return res.render('edit.ejs', { user: rows[0] });
}

const update = async (req, res) => {
    let userId = req.params.userId;
    let {first_name, last_name, email, age, address} = req.body;

    await connection.execute(
        `UPDATE users SET first_name = ?, last_name = ?, email = ?, age = ?, address = ? WHERE id = ?`,
        [
            first_name, last_name, email, age, address, userId
        ]
    );

    return res.redirect('/');
}

const destroy = async (req, res) => {
    let userId = req.params.userId;

    await connection.execute(`DELETE FROM users WHERE id = ?`, [userId]);

    return res.redirect('/');
}

module.exports = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy,
}
