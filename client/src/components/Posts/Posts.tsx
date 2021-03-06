import React, { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/postSlice";
import { usePosts } from "../../redux/store";
import Post from "./Post/Post";

const Posts = () => {
    const { posts, loading, error } = usePosts();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsub = () => {
            dispatch(getPosts(null));
        };
        unsub();
    }, [dispatch]);
    if (loading) return <Spinner animation="border" />;
    if (error) return <h4>Somthing went wrong...</h4>;
    return (
        <>
            <h1>Posts</h1>
            <Row>
                {posts?.length === 0 ? (
                    <h4>No Post Available. Please Add One</h4>
                ) : (
                    posts?.map((post) => (
                        <Col lg={6} md={6} sm={12} key={post._id}>
                            <Post post={post} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    );
};

export default Posts;
