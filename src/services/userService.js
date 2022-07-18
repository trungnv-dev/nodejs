import connection from '../configs/connectDB.js'

const getAll = (req, res) => {
    connection.query(
        `SELECT * FROM users`,
        function (err, results, fields) {
            return results
        }
    );
}

module.exports = {
    getAll
}

// export default getAll;
