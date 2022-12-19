import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { userRepository } from "../repositories/userRepository";

export class LoginUserController{

    async login( req: Request , res: Response ){
        const { email, password } = req.body;

        const user = await userRepository.findOneBy({ email });
        if (!user) {
			return res.status(400).json({message: 'Invalid E-mail or Password'})
		};

        const verifyPass = await bcrypt.compare(password, user.password);
        if(!verifyPass){
            return res.status(400).json({message: 'Invalid E-mail or Password'})
        };

        const token = jwt.sign(
            { id: user.id }, 
            process.env.JWT_PASS ?? '', 
            {expiresIn: '8h'}
            );

        const {password: _, ...userLogin} = user;

        return res.json({
            user: userLogin,
            token: token,
        });
    };

    async getProfile( req: Request , res: Response ){
        res.json(req.user);
    };
}