import { NextFunction, Request, Response } from "express";
// import { NextFunction, Response } from "express";
// import {Request} from "../types/express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";

const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get Token from header
            token = req.headers.authorization.split(" ")[1];
            // Verify Token
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET as string
            ) as JwtPayload;
            // Get User from the token
            console.log(decoded);
            req.user = await User.findById(decoded.id).select(
                "-password -createdAt -updatedAt"
            );
            // Continuing middleware stack
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ status: "fail", message: "Not Authorized" });
        }
    }
    if (!token) {
        res.status(500).json({
            status: "fail",
            message: "Not Authorized, No Token Provided",
        });
    }
};

export default protect;
