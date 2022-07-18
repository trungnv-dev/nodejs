import express from 'express'
import homeController from '../controller/homeController'
import middlewareUser from '../middleware/user'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.index)

    router.get('/users/create', homeController.create)

    router.post('/users', homeController.store)

    router.get('/users/:userId', homeController.show)

    router.get('/users/:userId/edit', homeController.edit)

    router.post('/users/:userId', homeController.update)

    router.post('/users/:userId/delete', homeController.destroy)

    router.get('/users/:userId/book/:bookId', [middlewareUser.checkUser, middlewareUser.checkBook, homeController.show])

    return app.use('/', router)
}

export default initWebRoute;
