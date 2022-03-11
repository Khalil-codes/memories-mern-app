export interface IUser {
    _id: string;
    name: string;
    imageUrl?: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
