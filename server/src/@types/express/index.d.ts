declare module Express {
    export interface Request {
        user: {
            _id: string;
            email: string;
            firstName: string;
            lastName: string;
            name: string;
        };
    }
}
