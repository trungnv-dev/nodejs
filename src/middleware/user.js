const checkUser = (req, res, next) => {
    console.log(1)
    if (req.params.userId == 1) next()
    else res.status(403).send('Permission!')
}

const checkBook = (req, res, next) => {
    if (req.params.bookId == 1) next()
    else res.status(403).send('Permission!')
}

module.exports = {
    checkUser,
    checkBook
}