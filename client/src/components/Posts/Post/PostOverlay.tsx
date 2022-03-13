import moment from "moment";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

type Props = {
    author: string;
    createdAt: Date;
};

const PostOverlay: FC<Props> = ({ author, createdAt }) => {
    return (
        <Card.ImgOverlay>
            <Card.Title
                style={{
                    color: "#fff",
                    fontWeight: 400,
                }}>
                {author}
            </Card.Title>
            <Card.Subtitle
                style={{
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                }}>
                {moment(createdAt).fromNow()}
            </Card.Subtitle>
        </Card.ImgOverlay>
    );
};

export default PostOverlay;
