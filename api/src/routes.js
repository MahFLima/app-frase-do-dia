import express from 'express';
import usersController from './controllers/userController.js'

const routes = express()

routes.use('/', usersController)

export default routes