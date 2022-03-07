export interface IPost {
    title: string;
    message: string;
    creator: string;
    tags: string[];
    selectedFile: string;
    likeCount: number;
    createdAt: Date;
    updatedAt: Date;
}
