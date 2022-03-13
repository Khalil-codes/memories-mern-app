import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser } from "../@types/user";
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
            const isCustomAuth = token.length < 500;
            let decoded;
            // Verify Token
            if (token && isCustomAuth) {
                decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET as string
                ) as JwtPayload;
                // Get User from the token
                req.user = (await User.findById(decoded.id).select(
                    "-password -createdAt -updatedAt"
                )) as IUser;
            } else {
                decoded = jwt.decode(token) as JwtPayload;
                const { sub: _id }: { sub?: any } = decoded;
                const {
                    email,
                    given_name: firstName,
                    family_name: lastName,
                    name,
                } = decoded;
                req.user = { _id, email, firstName, lastName, name };
            }
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
