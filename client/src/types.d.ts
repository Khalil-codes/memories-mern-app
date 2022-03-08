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