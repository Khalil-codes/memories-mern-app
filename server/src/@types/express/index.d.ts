// import { Express } from "express";

declare module Express {
    export interface Request {
        user: {
            _id: string;
            firstName: string;
            lastName: string;
            name: string;
        } | null;
    }
}

// declare global {
//     namespace Express {
//         export interface Request {
//             user: {
//                 _id: string;
//                 firstName: string;
//                 lastName: string;
//                 name: string;
//             } | null;
//         }
//     }
// }
