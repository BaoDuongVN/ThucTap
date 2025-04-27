import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response): void => {
    res.status(200).json({
        message: 'ok'
    })
}

export const createNewUser = (req: Request, res: Response): void => {
    const {name, email} = req.body;
    console.log(name, email);
    if (!name || !email) {
        res.status(400).json({
            message: 'Missing required params'
        });
    } else {
        const newUser = { id: Date.now(), name, email };
        console.log(newUser);
        res.status(200).json({
            message: 'User created successfully',
            data: newUser
        })
    }
}
