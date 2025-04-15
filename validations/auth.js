import { body } from 'express-validator';


export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    body('fullName', 'Full name must be at least 3 characters long').isLength({ min: 3 }),
    body('avatarUrl', 'Invalid URL format').optional().isURL(),
];