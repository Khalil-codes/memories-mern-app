import moment from "moment";
import React, { FC } from "react";
import { Card } from "react-bootstrap";

type Props = {
    title: string;
    creator: string;
    createdAt: Date;
};

const PostOverlay: FC<Props> = ({ title, creator, createdAt }) => {
    return (
        <Card.ImgOverlay>
            <Card.Title
                style={{
                    color: "#fff",
                    fontWeight: 400,
                }}>
                {title}
            </Card.Title>
            <Card.Subtitle
                style={{
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                }}>
                -{creator}, {moment(createdAt).fromNow()}
            </Card.Subtitle>
        </Card.ImgOverlay>
    );
};

export default PostOverlay;
