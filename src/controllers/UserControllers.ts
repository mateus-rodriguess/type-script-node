import {Request, Response} from "express"
import User  from "../models/User"

class UserController{
    public async index(req: Request, res: Response): Promise<Response>{
        try {
            const users = await User.find()
            return res.json({users:users})

        } catch (error) {
           return res.status(500).json({"message":"error"}) 
        }
    }
}

export default new UserController()