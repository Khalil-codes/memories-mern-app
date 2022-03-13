export interface IPost {
    userId: string;
    id: string;
    title: string;
    message: string;
    author: string;
    authorId: string;
    tags: string[];
    selectedFile: string;
    likes: string[];
    likeCount: number;
    createdAt: Date;
    updatedAt: Date;
}
