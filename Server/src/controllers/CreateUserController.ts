import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

import bcrypt from 'bcrypt';



export class CreateUserController{
    async create( req: Request , res: Response ){
        const { email, name, password } = req.body;

        const userExists = await userRepository.findOneBy({ email });

        if (userExists) {
			return res.status(400).json({message: 'Email already exists'})
		};

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword
        });

        await userRepository.save(newUser);

        const { password: _, ...user } = newUser;

        return res.status(201).json(user);
    };

}

