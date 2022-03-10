export interface IPost {
    _id: string;
    title: string;
    message: string;
    creator: string;
    tags: string[];
    selectedFile: string;
    likeCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface IPostClient {
    title: string;
    message: string;
    creator: string;
    tags: string;
    selectedFile: string;
}
export interface IReduxInitialState {
    posts?: IPost[];
    loading: boolean;
    error: boolean;
}

export interface IGoogleUser {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
}

export interface INormalUser {
    _id: string;
    imageUrl?: string;

    email: string;
    name: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICred {
    email: string;
    password: string;
}

export interface IUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
