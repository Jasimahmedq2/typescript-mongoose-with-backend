import { Request, Response } from "express";
import { findAllUserService, findSingleUserService, insertUserService } from "./user.service";
import { IUser } from "./user.model";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const userData = await insertUserService(req.body);
    res.status(200).json({ message: "successfully inserted a data", userData });
  } catch (error) {
    console.log(error);
  }
};

export const findSingleUserController = async (req: Request, res: Response) => {
  try {
    const result = await findSingleUserService(req.params.id)
    res.status(200).json({result})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "here was an error"})
  }
};

export const findAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await findAllUserService()
    res.status(200).json({result})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "here was an error"})
  }
};
