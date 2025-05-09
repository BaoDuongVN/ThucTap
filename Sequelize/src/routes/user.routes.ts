import {login} from '../controllers/auth.controller';
import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/auth.middlewares';
import { UserRole } from '../models/User.models';

const router = express.Router();

router.post('/login', login);
router.get('/profile', authenticateToken, (req, res) => {
    if (req.user) {
        res.json({
            message: `Welcome ${req.user.userName}`,
            data: req.user
        })
    }
});

router.get('/admin/profile', authenticateToken, authorizeRole([UserRole.ADMIN]), (req, res) => {
    res.json({
        message: `Welcome ${req.user?.userName}`,
        data: req.user
    })
});

export default router;