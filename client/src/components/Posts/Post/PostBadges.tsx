import React, { FC } from "react";
import { Badge } from "react-bootstrap";

type Props = {
    tags: string[];
};
const getRandomBadge = () => {
    const bg = ["primary", "secondary", "success", "dark"];
    return bg[Math.trunc(Math.random() * bg.length) + 1];
};
const PostBadges: FC<Props> = ({ tags }) => {
    return (
        <div className="mb-2">
            {tags.map((tag: string) => (
                <Badge
                    key={tag}
                    bg={getRandomBadge()}
                    style={{ opacity: 0.7 }}
                    className="me-1">
                    # {tag}
                </Badge>
            ))}
        </div>
    );
};

export default PostBadges;
