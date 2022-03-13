import { Request, Response } from "express";
import User from "../models/userModel";
import { IUser } from "../@types/user";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    const existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
        res.status(404).json({
            status: "fail",
            message: "User already exists",
        });
    }
    // Hash The Passoword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            status: "success",
            data: {
                ...user,
                password: undefined,
                token: generateToken(user._id),
            },
        });
    } else {
        res.status(404).json({
            status: "fail",
            message: "Something went wrong",
        });
    }
};
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Check if user exists
    const user: IUser | null = await User.findOne({ email });
    if (!user) {
        res.status(400);
        res.json({ status: "fail", message: "user doesnt exists" });
    }
    // Check Password
    if (await bcrypt.compare(password, user?.password as string)) {
        res.status(201).json({
            status: "success",
            data: {
                user,
                token: generateToken(user?._id as string),
            },
        });
    } else {
        res.status(400);
        throw new Error("Invalid Password Try Again");
    }
};
// Generate JWT
const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });
};
