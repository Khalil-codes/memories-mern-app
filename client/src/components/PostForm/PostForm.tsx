import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import { IPostClient } from "../../types";

const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const PostForm: FC = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState<IPostClient>({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file && file[0]) {
            const base64 = await convertBase64(file[0]);
            setPostData((prev) => ({
                ...prev,
                [e.target.name]: base64,
            }));
        }
    };
    const handleReset = () => {
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
        });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            dispatch(createPost(postData));
        } catch (error: any) {
            console.log(error);
        }

        handleReset();
    };
    return (
        <Card style={{ width: "95%", margin: "auto", padding: "20px" }}>
            <Card.Title>Add Post</Card.Title>
            <Card.Body>
                <Card.Text>Please Fill the following fields</Card.Text>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Creator</Form.Label>
                        <Form.Control
                            name="creator"
                            type="text"
                            placeholder="Enter Creator Name..."
                            value={postData.creator}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Enter Title..."
                            value={postData.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                            name="message"
                            as="textarea"
                            placeholder="Enter Message..."
                            value={postData.message}
                            onChange={handleChange}
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tags: (Comma Separated)</Form.Label>
                        <Form.Control
                            name="tags"
                            type="text"
                            placeholder="Separate tags using comma"
                            value={postData.tags}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image: </Form.Label>
                        <Form.Control
                            type="file"
                            name="selectedFile"
                            multiple={false}
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={handleFileUpload}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button
                        variant="secondary"
                        type="reset"
                        className="ms-2"
                        onClick={handleReset}>
                        Reset
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PostForm;