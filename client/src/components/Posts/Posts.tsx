import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/postSlice";
import { usePosts } from "../../redux/store";
import Post from "./Post/Post";

type Props = {};

const Posts = (props: Props) => {
    const { posts, loading, error } = usePosts();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsub = () => {
            dispatch(getPosts());
        };
        unsub();
    }, [dispatch]);
    console.log(posts);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Somthing went wrong...</div>;
    return (
        <>
            <h1>Posts</h1>

            <Post />
        </>
    );
};

export default Posts;
