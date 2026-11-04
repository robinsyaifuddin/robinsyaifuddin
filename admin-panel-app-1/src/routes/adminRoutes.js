import express from 'express';
import AdminController from '../controllers/adminController';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const adminController = new AdminController();

export default function setAdminRoutes(app) {
    app.use('/admin', router);

    router.post('/login', adminController.login);
    router.get('/content', authenticate, adminController.getContent);
    router.put('/content/:id', authenticate, adminController.updateContent);
    // Add more routes as needed for content management
}